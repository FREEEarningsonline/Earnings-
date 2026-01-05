import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove, update, runTransaction, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS1tlxucgLDKWNro7Z-HlHRiBuB2JW-DE",
    authDomain: "fir-15a0b.firebaseapp.com",
    databaseURL: "https://fir-15a0b-default-rtdb.firebaseio.com",
    projectId: "fir-15a0b",
    storageBucket: "fir-15a0b.firebasestorage.app",
    messagingSenderId: "277816260673",
    appId: "1:277816260673:web:9ff0217fc31de7c7f62ec0",
    measurementId: "G-47W3KGH66C"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// --- STATE ---
let user = null;
let allVideos = {};
let currentVidId = null;
let currentUploader = null;
let isLogin = true;
let charts = {}; 
let studioTab = 'dashboard';
let currentCategory = 'All';

// --- GLOBAL CATEGORIES DEFINITION ---
const CATEGORIES = ["All", "Music", "Gaming", "Code", "News", "Sports", "Live", "Learning", "Java", "Python", "Vlogs", "Comedy"];

// --- DOM ELEMENTS ---
const grid = document.getElementById('video-grid');
const authSec = document.getElementById('auth-section');
const catContainer = document.getElementById('category-bar');
const catSelect = document.getElementById('inp-cat');
const wSubCount = document.getElementById('w-sub-count');

