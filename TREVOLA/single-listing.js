import { getListingById } from "./listingService.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('listingContainer');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('id');
    if (!listingId) {
        container.innerHTML = '<p>No listing ID provided.</p>';
        return;
    }
    const id = Number(listingId);
    const listing = getListingById(id);

    if (!listing) {
        container.innerHTML = '<p>Listing not found.</p>';
        return;
    }

        container.innerHTML = `
            <h1>${listing.title}</h1>
            <p>${listing.description}</p>
            <p>Price: £${listing.pricePerNight} per night</p>
            <p>Location: ${listing.location?.address || "N/A"}</p>

            <div>
                ${listing.images.map(img => `<img src="${img}" alt="Listing Image" style="max-width: 200px; margin: 5px;">`).join('')}
            </div>
        `;
   
   

});