/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to open the popup
    function openPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    // Event listener for the "here" link
    document.getElementById('openPopup').addEventListener('click', openPopup);

    // Event listener for the close button in the popup
    document.querySelector('.popup-close').addEventListener('click', closePopup);

    // Event listener for clicking outside the popup to close it
    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('popup')) {
            closePopup();
        }
    });
});