// --- UTILITY FUNCTION FOR CHANNEL NAMES ---
function cleanChannelName(name) {
    // Replaces characters that Firebase paths don't like, and trims spaces.
    return name.replace(/[.#$/[\]\s]/g, '_'); 
}

// Check Local Storage for Theme
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// --- CATEGORIES RENDER ---
function renderCategories() {
    catContainer.innerHTML = '';
    catSelect.innerHTML = '<option value="">-- Select Category (Optional) --</option>'; // Default option for modal

    CATEGORIES.forEach((cat, index) => {
        // 1. Render Bubble Pills
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.className = 'cat-pill';
        if(index === 0) btn.classList.add('active');
        
        const gradientColors = [
            'linear-gradient(135deg, #FF9A9E, #FECFEF)', 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
            'linear-gradient(135deg, #84fab0, #8fd3f4)', 'linear-gradient(135deg, #cfd9df, #e2ebf0)',
            'linear-gradient(135deg, #a6c0fe, #f68084)', 'linear-gradient(135deg, #fccb90, #d57eeb)',
            'linear-gradient(135deg, #e0c3fc, #8ec5fc)', 'linear-gradient(135deg, #f093fb, #f5576c)',
            'linear-gradient(135deg, #4facfe, #00f2fe)', 'linear-gradient(135deg, #43e97b, #38f9d7)'
        ];
        
        if(cat !== "All") {
            btn.style.background = gradientColors[index % gradientColors.length];
            btn.style.color = "#0f0f0f"; 
        } else {
            btn.style.background = "var(--black)";
        }

        btn.onclick = () => {
            document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = cat;
            window.renderGrid(allVideos);
        };
        catContainer.appendChild(btn);

        // 2. Populate Modal Dropdown (Skip 'All' for video specific category)
        if (cat !== "All") {
            catSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        }
    });
}
renderCategories(); // Initial call to setup categories

// --- AUTH OBSERVER ---
onAuthStateChanged(auth, (u) => {
    user = u;
    if(u) {
        const displayName = u.displayName ? u.displayName : u.email.split('@')[0];
        const letter = displayName[0].toUpperCase();
        authSec.innerHTML = `<div class="avatar" onclick="window.openStudio()" title="${displayName}">${letter}</div>`;
        document.getElementById('logout-btn').style.display = 'block';
        const photo = u.photoURL ? u.photoURL : `https://ui-avatars.com/api/?name=${displayName}&background=random`;
        document.getElementById('my-avatar-comment').src = photo;
        loadSidebarSubscriptions(u.uid);
    } else {
        authSec.innerHTML = `<button class="auth-btn" onclick="window.openAuth()"><span class="material-symbols-rounded">account_circle</span> Sign in</button>`;
        document.getElementById('logout-btn').style.display = 'none';
        document.getElementById('sub-list-container').innerHTML = `<div style="padding: 0 12px; font-size: 13px; color: var(--text-light);">Sign in to see subscriptions</div>`;
        if(document.getElementById('studio-view').style.display === 'block') window.closeStudio();
    }
});

// --- LOAD VIDEOS & NOTIFICATIONS ---
onValue(ref(db, 'videos'), (snap) => {
    allVideos = snap.val() || {};
    if(document.getElementById('page-heading').innerText === 'Home') {
        window.renderGrid(allVideos);
    }
    
    const ids = Object.keys(allVideos).reverse().slice(0, 5);
    const notifList = document.getElementById('notif-list');
    notifList.innerHTML = "";
    ids.forEach(id => {
        const v = allVideos[id];
        notifList.innerHTML += `
            <div class="notif-item" onclick="window.openWatch('${id}')">
                <img src="${v.thumbnail}">
                <div>
                    <div style="font-size:14px; font-weight:600; color:var(--text-main);">${v.title}</div>
                    <div style="font-size:12px; color:var(--text-light);">${v.uploader}</div>
                </div>
            </div>
        `;
    });
    document.getElementById('notif-badge').style.display = ids.length > 0 ? 'block' : 'none';
    if(document.getElementById('studio-view').style.display === 'block') {
        if(studioTab === 'dashboard') window.renderStudioTable();
    }
});

// =======================================================
// ALL FUNCTIONS ACCESSED FROM HTML MUST BE GLOBAL (window.)
// =======================================================

window.formatViews = (n) => { if(n>=1000000)return(n/1000000).toFixed(1)+'M'; if(n>=1000)return(n/1000).toFixed(1)+'K'; return n; }
window.timeAgo = (ts) => { const s=Math.floor((Date.now()-ts)/1000); if(s<60)return'Just now'; const m=Math.floor(s/60); if(m<60)return m+' mins ago'; const h=Math.floor(m/60); if(h<24)return h+' hours ago'; const d=Math.floor(h/24); return d+' days ago'; }

window.renderGrid = (videos, isHistory = false) => {
    grid.innerHTML = "";
    let items = [];

    if(isHistory) {
        items = videos; 
    } else {
        Object.entries(videos).forEach(([id, data]) => {
            items.push({...data, id: id});
        });
        items.reverse(); 
    }

    // Filter logic now checks the explicit 'category' field OR the title/description
    if(currentCategory !== "All" && !isHistory) {
        items = items.filter(v => 
            (v.category && v.category === currentCategory) || 
            v.title.toLowerCase().includes(currentCategory.toLowerCase())
        );
    }

    if(items.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px; color:var(--text-light);">No videos found for "${currentCategory}".</div>`;
        return;
    }

    items.forEach(v => {
        const div = document.createElement('div');
        div.className = 'card';
        div.onclick = () => window.openWatch(v.id || v.videoId);
        div.innerHTML = `
            <div class="thumb-box">
                <img src="${v.thumbnail}" onerror="this.src='https://via.placeholder.com/640x360'">
                <div class="dur-badge">${v.duration || '00:00'}</div>
            </div>
            <div class="meta-flex">
                <img src="https://ui-avatars.com/api/?name=${v.uploader}&background=random" class="chn-avatar">
                <div class="meta-text">
                    <h3>${v.title}</h3>
                    <p>${v.uploader}</p>
                    <p>${window.formatViews(v.views)} views • ${window.timeAgo(v.timestamp)}</p>
                    ${v.category ? `<p style="font-size:12px; color:var(--accent-purple);">${v.category}</p>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(div);
    });
}

window.handleSearch = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = {};
    Object.entries(allVideos).forEach(([id, v]) => {
        if(v.title.toLowerCase().includes(query) || (v.category && v.category.toLowerCase().includes(query))) filtered[id] = v;
    });
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    window.renderGrid(filtered);
}

window.openWatch = (id) => {
    currentVidId = id;
    const v = allVideos[id];
    if(!v) return;

    currentUploader = v.uploader;
    push(ref(db, `analytics/${id}/views`), { t: Date.now() });
    runTransaction(ref(db, `videos/${id}/views`), (c) => (c || 0) + 1);
    
    if(user) {
        push(ref(db, `users/${user.uid}/history`), { videoId: id, timestamp: Date.now() });
    }

    document.getElementById('watch-view').style.display = 'block';
    document.getElementById('category-bar').style.display = 'none';
    document.getElementById('main-player').src = convertToEmbed(v.videoUrl);
    document.getElementById('w-title').innerText = v.title;
    document.getElementById('w-chn-name').innerText = v.uploader;
    document.getElementById('w-chn-img').src = `https://ui-avatars.com/api/?name=${v.uploader}&background=random`;
    document.getElementById('w-desc').innerText = v.description || "No description.";
    document.getElementById('w-meta').innerText = `${window.formatViews((v.views||0) + 1)} views • ${new Date(v.timestamp).toLocaleDateString()}`;

    updateLikeButton(id);
    checkSubscriptionStatus(v.uploader);
    loadComments(id);
    
    // NEW: Load subscriber count on watch page open using cleaned name
    const cleanedChannelName = cleanChannelName(v.uploader);
    onValue(ref(db, `channel_stats/${cleanedChannelName}/subscribers`), (snap) => {
        wSubCount.innerText = `${window.formatViews(snap.val() || 0)} subscribers`;
    });
}

window.closeWatch = () => {
    document.getElementById('watch-view').style.display = 'none';
    document.getElementById('category-bar').style.display = 'flex';
    document.getElementById('main-player').src = "";
    currentVidId = null;
}

function convertToEmbed(url) {
    if (!url) return '';
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    
    const driveMatch = url.match(/\/d\/(.*?)\//);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    
    return url;
}

function updateLikeButton(vidId) {
    const btn = document.getElementById('like-btn');
    const counter = document.getElementById('w-likes');
    const icon = document.getElementById('like-icon');
    get(ref(db, `likes/${vidId}`)).then(snap => { counter.innerText = window.formatViews(snap.size); });
    if(user) {
        get(ref(db, `likes/${vidId}/${user.uid}`)).then(snap => {
            if(snap.exists()) { btn.classList.add('active'); icon.innerText = "thumb_up_alt"; } 
            else { btn.classList.remove('active'); icon.innerText = "thumb_up"; }
        });
    } else { btn.classList.remove('active'); icon.innerText = "thumb_up"; }
}

window.toggleLike = () => {
    if(!user) return window.openAuth();
    if(!currentVidId) return;
    const likeRef = ref(db, `likes/${currentVidId}/${user.uid}`);
    get(likeRef).then(snap => {
        if(snap.exists()) {
            remove(likeRef);
            document.getElementById('like-btn').classList.remove('active');
            document.getElementById('like-icon').innerText = "thumb_up";
            get(ref(db, `likes/${currentVidId}`)).then(s => document.getElementById('w-likes').innerText = window.formatViews(s.size));
        } else {
            set(likeRef, true);
            document.getElementById('like-btn').classList.add('active');
            document.getElementById('like-icon').innerText = "thumb_up_alt";
            get(ref(db, `likes/${currentVidId}`)).then(s => document.getElementById('w-likes').innerText = window.formatViews(s.size));
        }
    });
}

function checkSubscriptionStatus(uploader) {
    const btn = document.getElementById('sub-btn');
    const nameToCheck = uploader;
    const myName = user ? (user.displayName || user.email.split('@')[0]) : '';
    if(!user || myName === nameToCheck) { 
         btn.innerText = (myName === nameToCheck) ? "My Channel" : "Subscribe"; 
         btn.classList.remove('subscribed'); 
         btn.disabled = (myName === nameToCheck);
         return; 
    }
    btn.disabled = false;
    
    const cleanedChannelName = cleanChannelName(uploader);

    get(ref(db, `users/${user.uid}/subscriptions/${cleanedChannelName}`)).then(snap => {
        if(snap.exists()) { btn.innerText = "Subscribed"; btn.classList.add('subscribed'); } 
        else { btn.innerText = "Subscribe"; btn.classList.remove('subscribed'); }
    });
}

window.toggleSubscribe = () => {
    if(!user) return window.openAuth();
    const myName = user.displayName || user.email.split('@')[0];
    if(myName === currentUploader) return alert("Cannot subscribe to yourself");
    
    const cleanedChannelName = cleanChannelName(currentUploader);

    const subRef = ref(db, `users/${user.uid}/subscriptions/${cleanedChannelName}`);
    const channelStatsRef = ref(db, `channel_stats/${cleanedChannelName}/subscribers`);
    const btn = document.getElementById('sub-btn');

    get(subRef).then(snap => {
        if(snap.exists()) {
            // Unsubscribe
            remove(subRef);
            runTransaction(channelStatsRef, (current) => (current || 1) - 1);
            btn.innerText = "Subscribe"; btn.classList.remove('subscribed');
        } else {
            // Subscribe
            set(subRef, true);
            runTransaction(channelStatsRef, (current) => (current || 0) + 1);
            btn.innerText = "Subscribed"; btn.classList.add('subscribed');
        }
    });
}

function loadSidebarSubscriptions(uid) {
    const list = document.getElementById('sub-list-container');
    onValue(ref(db, `users/${uid}/subscriptions`), (snap) => {
        const subs = snap.val();
        list.innerHTML = "";
        if(subs) {
            Object.keys(subs).forEach(cleanedName => {
                // Display the cleaned name, although ideally we would save the original name elsewhere
                list.innerHTML += `<div class="sub-list-item"><img src="https://ui-avatars.com/api/?name=${cleanedName}&background=random"><span>${cleanedName.replace(/_/g, ' ')}</span></div>`;
            });
        } else { list.innerHTML = `<div style="padding: 0 12px; font-size: 13px; color: var(--text-light);">No subscriptions yet.</div>`; }
    });
}

function loadComments(vidId) {
    onValue(ref(db, 'comments/' + vidId), (snap) => {
        const list = document.getElementById('comment-list');
        list.innerHTML = "";
        const data = snap.val();
        if(data) {
            document.getElementById('comment-count').innerText = `${Object.keys(data).length} Comments`;
            Object.values(data).reverse().forEach(c => {
                list.innerHTML += `
                    <div class="comment-item">
                        <img src="https://ui-avatars.com/api/?name=${c.user}&background=random" class="chn-avatar">
                        <div>
                            <div class="comment-meta"><span class="comment-author">@${c.user}</span><span style="color:var(--text-light);">${window.timeAgo(c.time)}</span></div>
                            <div class="comment-text">${c.text}</div>
                        </div>
                    </div>`;
            });
        } else {
            document.getElementById('comment-count').innerText = "Comments";
            list.innerHTML = "<div style='color:var(--text-light); font-size:14px; font-style:italic;'>No comments yet.</div>";
        }
    });
}

window.postComment = () => {
    if(!user) return window.openAuth();
    const txt = document.getElementById('comment-text').value;
    if(!txt.trim()) return;
    const name = user.displayName || user.email.split('@')[0];
    push(ref(db, 'comments/' + currentVidId), { text: txt, user: name, uid: user.uid, time: Date.now() });
    document.getElementById('comment-text').value = "";
}

function setActiveMenu(id) {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.closeWatch(); window.closeStudio();
    document.getElementById('sidebar').classList.remove('mobile-open');
}

window.goHome = () => {
    setActiveMenu('btn-home');
    document.getElementById('page-heading').innerText = "Home";
    document.getElementById('page-heading').style.display = "none";
    document.getElementById('category-bar').style.display = 'flex';
    window.renderGrid(allVideos);
}

window.openHistory = () => {
    if(!user) return window.openAuth();
    setActiveMenu('btn-history');
    document.getElementById('page-heading').innerText = "Watch History";
    document.getElementById('page-heading').style.display = "block";
    document.getElementById('category-bar').style.display = 'none';
    grid.innerHTML = "Loading history...";
    get(ref(db, `users/${user.uid}/history`)).then(snap => {
        const data = snap.val();
        if(!data) { grid.innerHTML = "<div style='grid-column:1/-1; text-align:center;'>No history found.</div>"; return; }
        const histList = Object.values(data).sort((a,b) => b.timestamp - a.timestamp).map(h => {
            return { ...allVideos[h.videoId], id: h.videoId, timestamp: h.timestamp };
        });
        window.renderGrid(histList, true);
    });
}

window.openLikedVideos = () => {
     if(!user) return window.openAuth();
     setActiveMenu('btn-liked');
     document.getElementById('page-heading').innerText = "Liked Videos";
     document.getElementById('page-heading').style.display = "block";
     document.getElementById('category-bar').style.display = 'none';
     grid.innerHTML = "Loading liked videos...";
     get(ref(db, 'likes')).then(snap => {
         const likesMap = snap.val() || {};
         const myLikedIds = [];
         Object.entries(likesMap).forEach(([vidId, usersWhoLiked]) => { if(usersWhoLiked[user.uid]) myLikedIds.push(vidId); });
         const likedVids = myLikedIds.map(id => ({...allVideos[id], id: id}));
         window.renderGrid(likedVids, true);
     });
}

window.openStudio = () => {
    if(!user) return window.openAuth();
    document.getElementById('studio-view').style.display = 'block';
    document.getElementById('sidebar').classList.remove('mobile-open');
    window.switchStudioTab('dashboard');
}
window.closeStudio = () => { document.getElementById('studio-view').style.display = 'none'; }

window.switchStudioTab = (tab) => {
    studioTab = tab;
    document.getElementById('std-dash-btn').classList.remove('active');
    document.getElementById('std-set-btn').classList.remove('active');
    
    if(tab === 'dashboard') {
        document.getElementById('std-dash-btn').classList.add('active');
        window.renderStudioTable();
    } else {
        document.getElementById('std-set-btn').classList.add('active');
        window.renderStudioSettings();
    }
}

window.renderStudioTable = () => {
    const container = document.getElementById('studio-content-area');
    const myVideos = Object.entries(allVideos).filter(([_, v]) => v.uid === user.uid).reverse();
    let totalViews = 0;
    myVideos.forEach(([_, v]) => totalViews += (v.views || 0));

    let html = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <h2 style="color:var(--black);">Channel Dashboard</h2>
            <button class="btn-primary" style="width:auto;" onclick="window.openChannelAnalytics()">View Channel Analytics</button>
        </div>
        <div class="st-stat-grid">
            <div class="stat-box"><h2>${myVideos.length}</h2><p>Videos Uploaded</p></div>
            <div class="stat-box"><h2>${window.formatViews(totalViews)}</h2><p>Total Views</p></div>
        </div>
        <div class="st-card">
            <h3 style="margin-bottom:15px; color:var(--black);">Video Content</h3>
            <div class="video-table-wrapper">
                <table class="video-table">
                    <thead><tr><th width="50%">Video</th><th>Date</th><th>Views</th><th>Actions</th></tr></thead>
                    <tbody>
    `;
    if(myVideos.length === 0) html += `<tr><td colspan="4" style="text-align:center; color:var(--text-light);">No videos uploaded yet.</td></tr>`;
    myVideos.forEach(([id, v]) => {
        html += `
            <tr>
                <td>
                    <div style="display:flex; gap:12px; align-items:center;">
                        <img src="${v.thumbnail}" style="width:100px; height:56px; border-radius:8px; object-fit:cover;">
                        <div><div style="font-weight:600; color:var(--text-main);">${v.title}</div><div style="color:gray; font-size:12px;">${v.duration||'--'}</div></div>
                    </div>
                </td>
                <td>${new Date(v.timestamp).toLocaleDateString()}</td>
                <td>${v.views || 0}</td>
                <td>
                    <button class="action-icon view" onclick="window.openAnalytics('${id}')" title="Analytics"><span class="material-symbols-rounded">analytics</span></button>
                    <button class="action-icon edit" onclick="window.openEdit('${id}')" title="Edit"><span class="material-symbols-rounded">edit</span></button>
                    <button class="action-icon delete" onclick="window.deleteVideo('${id}')" title="Delete"><span class="material-symbols-rounded">delete</span></button>
                </td>
            </tr>`;
    });
    html += `</tbody></table></div></div>`;
    container.innerHTML = html;
}

window.renderStudioSettings = () => {
    const container = document.getElementById('studio-content-area');
    const isDark = document.body.classList.contains('dark-mode');
    container.innerHTML = `
        <h2 style="color:var(--black); margin-bottom:20px;">Profile & Settings</h2>
        <div class="st-card" style="max-width:600px;">
            <div class="inp-group">
                <label>Display Name</label>
                <input type="text" id="prof-name" value="${user.displayName || ''}" placeholder="Enter your name">
            </div>
            <div class="inp-group">
                <label>Profile Picture URL</label>
                <input type="text" id="prof-pic" value="${user.photoURL || ''}" placeholder="https://...">
            </div>
            <div style="margin-bottom:20px;">
                 <label style="display:block; font-size:13px; color:var(--text-light); margin-bottom:6px; font-weight:600;">Theme Preference</label>
                 <select id="theme-select" onchange="window.applyTheme(this.value)">
                    <option value="light" ${!isDark ? 'selected' : ''}>Light Mode</option>
                    <option value="dark" ${isDark ? 'selected' : ''}>Dark Mode</option>
                 </select>
            </div>
            <button class="btn-primary" onclick="window.handleProfileUpdate()">Save Changes</button>
        </div>
    `;
}

window.handleProfileUpdate = async () => {
    const name = document.getElementById('prof-name').value;
    const pic = document.getElementById('prof-pic').value;
    try {
        await updateProfile(auth.currentUser, { displayName: name, photoURL: pic });
        alert("Profile updated successfully!");
        location.reload();
    } catch (error) { alert("Error: " + error.message); }
}

window.applyTheme = (val) => {
    if(val === 'dark') { document.body.classList.add('dark-mode'); localStorage.setItem('theme', 'dark'); } 
    else { document.body.classList.remove('dark-mode'); localStorage.setItem('theme', 'light'); }
}

window.openAnalytics = async (id) => {
    const v = allVideos[id];
    document.getElementById('modal-heading').innerText = "Video Analytics";
    document.getElementById('an-title').innerText = v.title;
    window.closeModals(); 
    document.getElementById('analytics-modal').style.display = 'flex';
    
    const snap = await get(ref(db, `analytics/${id}/views`));
    const viewData = snap.val() || {};
    const timestamps = Object.values(viewData).map(x => x.t);
    renderRealtimeChart(timestamps);
    renderPerformanceChart(timestamps);
}

window.openChannelAnalytics = async () => {
     document.getElementById('modal-heading').innerText = "Channel Analytics";
     document.getElementById('an-title').innerText = "Overall Performance (All Videos)";
     window.closeModals(); 
     document.getElementById('analytics-modal').style.display = 'flex';
     
     const myVideoIds = Object.keys(allVideos).filter(id => allVideos[id].uid === user.uid);
     let allTimestamps = [];
     
     const promises = myVideoIds.map(id => get(ref(db, `analytics/${id}/views`)));
     const results = await Promise.all(promises);
     
     results.forEach(snap => {
         const viewData = snap.val();
         if(viewData) {
             Object.values(viewData).forEach(x => allTimestamps.push(x.t));
         }
     });
     
     renderRealtimeChart(allTimestamps);
     renderPerformanceChart(allTimestamps);
}

function renderRealtimeChart(timestamps) {
    const ctx = document.getElementById('realtimeChart').getContext('2d');
    if(charts['realtime']) charts['realtime'].destroy();

    const labels = [];
    const data = new Array(24).fill(0);
    const now = new Date();

    for (let i = 23; i >= 0; i--) {
        const d = new Date(now.getTime() - i * 3600000);
        const h = d.getHours();
        const ampm = h >= 12 ? 'PM' : 'AM';
        labels.push((h % 12 || 12) + ' ' + ampm);
    }

    timestamps.forEach(t => {
        const diffMs = now.getTime() - t;
        if(diffMs < 0 || diffMs > 86400000) return; 
        const bucketIndex = 23 - Math.floor(diffMs / 3600000);
        if(bucketIndex >= 0 && bucketIndex < 24) data[bucketIndex]++;
    });

    charts['realtime'] = new Chart(ctx, {
        type: 'bar',
        data: { labels: labels, datasets: [{ label: 'Views', data: data, backgroundColor: '#00c851', borderRadius: 4, barPercentage: 0.6 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid:{display:false} }, y: { display:false, grid:{display:false} } } }
    });
}

function renderPerformanceChart(timestamps) {
    const ctx = document.getElementById('perfChart').getContext('2d');
    if(charts['perf']) charts['perf'].destroy();
    const dayCounts = {};
    timestamps.forEach(t => {
        const day = new Date(t).toLocaleDateString();
        dayCounts[day] = (dayCounts[day] || 0) + 1;
    });
    const labels = Object.keys(dayCounts).sort((a,b) => new Date(a) - new Date(b));
    const data = [];
    let sum = 0;
    labels.forEach(l => { sum += dayCounts[l]; data.push(sum); });
    if(data.length === 0) { labels.push('Today'); data.push(0); }
    charts['perf'] = new Chart(ctx, {
        type: 'line',
        data: { labels: labels, datasets: [{ label: 'Total Views', data: data, borderColor: '#065fd4', backgroundColor: 'rgba(6, 95, 212, 0.1)', fill: true, tension: 0.4, pointRadius:3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales:{ x:{grid:{display:false}}, y:{grid:{color:'#f0f0f0'}} } }
    });
}

window.handleUploadClick = () => {
    if(!user) return window.openAuth();
    document.getElementById('modal-title').innerText = "Upload Video";
    
    // Reset fields
    document.getElementById('inp-id').value = "";
    document.getElementById('inp-title').value = "";
    document.getElementById('inp-thumb').value = "";
    document.getElementById('inp-url').value = "";
    document.getElementById('inp-dur').value = "";
    document.getElementById('inp-desc').value = "";
    document.getElementById('inp-cat').value = ""; // Reset category

    window.closeModals();
    document.getElementById('generic-modal').style.display = 'flex';
}

window.openEdit = (id) => {
    const v = allVideos[id];
    document.getElementById('modal-title').innerText = "Edit Video";
    document.getElementById('inp-id').value = id;
    document.getElementById('inp-title').value = v.title;
    document.getElementById('inp-thumb').value = v.thumbnail;
    document.getElementById('inp-url').value = v.videoUrl;
    document.getElementById('inp-dur').value = v.duration;
    document.getElementById('inp-desc').value = v.description;
    document.getElementById('inp-cat').value = v.category || ""; // Load existing category
    
    window.closeModals();
    document.getElementById('generic-modal').style.display = 'flex';
}

window.submitVideoForm = () => {
    const id = document.getElementById('inp-id').value;
    const data = {
        title: document.getElementById('inp-title').value,
        thumbnail: document.getElementById('inp-thumb').value,
        videoUrl: document.getElementById('inp-url').value,
        duration: document.getElementById('inp-dur').value,
        description: document.getElementById('inp-desc').value,
        category: document.getElementById('inp-cat').value || null, // Save category
        uploader: user.displayName || user.email.split('@')[0],
        uid: user.uid
    };
    if(!data.title || !data.videoUrl) return alert("Title and URL required");
    
    // Clean up data (remove null category if empty)
    if (!data.category) delete data.category;

    if(id) update(ref(db, `videos/${id}`), data);
    else { data.views = 0; data.timestamp = Date.now(); push(ref(db, 'videos'), data); }
    window.closeModals();
}

window.deleteVideo = (id) => { if(confirm("Delete video?")) remove(ref(db, `videos/${id}`)); }
window.openAuth = () => { window.closeModals(); document.getElementById('auth-modal').style.display = 'flex'; }
window.closeModals = () => { document.querySelectorAll('.modal-wrap').forEach(el => el.style.display = 'none'); }
window.toggleAuthMode = () => {
    isLogin = !isLogin;
    document.getElementById('auth-heading').innerText = isLogin ? "Sign In" : "Register";
    document.getElementById('auth-submit').innerText = isLogin ? "Sign In" : "Register";
    document.getElementById('auth-toggle').innerText = isLogin ? "Create Account" : "Sign In";
}
window.performAuth = async () => {
    const e = document.getElementById('auth-email').value, p = document.getElementById('auth-pass').value;
    try { 
        if(isLogin) {
            await signInWithEmailAndPassword(auth, e, p); 
        } else {
            await createUserWithEmailAndPassword(auth, e, p);
            // Initialize subscriber count for new channel/user using cleaned name
            const channelName = auth.currentUser.displayName || auth.currentUser.email.split('@')[0];
            const cleanedName = cleanChannelName(channelName);
            set(ref(db, `channel_stats/${cleanedName}/subscribers`), 0);
        }
        window.closeModals(); 
    } catch(err){ 
        alert(err.message); 
    }
}

window.handleLogout = () => { if(confirm("Logout?")) signOut(auth); }

window.toggleSidebar = () => {
    const sb = document.getElementById('sidebar'), mc = document.getElementById('main-content');
    if(window.innerWidth > 768) { 
        sb.classList.toggle('closed'); 
        mc.classList.toggle('full'); 
    } else { 
        sb.classList.toggle('mobile-open'); 
    }
}

window.toggleMobileSearch = () => {
    const nm = document.getElementById('nav-search-bar');
    if(window.innerWidth<=768) { 
        nm.classList.toggle('show-search'); 
        document.getElementById('back-search').style.display = nm.classList.contains('show-search') ? 'block' : 'none'; 
        
        const navRightButtons = document.querySelectorAll('.nav-right > button, .nav-right > div');
        navRightButtons.forEach(el => {
            if (!el.classList.contains('mobile-search-trigger')) {
                el.style.display = nm.classList.contains('show-search') ? 'none' : (el.id === 'auth-section' ? 'flex' : ''); 
            }
        });
        document.getElementById('auth-section').style.display = nm.classList.contains('show-search') ? 'none' : 'flex';
    }
}

window.toggleNotif = () => {
     const d = document.getElementById('notif-dropdown');
     d.style.display = d.style.display === 'flex' ? 'none' : 'flex';
     document.getElementById('notif-badge').style.display = 'none';
}

window.onclick = (e) => { 
    if(e.target.classList.contains('modal-wrap')) window.closeModals(); 
}
