// --- STATIC CONFIG ---
const STATIC_PROFILE_IMG_URL = "https://i.ibb.co/GftBsS3/IMG-20260104-WA0001.jpg";

// --- FIREBASE CONFIG ---
const firebaseConfig = {
    apiKey: "AIzaSyDNYv9SNUjMAHlaPzfovyYefoBNDgx4Gd4", 
    authDomain: "traffic-exchange-62a58.firebaseapp.com",
    projectId: "traffic-exchange-62a58",
    storageBucket: "traffic-exchange-62a58.appspot.com",
    messagingSenderId: "474999317287",
    appId: "1:474999317287:web:8e28a2f5f1a959d8ce3f02",
    measurementId: "G-HJQ46RQNZS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

// --- STATIC TESTIMONIALS ---
const STATIC_TESTIMONIALS = [
  { name: "Ali Raza 1", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 2", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 3", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 4", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 5", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 6", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 7", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 8", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 9", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 10", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 11", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 12", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 13", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 14", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 15", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 16", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 17", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 18", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 19", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 20", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 21", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 22", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 23", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 24", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 25", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 26", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 27", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 28", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 29", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 30", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 31", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 32", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 33", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 34", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 35", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 36", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 37", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 38", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 39", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 40", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 41", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 42", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 43", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 44", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 45", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 46", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 47", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 48", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 49", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 50", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 51", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 52", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 53", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 54", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 55", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 56", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 57", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 58", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 59", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 60", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 61", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 62", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 63", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 64", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 65", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 66", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 67", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 68", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 69", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 70", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 71", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 72", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 73", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 74", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 75", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 76", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 77", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 78", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 79", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 80", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 81", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 82", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 83", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 84", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 85", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 86", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 87", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 88", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 89", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 90", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 91", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 92", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 93", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 94", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 95", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 96", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 97", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 98", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 99", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 100", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 101", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 102", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 103", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 104", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 105", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 106", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 107", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 108", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 109", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 110", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 111", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 112", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 113", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 114", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 115", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 116", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 117", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 118", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 119", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 120", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 121", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 122", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 123", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 124", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 125", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 126", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 127", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 128", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 129", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 130", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 131", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 132", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 133", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 134", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 135", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 136", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 137", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 138", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 139", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 140", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 141", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 142", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 143", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 144", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 145", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 146", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 147", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 148", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 149", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 150", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 151", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 152", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 153", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 154", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 155", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 156", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 157", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 158", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 159", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 160", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 161", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 162", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 163", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 164", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 165", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 166", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 167", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 168", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 169", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 170", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 171", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 172", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 173", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 174", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 175", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 176", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 177", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 178", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 179", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 180", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 181", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 182", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 183", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 184", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 185", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 186", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 187", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 188", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 189", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 190", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 191", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 192", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 193", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 194", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 195", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 196", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 197", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 198", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 199", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 200", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 201", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 202", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 203", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 204", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 205", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 206", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 207", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 208", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 209", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 210", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 211", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 212", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 213", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 214", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 215", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 216", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 217", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 218", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 219", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 220", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 221", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 222", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 223", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 224", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 225", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 226", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 227", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 228", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 229", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 230", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 231", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 232", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 233", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 234", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 235", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 236", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 237", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 238", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 239", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 240", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 241", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 242", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 243", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 244", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 245", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 246", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 247", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 248", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 249", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 250", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 251", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 252", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 253", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 254", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 255", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 256", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 257", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 258", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 259", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 260", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 261", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 262", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 263", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 264", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 265", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 266", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 267", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 268", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 269", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 270", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 271", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 272", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 273", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 274", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 275", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 276", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 277", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 278", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 279", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 280", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 281", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 282", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 283", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 284", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 285", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 286", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 287", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 288", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 289", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 290", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 291", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 292", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 293", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 294", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 295", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 296", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 297", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 298", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 299", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 300", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 301", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 302", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 303", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 304", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 305", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 306", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 307", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 308", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 309", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 310", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 311", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 312", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 313", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 314", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 315", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 316", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 317", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 318", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 319", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 320", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 321", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 322", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 323", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 324", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 325", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 326", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 327", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 328", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 329", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 330", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 331", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 332", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 333", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 334", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 335", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 336", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 337", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 338", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 339", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 340", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 341", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 342", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 343", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 344", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 345", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 346", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 347", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 348", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 349", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 350", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 351", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 352", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 353", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 354", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 355", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 356", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 357", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 358", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 359", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 360", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 361", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 362", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 363", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 364", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 365", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 366", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 367", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 368", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 369", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 370", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 371", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 372", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 373", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 374", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 375", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 376", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 377", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 378", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 379", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 380", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 381", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 382", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 383", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 384", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 385", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 386", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 387", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 388", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 389", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 390", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 391", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 392", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 393", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 394", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 395", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 396", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 397", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 398", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 399", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 400", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 401", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 402", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 403", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 404", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 405", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 406", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 407", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 408", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 409", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 410", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 411", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 412", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 413", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 414", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 415", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 416", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 417", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 418", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 419", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 420", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 421", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 422", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 423", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 424", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 425", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 426", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 427", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 428", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 429", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 430", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 431", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 432", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 433", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 434", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 435", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 436", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 437", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 438", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 439", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 440", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 441", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 442", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 443", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 444", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 445", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 446", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 447", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 448", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 449", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 450", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 451", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 452", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 453", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 454", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 455", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 456", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 457", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 458", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 459", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 460", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 461", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 462", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 463", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 464", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 465", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 466", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 467", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 468", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 469", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 470", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 471", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 472", comment: "Local payment ki wajah se process bohat easy raha.", rating: 4, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 473", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 474", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 475", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 476", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 477", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 478", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 4, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 479", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 480", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 481", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 482", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 483", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 484", comment: "Instagram followers ki quality expected se better nikli.", rating: 4, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 485", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 486", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 487", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 488", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 489", comment: "First order tha lekin experience positive raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 490", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 4, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 491", comment: "Best experience overall. Order instant start hua aur result clear tha.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 492", comment: "Local payment ki wajah se process bohat easy raha.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 493", comment: "Customer support responsive tha aur issue jaldi solve ho gaya.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 494", comment: "Instagram followers ki quality expected se better nikli.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 495", comment: "TikTok growth fast thi, engagement noticeable rahi.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 496", comment: "YouTube views stable rahe, koi drop issue nahi aaya.", rating: 4, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 497", comment: "Service transparent hai, jo promise kiya wo deliver hua.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 498", comment: "Pricing reasonable hai aur value for money feel hui.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 499", comment: "First order tha lekin experience positive raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 500", comment: "Panel use karna simple hai, beginners ke liye perfect.", rating: 5, initialColor: '#db2777', isStatic: true },


  { name: "Ali Raza 501", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 502", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 503", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 504", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 505", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 506", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 507", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 508", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 509", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 510", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 511", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 512", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 513", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 514", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 515", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 516", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 517", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 518", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 519", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 520", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 521", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 522", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 523", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 524", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 525", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 526", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 527", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 528", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 529", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 530", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 531", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 532", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 533", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 534", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 535", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 536", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 537", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 538", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 539", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 540", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 541", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 542", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 543", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 544", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 545", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 546", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 547", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 548", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 549", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 550", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 551", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 552", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 553", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 554", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 555", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 556", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 557", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 558", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 559", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 560", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 561", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 562", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 563", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 564", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 565", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 566", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 567", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 568", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 569", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 570", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 571", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 572", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 573", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 574", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 575", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 576", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 577", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 578", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 579", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 580", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 581", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 582", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 583", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 584", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 585", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 586", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 587", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 588", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 589", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 590", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 591", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 592", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 593", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 594", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 595", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 596", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 597", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 598", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 599", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 600", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 601", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 602", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 603", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 604", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 605", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 606", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 607", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 608", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 609", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 610", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 611", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 612", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 613", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 614", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 615", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 616", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 617", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 618", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 619", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 620", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 621", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 622", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 623", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 624", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 625", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 626", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 627", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 628", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 629", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 630", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 631", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 632", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 633", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 634", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 635", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 636", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 637", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 638", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 639", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 640", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 641", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 642", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 643", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 644", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 645", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 646", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 647", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 648", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 649", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 650", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 651", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 652", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 653", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 654", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 655", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 656", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 657", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 658", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 659", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 660", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 661", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 662", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 663", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 664", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 665", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 666", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 667", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 668", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 669", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 670", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 671", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 672", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 673", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 674", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 675", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 676", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 677", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 678", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 679", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 680", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 681", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 682", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 683", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 684", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 685", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 686", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 687", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 688", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 689", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 690", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 691", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 692", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 693", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 694", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 695", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 696", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 697", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 698", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 699", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 700", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 701", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 702", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 703", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 704", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 705", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 706", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 707", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 708", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 709", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 710", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 711", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 712", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 713", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 714", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 715", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 716", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 717", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 718", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 719", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 720", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 721", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 722", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 723", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 724", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 725", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 726", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 727", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 728", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 729", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 730", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 731", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 732", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 733", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 734", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 735", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 736", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 737", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 738", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 739", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 740", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 741", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 742", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 743", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 744", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 745", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 746", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 747", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 748", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 749", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 750", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 751", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 752", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 753", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 754", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 755", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 756", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 757", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 758", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 759", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 760", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 761", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 762", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 763", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 764", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 765", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 766", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 767", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 768", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 769", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 770", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 771", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 772", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 773", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 774", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 775", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 776", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 777", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 778", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 779", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 780", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 781", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 782", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 783", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 784", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 785", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 786", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 787", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 788", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 789", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 790", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 791", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 792", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 793", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 794", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 795", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 796", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 797", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 798", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 799", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 800", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 801", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 802", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 803", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 804", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 805", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 806", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 807", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 808", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 809", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 810", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 811", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 812", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 813", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 814", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 815", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 816", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 817", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 818", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 819", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 820", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 821", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 822", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 823", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 824", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 825", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 826", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 827", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 828", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 829", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 830", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 831", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 832", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 833", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 834", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 835", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 836", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 837", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 838", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 839", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 840", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 841", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 842", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 843", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 844", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 845", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 846", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 847", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 848", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 849", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 850", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 851", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 852", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 853", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 854", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 855", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 856", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 857", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 858", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 859", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 860", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 861", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 862", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 863", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 864", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 865", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 866", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 867", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 868", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 869", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 870", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 871", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 872", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 873", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 874", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 875", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 876", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 877", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 878", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 879", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 880", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 881", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 882", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 883", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 884", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 885", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 886", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 887", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 888", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 889", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 890", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 891", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 892", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 893", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 894", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 895", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 896", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 897", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 898", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 899", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 900", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 901", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 902", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 903", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 904", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 905", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 906", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 907", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 908", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 909", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 910", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 911", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 912", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 913", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 914", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 915", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 916", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 917", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 918", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 919", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 920", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 921", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 922", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 923", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 924", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 925", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 926", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 927", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 928", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 929", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 930", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 931", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 932", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 933", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 934", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 935", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 936", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 937", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 938", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 939", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 940", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 941", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 942", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 943", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 944", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 945", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 946", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 947", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 948", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 949", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 950", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 951", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 952", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 953", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 954", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 955", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 956", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 957", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 958", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 959", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 960", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 961", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 962", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 963", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 964", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 965", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 966", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 967", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 968", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 969", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 970", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 971", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 972", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 973", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 974", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 975", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 976", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 977", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 978", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 979", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 980", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ali Raza 981", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 4, initialColor: '#4f46e5', isStatic: true },
  { name: "Fatima Khan 982", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Usman Ali 983", comment: "Support team cooperative thi aur clear guidance di.", rating: 5, initialColor: '#059669', isStatic: true },
  { name: "Hina Malik 984", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Aamir Zafar 985", comment: "Social media reach mein clear improvement dekha.", rating: 4, initialColor: '#10b981', isStatic: true },
  { name: "Laiba Riaz 986", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Shahid Pervaiz 987", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 5, initialColor: '#ef4444', isStatic: true },
  { name: "Sana Bilal 988", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Zubair Hassan 989", comment: "Repeat order kiya aur experience same acha raha.", rating: 4, initialColor: '#06b6d4', isStatic: true },
  { name: "Noor Javed 990", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },
  { name: "Ahmed Khan 991", comment: "Service consistent rahi aur delivery expected time mein ho gayi.", rating: 5, initialColor: '#4f46e5', isStatic: true },
  { name: "Ayesha Noor 992", comment: "Payment confirm hotay hi order process start ho gaya.", rating: 5, initialColor: '#ec4899', isStatic: true },
  { name: "Bilal Ahmed 993", comment: "Support team cooperative thi aur clear guidance di.", rating: 4, initialColor: '#059669', isStatic: true },
  { name: "Maryam Iqbal 994", comment: "Results gradual lekin stable rahe, spam feel nahi hua.", rating: 5, initialColor: '#f97316', isStatic: true },
  { name: "Hamza Tariq 995", comment: "Social media reach mein clear improvement dekha.", rating: 5, initialColor: '#10b981', isStatic: true },
  { name: "Sara Ali 996", comment: "Order tracking easy thi, status transparent tha.", rating: 5, initialColor: '#8b5cf6', isStatic: true },
  { name: "Danish Raza 997", comment: "Quality followers aaye, fake lag nahi rahe thay.", rating: 4, initialColor: '#ef4444', isStatic: true },
  { name: "Maham Shah 998", comment: "Pricing simple hai, koi hidden charges nahi.", rating: 5, initialColor: '#facc15', isStatic: true },
  { name: "Imran Latif 999", comment: "Repeat order kiya aur experience same acha raha.", rating: 5, initialColor: '#06b6d4', isStatic: true },
  { name: "Komal Anwar 1000", comment: "Overall reliable service lagi, recommend kar sakti hoon.", rating: 5, initialColor: '#db2777', isStatic: true },

];

// --- SERVICE DATA (Structure for services/urdu translation) ---
const SERVICE_DATA = {
    'TikTok': { urdu: 'ٹک ٹاک', services: { 'Followers': { urdu: 'فالورز' }, 'Likes': { urdu: 'پسندیدگیاں' }, 'Views': { urdu: 'ویوز' }, 'Comments': { urdu: 'کمنٹس' } } },
    'Instagram': { urdu: 'انسٹاگرام', services: { 'Followers': { urdu: 'فالورز' }, 'Likes': { urdu: 'پسندیدگیاں' }, 'Views': { urdu: 'ویوز' }, 'Comments': { urdu: 'کمنٹس' } } },
    'YouTube': { urdu: 'یوٹیوب', services: { 'Subscribers': { urdu: 'سبسکرائبرز' }, 'Likes': { urdu: 'پسندیدگیاں' }, 'Views': { urdu: 'ویوز' }, 'Comments': { urdu: 'کمنٹس' } } },
    'Facebook': { urdu: 'فیس بک', services: { 'Followers': { urdu: 'فالورز' }, 'Likes': { urdu: 'لائکس' }, 'Views': { urdu: 'ویوز' }, 'Reactions': { urdu: 'ری ایکشنز' } } }
};

// --- LIVE PRICING DATA & DEFAULTS ---
let SERVICE_DATA_PRICES = {}; 
const DEFAULT_PRICING_FALLBACK = {
    'TikTok': { Followers: 0.20, Likes: 0.12, Views: 0.05, Comments: 0.35 },
    'Instagram': { Followers: 0.25, Likes: 0.13, Views: 0.07, Comments: 0.40 },
    'YouTube': { Subscribers: 0.30, Likes: 0.17, Views: 0.08, Comments: 0.45 },
    'Facebook': { Followers: 0.22, Likes: 0.15, Views: 0.09, Reactions: 0.18 }
};

// --- PAYMENT DETAILS ---
const PAYMENT_ACCOUNTS = {
    'JazzCash': { name: "Nazim Mustafa", number: "03105784772" },
    'EasyPaisa': { name: "Nazim Mustafa", number: "03105784772" },
    'BankTransfer': { name: "Nazim Mustafa (myABL)", number: "14720010142555460012" },
    'Binance': { name: "Contact Admin", number: "N/A" }
};


// ------------------- UI & Language Functions -------------------

let currentLanguage = 'en';

function applyCurrentLanguage() {
    if (currentLanguage === 'en') {
        document.querySelectorAll('.lang-en').forEach(e => e.classList.remove('hidden'));
        document.querySelectorAll('.lang-ur').forEach(e => e.classList.add('hidden'));
    } else {
        document.querySelectorAll('.lang-en').forEach(e => e.classList.add('hidden'));
        document.querySelectorAll('.lang-ur').forEach(e => e.classList.remove('hidden'));
    }
}

document.getElementById('lang-en').addEventListener('click', function() {
    currentLanguage = 'en';
    applyCurrentLanguage();
});

document.getElementById('lang-ur').addEventListener('click', function() {
    currentLanguage = 'ur';
    applyCurrentLanguage();
});

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
    applyCurrentLanguage();
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function scrollToDashboard() {
    document.getElementById('user-dashboard').scrollIntoView({ behavior: 'smooth' });
}

function formatDate(timestamp) {
    if (timestamp && timestamp.toDate) {
        try {
            return timestamp.toDate().toLocaleString();
        } catch (e) {
            return 'Invalid Date';
        }
    }
    return 'N/A';
}


function showDashboardTab(tabName) {
    // Close mobile menu if open
    const menu = document.getElementById('mobile-menu-dropdown');
    if(menu.classList.contains('open')) {
        toggleMobileMenu();
    }

    const contents = {
        orders: document.getElementById('dashboard-content-orders'),
        deposits: document.getElementById('dashboard-content-deposits'),
        reviews: document.getElementById('dashboard-content-reviews')
    };
    
    const tabs = ['orders', 'deposits', 'reviews'];
    
    tabs.forEach(name => contents[name].classList.add('hidden'));

    document.querySelectorAll('[id^="tab-"]').forEach(tab => {
        tab.classList.remove('border-blue-600', 'text-blue-600');
        tab.classList.add('text-gray-600', 'hover:text-blue-600', 'border-transparent');
    });

    contents[tabName].classList.remove('hidden');
    document.querySelectorAll(`#tab-${tabName}, #tab-${tabName}-ur`).forEach(tab => {
        tab.classList.add('border-blue-600', 'text-blue-600');
        tab.classList.remove('text-gray-600', 'hover:text-blue-600', 'border-transparent');
    });

    if (auth.currentUser) {
        if (tabName === 'orders') loadUserOrders(auth.currentUser.uid);
        if (tabName === 'deposits') loadUserDeposits(auth.currentUser.uid);
    }
    
    if (tabName === 'reviews') {
         loadTestimonialsTab();
    }
    
    applyCurrentLanguage(); 
}

// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu-dropdown');
    menu.classList.toggle('open');
}

// FAQ toggle
document.querySelectorAll('#faq-list .faq').forEach(faq => {
    faq.addEventListener('click', function() {
        faq.classList.toggle('active');
    });
});

// ------------------- INITIALS AVATAR LOGIC -------------------

function getInitial(name) {
    return (name && name.length > 0) ? name.charAt(0).toUpperCase() : 'U';
}

function generateColor(seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
}

function createInitialAvatarHTML(name, seed = name, initialColor = null) {
    const initial = getInitial(name);
    const color = initialColor || generateColor(seed); 
    return `<div class="initial-avatar mr-3" style="background-color: ${color};">${initial}</div>`;
}

// --- Status Class Helper for User Panel ---
function getUserStatusClass(status) {
    switch (status) {
        case 'Pending':
        case 'Pending Review':
            return 'bg-yellow-100 text-yellow-800';
        case 'Approved':
        case 'Processing':
            return 'bg-blue-100 text-blue-800';
        case 'Complete':
            return 'bg-green-100 text-green-800';
        case 'Canceled':
        case 'Rejected':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}


// ------------------- LIVE PRICE LOGIC -------------------

async function loadServicePrices() {
    // Use a live listener (onSnapshot) to keep prices updated in real-time
    db.collection('prices').doc('servicePricing').onSnapshot(doc => {
        if (doc.exists) {
            SERVICE_DATA_PRICES = doc.data();
        } else {
            SERVICE_DATA_PRICES = DEFAULT_PRICING_FALLBACK;
            console.warn("Using default prices as Firestore prices document was not found.");
        }
        updatePricingDisplays();
    }, error => {
        console.error("Error fetching service prices, using defaults:", error);
        SERVICE_DATA_PRICES = DEFAULT_PRICING_FALLBACK;
        updatePricingDisplays();
    });
}

function getPriceForService(platform, service) {
    if (SERVICE_DATA_PRICES[platform] && SERVICE_DATA_PRICES[platform][service]) {
        return parseFloat(SERVICE_DATA_PRICES[platform][service]);
    }
    if (DEFAULT_PRICING_FALLBACK[platform] && DEFAULT_PRICING_FALLBACK[platform][service]) {
        return parseFloat(DEFAULT_PRICING_FALLBACK[platform][service]);
    }
    return 0.00;
}

function updatePricingDisplays() {
    const pricesToUpdate = {
        'price-TikTok-Followers': getPriceForService('TikTok', 'Followers'),
        'price-Instagram-Likes': getPriceForService('Instagram', 'Likes'),
        'price-YouTube-Views': getPriceForService('YouTube', 'Views'),
        'price-Facebook-Followers': getPriceForService('Facebook', 'Followers'),
    };

    for (const id in pricesToUpdate) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = `$${pricesToUpdate[id].toFixed(2)}`;
        }
    }
}

// --- Deposit Details Display ---
function displayPaymentDetails() {
    const method = document.getElementById('deposit-method').value;
    const detailsEl = document.getElementById('payment-details');
    
    if (method && PAYMENT_ACCOUNTS[method]) {
        const data = PAYMENT_ACCOUNTS[method];
        
        // Handle localization for account name/number display
        const nameLabel = currentLanguage === 'ur' ? 'اکاؤنٹ کا نام:' : 'Account Name:';
        const numberLabel = currentLanguage === 'ur' ? 'اکاؤنٹ نمبر/فون:' : 'Account Number/Phone:';
        
        document.getElementById('payment-name').innerHTML = 
            `<span class="font-medium">${nameLabel}</span> <span class="font-semibold">${data.name}</span>`;
        document.getElementById('payment-number').innerHTML = 
            `<span class="font-medium">${numberLabel}</span> <span class="font-semibold">${data.number}</span>`;

        detailsEl.classList.remove('hidden');
        applyCurrentLanguage();
    } else {
        detailsEl.classList.add('hidden');
    }
}

// ------------------- FIREBASE DATA FETCHING (User Dashboard) -------------------

async function loadUserProfile(userId) {
    try {
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists) {
            const userData = doc.data();
            const balance = userData.balance ? parseFloat(userData.balance).toFixed(2) : '0.00';
            document.getElementById('user-balance').textContent = `$${balance}`;
            return userData;
        } else {
             await db.collection('users').doc(userId).set({ balance: '0.00' }, { merge: true });
             document.getElementById('user-balance').textContent = `$0.00`;
             return { balance: '0.00', name: auth.currentUser ? auth.currentUser.email.split('@')[0] : 'Guest' };
        }
    } catch (e) {
        console.error("Error loading user profile:", e);
    }
    document.getElementById('user-balance').textContent = '$0.00';
    return { balance: '0.00', name: auth.currentUser ? auth.currentUser.email.split('@')[0] : 'Guest' };
}


function loadUserOrders(userId) {
    const orderListEl = document.getElementById('order-list');
    orderListEl.innerHTML = `<p class="p-4 text-center text-blue-600">Loading your orders...</p>`;

    db.collection('orders')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get()
      .then((querySnapshot) => {
        orderListEl.innerHTML = ''; 

        if (querySnapshot.empty) {
            orderListEl.innerHTML = `<p class="p-4 bg-white rounded shadow text-center lang lang-en">You have not placed any orders yet.</p><p class="p-4 bg-white rounded shadow text-center lang lang-ur urdu hidden urdu">آپ نے ابھی تک کوئی آرڈر نہیں کیا۔</p>`;
            applyCurrentLanguage(); 
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data(); 

            const status = data.status || 'Pending';
            const quantity = data.quantity || 'N/A';
            const service = data.service || 'N/A';
            const totalCost = parseFloat(data.totalCost || 0).toFixed(2);
            const link = data.link || '#';
            const senderReference = data.senderReference || 'N/A';

            const statusColor = getUserStatusClass(status);

            let statusTextUrdu = '';
            if (status === 'Pending') statusTextUrdu = 'زیر التواء';
            else if (status === 'Approved' || status === 'Processing') statusTextUrdu = 'منظور شدہ';
            else if (status === 'Complete') statusTextUrdu = 'مکمل';
            else if (status === 'Canceled') statusTextUrdu = 'منسوخ';


            const date = formatDate(data.createdAt);
            const isCanceled = data.status === 'Canceled';

            const orderHtml = `
                <div class="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-blue-500">
                    <div class="space-y-1 text-sm flex-grow">
                        <p class="font-bold text-base text-blue-900 lang lang-en">${service} (Qty: ${quantity})</p>
                        <p class="font-bold text-base text-blue-900 lang lang-ur urdu hidden urdu">${service} (مقدار: ${quantity})</p>
                        <p class="text-xs text-gray-600 lang lang-en">Cost: $${totalCost} | Ordered on: ${date}</p>
                        <p class="text-xs text-gray-600 lang lang-ur urdu hidden urdu">لاگت: $${totalCost} | تاریخ: ${date}</p>
                        <p class="text-xs text-gray-400 lang lang-en">Link: <span class="order-card-link">${link}</span> (Ref: ${senderReference})</p>
                        ${isCanceled && data.cancelMessage ? `<p class="text-red-500 text-xs mt-1 lang lang-en">Reason: ${data.cancelMessage}</p>` : ''}
                        ${isCanceled && data.cancelMessage ? `<p class="text-red-500 text-xs mt-1 lang lang-ur urdu hidden urdu">وجہ: ${data.cancelMessage}</p>` : ''}
                    </div>
                    <span class="mt-3 sm:mt-0 status-badge ${statusColor}">
                        <span class="lang lang-en">${status}</span>
                        <span class="lang lang-ur urdu hidden urdu">${statusTextUrdu}</span>
                    </span>
                </div>
            `;
            orderListEl.insertAdjacentHTML('beforeend', orderHtml);
        });

        applyCurrentLanguage();

      })
      .catch((error) => {
        console.error("CRITICAL ERROR loading orders:", error);
        orderListEl.innerHTML = `<p class="text-red-500 p-4 text-center">CRITICAL ERROR loading orders.</p>`;
      });
}

function loadUserDeposits(userId) {
    const depositListEl = document.getElementById('deposit-list');
    depositListEl.innerHTML = `<p class="p-4 text-center text-blue-600">Loading your deposits...</p>`;

    db.collection('deposits')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get()
      .then((querySnapshot) => {
        depositListEl.innerHTML = ''; 

        if (querySnapshot.empty) {
            depositListEl.innerHTML = `<p class="p-4 bg-white rounded shadow text-center lang lang-en">No deposit requests found.</p><p class="p-4 bg-white rounded shadow text-center lang lang-ur urdu hidden urdu">کوئی ڈپازٹ درخواست نہیں ملی۔</p>`;
            applyCurrentLanguage(); 
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const status = data.status || 'Pending Review';
            const amount = parseFloat(data.amount || 0).toFixed(2);
            const method = data.method || 'N/A';
            const txId = data.txId || 'N/A';

            const statusColor = getUserStatusClass(status);

            let statusTextUrdu = '';
            if (status === 'Pending Review') statusTextUrdu = 'زیر جائزہ';
            else if (status === 'Approved') statusTextUrdu = 'منظور شدہ';
            else if (status === 'Rejected') statusTextUrdu = 'مسترد';

            const date = formatDate(data.createdAt);
            const isRejected = data.status === 'Rejected';

            const depositHtml = `
                <div class="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-yellow-500">
                    <div class="space-y-1 text-sm flex-grow">
                        <p class="font-bold text-base text-blue-900 lang lang-en">Amount: $${amount}</p>
                        <p class="font-bold text-base text-blue-900 lang lang-ur urdu hidden urdu">رقم: $${amount}</p>
                        <p class="text-xs text-gray-600 lang lang-en">Method: ${method} | Date: ${date}</p>
                        <p class="text-xs text-gray-600 lang lang-ur urdu hidden urdu">طریقہ: ${method} | تاریخ: ${date}</p>
                        <p class="text-xs text-gray-400 lang lang-en">TX ID/Ref: <span class="order-card-link">${txId}</span></p>
                        ${isRejected && data.cancelMessage ? `<p class="text-red-500 text-xs mt-1 lang lang-en">Reason: ${data.cancelMessage}</p>` : ''}
                        ${isRejected && data.cancelMessage ? `<p class="text-red-500 text-xs mt-1 lang lang-ur urdu hidden urdu">وجہ: ${data.cancelMessage}</p>` : ''}
                    </div>
                    <span class="mt-3 sm:mt-0 status-badge ${statusColor}">
                        <span class="lang lang-en">${status}</span>
                        <span class="lang lang-ur urdu hidden urdu">${statusTextUrdu}</span>
                    </span>
                </div>
            `;
            depositListEl.insertAdjacentHTML('beforeend', depositHtml);
        });

        applyCurrentLanguage();

      })
      .catch((error) => {
        console.error("CRITICAL ERROR loading deposits:", error);
        depositListEl.innerHTML = `<p class="text-red-500 p-4 text-center">CRITICAL ERROR loading deposits.</p>`;
      });
}

