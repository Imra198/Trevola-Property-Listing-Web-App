# Trevola-Property-Listing-Web-App
Trevola is a simple web-based property listing platform where users can register, log in, and view or create property listings. The system includes two user roles: Hosts and Users.

Hosts can create property listings
Users can browse available listings
All data is stored locally using localStorage

Features
  Authentication
    Host and User registration
    Login system for both roles
    Role-based access (host/user separation)
    Session stored using localStorage
    
  Listings System
    Create property listings (Hosts only)
    View all listings
    View single listing details
    
Each listing includes:
  Title
  Description
  Price per night
  Location (address, latitude, longitude)
  Amenities
  Images

Data Storage
Uses browser localStorage as a mock database:
users → stores registered users
listings → stores property listings
loggedInUser → stores session user

Technology used
HTML5
CSS3
JavaScript (ES6 Modules)
LocalStorage API

Project Structure
/project-root
│
├── index.html
├── host-register.html
├── user-register.html
├── listings.html
├── create_listing.html
├── single-listing.html
│
├── file.js (authentication logic)
├── listing.js (Listing class)
├── listingService.js (CRUD operations)
├── listing-logic.js (create listing logic)
├── all_listings.js (display all listings)
├── single-listing.js (view one listing)
│
└── style.css

How It Works
1. Registration

Users/hosts register and are stored in localStorage with:
{
  id: Date.now(),
  username,
  password,
  role
}

2. Login
User is validated from stored users
On success → saved as:
localStorage.setItem("loggedInUser", user);

3. Creating Listings (Host only)
Only logged-in host can create listings
Listing structure:
{
  id: Date.now(),
  host_id,
  title,
  description,
  location,
  pricePerNight,
  amenities,
  images
}

4. Viewing Listings
All listings displayed from localStorage
Clicking a listing opens full details page

Known Limitations
No backend/database (uses localStorage only)
Passwords are not encrypted
No real authentication security
Data is stored only in browser

Future Improvements
Add backend (Node.js + database)
Secure authentication (JWT / bcrypt)
Booking system
Image upload instead of URLs
Host dashboard (edit/delete listings)
Search and filters












      







