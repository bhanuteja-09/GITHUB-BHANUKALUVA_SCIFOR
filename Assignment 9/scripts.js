// Function to load data using AJAX

function loadDataWithAjax() {
    // Create a new XMLHttpRequest object
    const request = new XMLHttpRequest();
    
    // Configure it: GET-request for the URL /products/1
    request.open('GET', 'https://dummyjson.com/products/1', true);
    
    // This function will be called when the request is completed
    request.onload = function() {
        // Check if the request was successful
        if (this.status === 200) {
            // Parse the JSON response
            const data = JSON.parse(this.responseText);
            // Log the data to the console
            console.log('Data loaded with AJAX:', data);
            // Call displayData function to show data on the webpage
            displayData(data);
        } else {
            // Log an error if the request was not successful
            console.error('AJAX Error:', this.statusText);
        }
    };
    
    // This function will be called in case of a network error
    request.onerror = function() {
        // Log the error to the console
        console.error('AJAX Request failed');
    };
    
    // Send the request
    request.send();
}


// Function to load data using Fetch API

function loadDataWithFetch() {
    // Use fetch to make a GET request to the URL /products/1
    fetch('https://dummyjson.com/products/1')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                // Throw an error if the response is not successful
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(data => {
            // Log the data to the console
            console.log('Data loaded with Fetch:', data);
            // Call displayData function to show data on the webpage
            displayData(data);
        })
        .catch(error => {
            // Log any error that occurs during fetch or the previous then block
            console.error('Fetch Error:', error);
        });
}


// Function to display data in the data container

function displayData(data) {
    // Get the data container element by its ID
    const dataContainer = document.getElementById('dataContainer');
    
    // Set the inner HTML of the data container to display the data
    dataContainer.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <p>Price: $${data.price}</p>
    `;
}