// ------------------- DEPOSIT SUBMISSION LOGIC -------------------

document.getElementById('deposit-btn-submit').addEventListener('click', handleDepositSubmission);
document.getElementById('deposit-btn-submit-ur').addEventListener('click', handleDepositSubmission);

async function handleDepositSubmission() {
    const user = auth.currentUser;
    if (!user) return alert("Please log in to submit a deposit request.");

    const amount = parseFloat(document.getElementById('deposit-amount').value);
    const method = document.getElementById('deposit-method').value;
    const txId = document.getElementById('deposit-tx-id').value;
    const errorEl = document.getElementById('deposit-error');
    errorEl.classList.add('hidden');

    if (isNaN(amount) || amount < 1) {
        errorEl.textContent = "Minimum deposit amount is $1.";
        errorEl.classList.remove('hidden');
        return;
    }

    if (!method || !txId) {
        errorEl.textContent = "Please select a payment method and provide a Transaction ID/Reference.";
        errorEl.classList.remove('hidden');
        return;
    }

    try {
        const userData = await loadUserProfile(user.uid);

        await db.collection('deposits').add({
            userId: user.uid,
            userName: userData.name || user.email,
            amount: amount.toFixed(2),
            method: method,
            txId: txId,
            status: 'Pending Review', 
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("Deposit request submitted! Please allow 1-2 hours for manual verification and balance update.");
        closeModal('deposit-modal');
        loadUserDeposits(user.uid); 
        
        // Clear fields
        document.getElementById('deposit-amount').value = '';
        document.getElementById('deposit-method').value = '';
        document.getElementById('deposit-tx-id').value = '';

    } catch (error) {
        console.error("Error during deposit submission:", error);
        errorEl.textContent = "Submission failed due to a server error. Please try again.";
        errorEl.classList.remove('hidden');
    }
}


// ------------------- TESTIMONIALS LOGIC -------------------

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        const starClass = i <= rating ? 'fas fa-star text-yellow-400' : 'far fa-star text-gray-300';
        stars += `<i class="${starClass}"></i>`;
    }
    return stars;
}

