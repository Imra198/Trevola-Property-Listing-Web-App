//create listing database
const STORAGE_KEY = 'listings';

// Get all listings

export function getAllListings() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

//Get listing by id
export function getListingById(id) {
    const listings = getAllListings();
    return listings.find(listing => listing.id === id);
}

//Post listing
export function createListing(listing) {
    const listings = getAllListings();
    listings.push(listing);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
    return listing;
}



