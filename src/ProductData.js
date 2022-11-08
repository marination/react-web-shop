// Hard coded data for webshop
let images = require.context('./product-images/', false, /\.(png|jpeg|jpg|svg|webp)$/);
let paths = images.keys().map(images);

export const ProductData = {
    "001": {
        "name": "Black ColorFit Bluetooth Calling Smart Watch with Voice Assistance", 
        "brand": "NOISE", 
        "image": paths[0], 
        "price": 3299,
        "old_price": 4999,
        "ratings": 4.2,
        "reviews": "3.3k",
        "category": "Watches"
    },
    "002": {
        "name": "Black Ninja Call 2 Bluetooth Calling Smart Watch 25BSWAAY#1", 
        "brand": "Fire-Boltt", 
        "image": paths[1], 
        "price": 2999,
        "old_price": 7999,
        "ratings": 4.3,
        "reviews": "4.7k",
        "category": "Watches"
    },
    "003": {
        "name": "boAt Airdopes 441 Pro True Wireless Earbuds", 
        "brand": "boAt", 
        "image": paths[2], 
        "price": 1899,
        "old_price": 6990,
        "ratings": 3.9,
        "reviews": "19k",
        "category": "Earphones"
    },
    "004": {
        "name": "Black AirBass XPods True Wireless Bluetooth Earbuds", 
        "brand": "BOULT AUDIO", 
        "image": paths[3], 
        "price": 1299,
        "old_price": 4999,
        "ratings": 3.3,
        "reviews": "2.3k",
        "category": "Earphones",
        "new": true
    },
    "005": {
        "name": "Black Solid Pulse Ace Bluetooth Calling Fitness Smartwatch", 
        "brand": "HAMMER", 
        "image": paths[4], 
        "price": 1499,
        "old_price": 3999,
        "ratings": 3.8,
        "reviews": "26",
        "category": "Watches"
    },
    "006": {
        "name": "Blue Solid Wired In Ear Headphones", 
        "brand": "Kratos", 
        "image": paths[5], 
        "price": 599,
        "old_price": 599,
        "ratings": 3.8,
        "reviews": "26",
        "category": "Headphones"
    },
    "007": {
        "name": "Men Grey The Carlyle HR Gen 5 Smartwatch FTW4024", 
        "brand": "Fossil", 
        "image": paths[6], 
        "price": 14995,
        "old_price": 22995,
        "ratings": 4.1,
        "reviews": "359",
        "category": "Watches",
        "new": true
    },
    "008": {
        "name": "Ninja Unisex Touch to Wake SpO2 Smartwatch 07BSWAAY - Beige", 
        "brand": "Fire-Boltt", 
        "image": paths[7], 
        "price": 1499,
        "old_price": 4999,
        "ratings": 4.1,
        "reviews": "4k",
        "category": "Watches"
    },
    "009": {
        "name": "IdeaPad 3 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)", 
        "brand": "Lenovo", 
        "image": paths[8], 
        "price": 40990,
        "old_price": 59390,
        "ratings": 4.2,
        "reviews": "3k",
        "category": "Laptops"
    },
    "010": {
        "name": "K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys", 
        "brand": "Redragon", 
        "image": paths[9], 
        "price": 2649,
        "old_price": 3499,
        "ratings": 4.7,
        "reviews": "1.3k",
        "category": "Keyboards"
    },
    "011": {
        "name": "Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)", 
        "brand": "OnePlus", 
        "image": paths[10], 
        "price": 19999,
        "old_price": 19999,
        "ratings": 4.4,
        "reviews": "26.7k",
        "category": "Mobiles",
        "new": true
    },
    "012": {
        "name": "Black Solid Portable Bluetooth Speaker", 
        "brand": "JBL", 
        "image": paths[11], 
        "price": 24999,
        "old_price": 29999,
        "ratings": "--",
        "reviews": "--",
        "category": "Speakers"
    },
    "013": {
        "name": "Wings Phantom Black & Green Gaming True Wireless Earbuds With 65 ms Latency", 
        "brand": "WINGS", 
        "image": paths[12], 
        "price": 1499,
        "old_price": 4999,
        "ratings": "4.2",
        "reviews": "12k",
        "category": "Earphones",
        "new": true
    },
    "014": {
        "name": "Pink & Black Luxe Lunar Sleep Tracking Stress & Heart Rate Fitness Band", 
        "brand": "Fitbit", 
        "image": paths[13], 
        "price": 9799,
        "old_price": 10999,
        "ratings": "4.2",
        "reviews": "6",
        "category": "Watches"
    },
    "015": {
        "name": "Unisex Grey Ring Bluetooth Calling Smartwatch with SpO2 05BSWAAY3", 
        "brand": "Fire-Boltt", 
        "image": paths[14], 
        "price": 2999,
        "old_price": 9999,
        "ratings": "4",
        "reviews": "69",
        "category": "Watches"
    },
}