function createTestimonialCard(t) {
    const name = t.name || t.userName || 'Anonymous User';
    const comment = t.comment || 'No comment provided.';
    const rating = t.rating || 5;
    
    const seed = t.userId || name; 
    const initialColor = t.initialColor || generateColor(seed);

    const initialAvatarHtml = createInitialAvatarHTML(name, seed, initialColor);

    return `
        <div class="bg-blue-50 hover:shadow-xl rounded-lg p-6 shadow">
            <div class="flex items-center mb-3">
                ${initialAvatarHtml}
                <span class="font-semibold lang lang-en">${name}</span>
                <span class="font-semibold lang lang-ur urdu hidden">${name}</span>
                <span class="ml-2">${renderStars(rating)}</span>
            </div>
            <p class="lang lang-en text-sm">${comment}</p>
            <p class="lang lang-ur urdu hidden urdu text-sm">${comment}</p>
        </div>
    `;
}

function loadMainTestimonials() {
    const listEl = document.getElementById('testimonials-list-main');
    if (!listEl) return;
    
    listEl.innerHTML = STATIC_TESTIMONIALS.slice(0, 4).map(t => createTestimonialCard(t)).join(''); 
    
    db.collection('testimonials').orderBy('createdAt', 'desc').limit(4).get()
        .then(snapshot => {
            const reviewPromises = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                const promise = db.collection('users').doc(data.userId).get().then(userDoc => {
                    data.initialColor = userDoc.data() ? userDoc.data().initialColor : null;
                    return data;
                }).catch(() => data);
                reviewPromises.push(promise);
            });
            
            Promise.all(reviewPromises).then(dynamicReviews => {
                let combinedHtml = dynamicReviews.map(t => createTestimonialCard(t)).join('');
                
                const staticRemaining = STATIC_TESTIMONIALS.slice(dynamicReviews.length > 0 ? 4 : 0, 10 - dynamicReviews.length);
                combinedHtml += staticRemaining.map(t => createTestimonialCard(t)).join('');
                
                listEl.innerHTML = combinedHtml;
                applyCurrentLanguage();
            });
        })
        .catch(error => {
            console.error("Error loading main dynamic testimonials:", error);
            listEl.innerHTML = STATIC_TESTIMONIALS.slice(0, 4).map(t => createTestimonialCard(t)).join('');
            applyCurrentLanguage();
        });
}

