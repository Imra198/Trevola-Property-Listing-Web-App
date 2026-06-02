import { getAllListings } from "./listingService.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("listingsContainer");
    const listings = getAllListings();

    if (!container) return;

    if (listings.length === 0) {
        container.innerHTML = "<p>No listings available.</p>";
    } else {
        listings.forEach(listing => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${listing.title}</h3>
                <p>${listing.description}</p>
                <p>Price: £${listing.pricePerNight}</p>
                <p><strong>Location:</strong> ${listing.location?.address || "N/A"}</p>
                <a href="single-listing.html?id=${listing.id}">
                    View Listing
                </a>
            `;

            container.appendChild(card);
        });
    }

});