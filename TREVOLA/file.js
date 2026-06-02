console.log("JS LOADED");
// Host login
const hostLoginForm = document.getElementById('hostform');
if (hostLoginForm) {
    hostLoginForm.addEventListener("submit", function(event) {   
        event.preventDefault();
        
      // get username and password values
        const username = document.getElementById('hostUsername').value;
        const password = document.getElementById('hostPassword').value;
        
        // get users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // check if host exists and password matches
        const host = users.find(
            h => h.username === username && 
            h.password === password && 
            h.role === 'host');

            if (!host) {
                alert("Invalid username or password!");
                return;
            }
            
            // Store logged in user in local storage
            localStorage.setItem('loggedInUser', JSON.stringify(host));
            
            window.location.href = "listings.html";
    });
}

//User Login
const userLoginForm = document.getElementById('userform');
if (userLoginForm) {
    userLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // get username and password values
        const username = document.getElementById('userUsername').value;
        const password = document.getElementById('userPassword').value;
        
        // get users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // check if user exists and password matches
        const user = users.find(
            u => u.username === username && 
            u.password === password && 
            u.role === 'user');
            
        if (!user) {
            alert("Invalid username or password!");
            return;
        }

        // Store logged in user in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert("User login successful!");
        window.location.href = "listings.html";       
    });
}

// Registration button for host
const hostRegisterBtn = document.getElementById('hostRegisterBtn');
if (hostRegisterBtn) {
    hostRegisterBtn.addEventListener("click", function() {
        // Redirect to host registration page
        window.location.href = "host-register.html";
    });
}
const backToLoginBtn = document.getElementById('backToLoginBtn');
if (backToLoginBtn) {
    backToLoginBtn.addEventListener("click", function() {
        // Redirect to login page
        window.location.href = "index.html";
    });
}

// Registration button for user
const registerBtn = document.getElementById('registerBtn');
if (registerBtn) {
    registerBtn.addEventListener("click", function() {  
        // Redirect to user registration page
        window.location.href = "user-register.html"; 
    });
}

// User back to login page
const backBtn = document.getElementById('backBtn');
if (backBtn) {
    backBtn.addEventListener("click", function() {
        // Redirect to login page
        window.location.href = "index.html";
    });
}


// Host registration form submission
const hostForm = document.getElementById('hostRegistrationForm');
if (hostForm) {
    hostForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // get password and confirm password values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // validate password and confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // get users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const newHost = {
            id: Date.now(),
            username,
            password,
            role: 'host'
        };

        // add new host to users array
        users.push(newHost);
        localStorage.setItem('users', JSON.stringify(users));

        // add a message for successful registration
        document.getElementById('message').textContent =
        "Host registered successfully! Please log in.";
    });
}
    

// Save Email for host registration
const hostEmailInput = document.getElementById('email');
if (hostEmailInput) {
    hostEmailInput.addEventListener("input", function() {
        localStorage.setItem('hostEmail', hostEmailInput.value);
    });
}


// User registration form 

const userForm = document.getElementById('userRegistrationForm');
if (userForm) {
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // get password and confirm password values
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // validate password and confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // get users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const newUser = {
            id: Date.now(),
            username: document.getElementById('username').value,
            password: password,
            role: 'user'
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // add a message for successful registration
        document.getElementById('message').textContent =
        "User registered successfully! Please log in.";
    });
}

// Save Email for user registration
const userEmailInput = document.getElementById('email');
if (userEmailInput) {
    userEmailInput.addEventListener("input", function() {
        localStorage.setItem('userEmail', userEmailInput.value);
    });
}