function loadTestimonialsTab() {
    const listEl = document.getElementById('testimonials-list');
    const formContent = document.getElementById('review-form-tab-content');
    
    if (auth.currentUser) {
        formContent.classList.remove('hidden');
    } else {
        formContent.classList.add('hidden');
    }

    listEl.innerHTML = `<p class="text-center w-full md:col-span-2 text-gray-500">Loading reviews...</p>`;

    let allReviews = [...STATIC_TESTIMONIALS];
    
    db.collection('testimonials').orderBy('createdAt', 'desc').limit(50).get()
        .then(snapshot => {
            const reviewPromises = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                const promise = db.collection('users').doc(data.userId).get().then(userDoc => {
                    data.initialColor = userDoc.data() ? userDoc.data().initialColor : null;
                    return data;
                }).catch(() => data);
                reviewPromises.push(promise);
            });
            
            Promise.all(reviewPromises).then(dynamicReviews => {
                dynamicReviews.forEach(review => allReviews.unshift(review));
                listEl.innerHTML = allReviews.map(t => createTestimonialCard(t)).join('');
                applyCurrentLanguage();
            });
        })
        .catch(error => {
            console.error("Error loading dashboard dynamic testimonials:", error);
            listEl.innerHTML = STATIC_TESTIMONIALS.map(t => createTestimonialCard(t)).join(''); 
            applyCurrentLanguage();
        });
}

