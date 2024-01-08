const firebaseConfig = {
  apiKey: "AIzaSyCSgXwfQApXMdQUU6hG7ff0xgTNeTcKBZk",
    authDomain: "card-delivery.firebaseapp.com",
    databaseURL: "https://card-delivery-default-rtdb.firebaseio.com",
    projectId: "card-delivery",
    storageBucket: "card-delivery.appspot.com",
    messagingSenderId: "738527725245",
    appId: "1:738527725245:web:12e89fc912b9aadd2399d4",
    measurementId: "G-HGJV633S6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

