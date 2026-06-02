//import both the Listing class and the createListing function to handle listing creation logic
import Listing from "./listing.js";
import { createListing } from "./listingService.js";

// Check if user is logged in before allowing access to the listing creation page
const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

//Protect the listing creation page from unauthorized access
if (!currentUser) {
    alert("Please log in to access this page.");
    window.location.href = "index.html";

}
// If the user is logged in but does not have the 'host' role, they are redirected to the listings page with an alert message 
else if (currentUser.role !== 'host') {
    alert("Only hosts can create listings. Please log in with a host account.");
    window.location.href = "listings.html";

}

// If the user is logged in and has the 'host' role, the listing creation form is initialized and ready for use
else {
    document.addEventListener('DOMContentLoaded', init);
}

// Initialize the listing creation form
function init() {
    const form = document.getElementById('createListing');
// If form is not found, exit the function
    if (!form) return; 

    //add an event listener to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const title1 = document.getElementById('title');
        const description1 = document.getElementById('description');
        const address1 = document.getElementById('address');
        const price1 = document.getElementById('price');
        const lat1 = document.getElementById('latitude');
        const lng1 = document.getElementById('longitude');

        //Trim values trim to remove extra spaces, value is converted to a number using parseFloat, and validation is performed to ensure all fields are filled correctly and price is a positive number
        const title = title1.value.trim();
        const description = description1.value.trim();
        const address = address1.value.trim();
        const pricePerNight = parseFloat(price1.value.trim());

// Convert latitude and longitude to numbers, defaulting to 0 if invalid
        const latitude = parseFloat(lat1.value.trim()) || 0;
        const longitude = parseFloat(lng1.value.trim()) || 0;

        // Validate form inputs
        if (!title || !description || !address || isNaN(pricePerNight) || pricePerNight <= 0) {
            alert('Please fill in all fields correctly. Price per night must be a positive number.');
            return;
        }

        // Validate latitude and longitude values
        if (isNaN(latitude) || latitude < -90 || latitude > 90) {
            alert('Please enter a valid latitude value between -90 and 90.');
            return;
        }
        if (isNaN(longitude) || longitude < -180 || longitude > 180) {
            alert('Please enter a valid longitude value between -180 and 180.');
            return;
        }

// Process images & amenities input, splitting by commas and trimming whitespace, while filtering out any empty values
        const amenities = address1.value
        ? amenities1.value.split(',').map(a=>a.trim()).filter(a=>a)
        : [];

            const images = address1.value
        ? images1.value.split(',').map(i=>i.trim()).filter(i=>i)
        : [];

        // Create a new listing object
        const listing = new Listing(
            Date.now(), // unique ID
            currentUser.id, // ownership (host user ID)
            title,
            description,
            {
                address: address,
                latitude: latitude,
                longitude: longitude
            },
            pricePerNight,
            amenities,
            images
        );
        // save listing
        createListing(listing);

        alert(`Listing ${title} created successfully!`);

        // Optionally, reset the form after submission
        form.reset();

    });
}