// Star Rating Interactivity (For the form)
document.querySelectorAll('#review-stars i').forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(this.dataset.value);
        document.getElementById('review-stars').dataset.rating = rating;
        document.getElementById('rating-value-display').textContent = `${rating} / 5`;
        
        document.querySelectorAll('#review-stars i').forEach(s => {
            const sValue = parseInt(s.dataset.value);
            s.classList.remove('fas', 'far');
            s.classList.add(sValue <= rating ? 'fas' : 'far');
        });
    });
});

// Submit Review Logic
document.getElementById('submit-review-btn').addEventListener('click', handleSubmitReview);
document.getElementById('submit-review-btn-ur').addEventListener('click', handleSubmitReview);

async function handleSubmitReview() {
    const user = auth.currentUser;
    if (!user) return alert("Please log in to submit a review.");
    
    const name = document.getElementById('review-name').value;
    const comment = document.getElementById('review-comment').value;
    const rating = parseInt(document.getElementById('review-stars').dataset.rating);
    
    if (!name || !comment || rating === 0) return alert("Please fill out your name, comment, and select a rating.");

    try {
        await db.collection('testimonials').add({
            userId: user.uid,
            userName: name,
            comment: comment,
            rating: rating,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        alert("Review submitted successfully! Thank you.");
        loadTestimonialsTab(); 
        loadMainTestimonials(); 
        
        // Reset form
        document.getElementById('review-comment').value = '';
        document.getElementById('review-stars').dataset.rating = 0;
        document.getElementById('rating-value-display').textContent = '0 / 5';
        document.querySelectorAll('#review-stars i').forEach(s => {
            s.classList.remove('fas');
            s.classList.add('far');
        });

    } catch (error) {
        console.error("Error submitting review:", error);
        alert("Failed to submit review. Check console.");
    }
}


// ------------------- SERVICE SELECTION & ORDERING LOGIC -------------------

function openServiceSelectModal(platformEn, platformUr) {
    const user = auth.currentUser;
    if (!user) {
        alert("Please log in or sign up to place an order.");
        openModal('login-modal');
        return;
    }
    
    if (Object.keys(SERVICE_DATA_PRICES).length === 0) {
        alert("Pricing data is still loading. Please wait a moment.");
        return;
    }

    document.getElementById('selected-platform-display-en').textContent = platformEn;
    document.getElementById('selected-platform-display-ur').textContent = platformUr;

    const container = document.getElementById('service-options-container');
    container.innerHTML = ''; 
    
    const services = SERVICE_DATA[platformEn].services;
    
    for (const serviceNameEn in services) {
        const price = getPriceForService(platformEn, serviceNameEn);
        const data = services[serviceNameEn];
        
        const buttonHtml = `
            <button onclick="openOrderModal('${platformEn}', '${platformUr}', '${serviceNameEn}', '${data.urdu}', ${price})" 
                    class="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 font-semibold text-left transition duration-150">
                <span class="lang lang-en">${serviceNameEn} <span class="text-yellow-300">($${price.toFixed(2)}/1k)</span></span>
                <span class="lang lang-ur urdu hidden urdu">${data.urdu} <span class="text-yellow-300">($${price.toFixed(2)}/1k)</span></span>
            </button>
        `;
        container.insertAdjacentHTML('beforeend', buttonHtml);
    }
    
    applyCurrentLanguage();

    openModal('service-select-modal');
}

function openOrderModal(platformEn, platformUr, serviceEn, serviceUr, price) {
    
    closeModal('service-select-modal'); 

    document.getElementById('order-service-name').value = `${platformEn} ${serviceEn}`;
    document.getElementById('order-service-price').value = price;
    
    document.getElementById('order-platform-display').textContent = platformEn;
    document.getElementById('order-platform-display-ur').textContent = platformUr;
    document.getElementById('order-service-display').textContent = serviceEn;
    document.getElementById('order-service-display-ur').textContent = serviceUr;

    document.getElementById('order-link').value = '';
    document.getElementById('order-sender-ref').value = ''; 
    document.getElementById('order-quantity').value = 1; 
    
    const initialCost = (1 * price).toFixed(2);
    document.getElementById('order-total-cost').textContent = `$${initialCost}`;
    document.getElementById('order-total-cost-ur').textContent = `$${initialCost}`;
    document.getElementById('order-error').classList.add('hidden');

    applyCurrentLanguage();

    openModal('order-modal');
}

document.getElementById('order-quantity').addEventListener('input', updateOrderCost);

function updateOrderCost() {
    const quantityInput = document.getElementById('order-quantity');
    const pricePerK = parseFloat(document.getElementById('order-service-price').value);
    let quantity = parseInt(quantityInput.value);

    if (quantity < 1 || isNaN(quantity)) {
        quantity = 1;
        quantityInput.value = 1;
    }

    const cost = (quantity * pricePerK).toFixed(2);
    document.getElementById('order-total-cost').textContent = `$${cost}`;
    document.getElementById('order-total-cost-ur').textContent = `$${cost}`;
}

document.getElementById('order-btn-submit').addEventListener('click', handleOrderSubmission);
document.getElementById('order-btn-submit-ur').addEventListener('click', handleOrderSubmission);

async function handleOrderSubmission() {
    const user = auth.currentUser;
    if (!user) return;
    
    const serviceName = document.getElementById('order-service-name').value;
    const pricePerK = parseFloat(document.getElementById('order-service-price').value);
    const link = document.getElementById('order-link').value;
    const senderRef = document.getElementById('order-sender-ref').value; 
    const quantityK = parseInt(document.getElementById('order-quantity').value); 
    
    const errorEl = document.getElementById('order-error');
    errorEl.classList.add('hidden');

    if (!link || quantityK < 1) {
        errorEl.textContent = "Please provide a valid link and quantity (min 1k).";
        errorEl.classList.remove('hidden');
        return;
    }
    
    const totalCost = quantityK * pricePerK;
    const finalQuantity = quantityK * 1000;

    const userData = await loadUserProfile(user.uid);
    const currentBalance = parseFloat(userData.balance || 0);

    if (currentBalance < totalCost) {
        errorEl.textContent = `Insufficient balance. Please deposit funds. Need $${totalCost.toFixed(2)}, available $${currentBalance.toFixed(2)}.`;
        errorEl.classList.remove('hidden');
        return;
    }

    try {
        const newBalance = currentBalance - totalCost;
        
        // Deduct balance
        await db.collection('users').doc(user.uid).update({
            balance: newBalance.toFixed(2)
        });

        // Create Order
        await db.collection('orders').add({
            userId: user.uid,
            userName: userData.name || user.email,
            service: serviceName,
            link: link,
            senderReference: senderRef, 
            quantity: finalQuantity,
            totalCost: totalCost.toFixed(2),
            status: 'Pending', 
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert(`Order placed successfully! New balance: $${newBalance.toFixed(2)}`);
        closeModal('order-modal');
        loadUserProfile(user.uid); 
        loadUserOrders(user.uid); 

    } catch (error) {
        console.error("Error during order transaction:", error);
        errorEl.textContent = "Order failed due to a server error. Please retry.";
        errorEl.classList.remove('hidden');
    }
}


// ------------------- AUTHENTICATION LOGIC -------------------

document.getElementById('signup-btn-submit').addEventListener('click', handleSignup);
document.getElementById('signup-btn-submit-ur').addEventListener('click', handleSignup); 

async function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const gender = document.getElementById('signup-gender').value; // Get Gender
    const errorEl = document.getElementById('signup-error');
    errorEl.classList.add('hidden');

    if (!email || !password || !name || !gender) {
        errorEl.textContent = "Please fill all fields, including Gender.";
        errorEl.classList.remove('hidden');
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        const colorSeed = user.uid + gender;
        const avatarColor = generateColor(colorSeed); 

        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            gender: gender, 
            balance: '0.00', 
            initialColor: avatarColor, 
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("Signup successful! Welcome.");
        closeModal('signup-modal');

    } catch (error) {
        errorEl.textContent = `Error: ${error.message}`;
        errorEl.classList.remove('hidden');
        console.error("Signup Error:", error);
    }
}

document.getElementById('login-btn-submit').addEventListener('click', handleLogin);
document.getElementById('login-btn-submit-ur').addEventListener('click', handleLogin);

async function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    errorEl.classList.add('hidden');

    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert("Login successful!");
        closeModal('login-modal');
    } catch (error) {
        errorEl.textContent = `Error: ${error.message}`;
        errorEl.classList.remove('hidden');
        console.error("Login Error:", error);
    }
}

function handleLogout() {
    auth.signOut().then(() => {
        alert("Logged out successfully.");
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
}

function updateMobileMenuVisibility(user) {
    const dashboardLinks = document.getElementById('mobile-menu-dashboard-links');
    if (user) {
        dashboardLinks.classList.remove('hidden');
    } else {
        dashboardLinks.classList.add('hidden');
    }
}

auth.onAuthStateChanged((user) => {
    const authButtons = document.getElementById('auth-buttons');
    const dashboardSection = document.getElementById('user-dashboard');
    
    authButtons.innerHTML = '';

    updateMobileMenuVisibility(user);

    if (user) {
        const dashboardButtonEn = `<button onclick="scrollToDashboard()" class="bg-white text-blue-600 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-100 lang lang-en hidden md:inline-block">Dashboard</button>`;
        const logoutButtonEn = `<button onclick="handleLogout()" class="bg-yellow-400 text-blue-900 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-yellow-300 lang lang-en">Logout</button>`;
        const dashboardButtonUr = `<button onclick="scrollToDashboard()" class="bg-white text-blue-600 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-100 lang lang-ur urdu hidden md:inline-block">ڈیش بورڈ</button>`;
        const logoutButtonUr = `<button onclick="handleLogout()" class="bg-yellow-400 text-blue-900 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-yellow-300 lang lang-ur urdu hidden">لاگ آؤٹ</button>`;
        
        authButtons.innerHTML = dashboardButtonEn + logoutButtonEn + dashboardButtonUr + logoutButtonUr;

        dashboardSection.classList.remove('hidden');
        
        loadUserProfile(user.uid).then(userData => {
            document.getElementById('review-name').value = userData.name || user.email.split('@')[0];
        }); 
        
        showDashboardTab('orders'); 
        
    } else {
        const loginButtonEn = `<button onclick="openModal('login-modal')" class="bg-white text-blue-600 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-100 lang lang-en">Login</button>`;
        const signupButtonEn = `<button onclick="openModal('signup-modal')" class="bg-yellow-400 text-blue-900 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-yellow-300 lang lang-en">Sign Up</button>`;
        const loginButtonUr = `<button onclick="openModal('login-modal')" class="bg-white text-blue-600 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-100 lang lang-ur urdu hidden">لاگ ان کریں</button>`;
        const signupButtonUr = `<button onclick="openModal('signup-modal')" class="bg-yellow-400 text-blue-900 font-bold px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-yellow-300 lang lang-ur urdu hidden">سائن اپ</button>`;

        authButtons.innerHTML = loginButtonEn + signupButtonEn + loginButtonUr + signupButtonUr;
        dashboardSection.classList.add('hidden');
    }

    applyCurrentLanguage();
});


// Chart initialization and initial price load
window.onload = function() {
    // 1. Load Prices first (real-time listener)
    loadServicePrices().then(() => {
        
        // 2. Initialize Chart
        let chart = document.getElementById('statsChart').getContext('2d');
        new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['TikTok', 'Instagram', 'YouTube', 'Facebook'],
                datasets: [{
                    label: 'Orders (in thousands)',
                    data: [17, 12, 7, 4],
                    backgroundColor: ['#F472B6','#FB7185','#F87171','#60A5FA'],
                }]
            },
            options: {
                plugins: { legend: {display: false} },
                scales: {y: {beginAtZero: true, ticks: {stepSize: 2}}}
            }
        });
        
        // 3. Final setup
        if (document.getElementById('lang-ur').classList.contains('active')) {
             currentLanguage = 'ur';
        }
        applyCurrentLanguage();
        
        loadMainTestimonials(); 
        
        auth.onAuthStateChanged(user => {
            updateMobileMenuVisibility(user);
            if (user) {
                showDashboardTab('orders'); 
            }
        });
    });
}
