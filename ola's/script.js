// Toggle menu visibility on small screens
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀';
}
// Get the current theme from localStorage or default to light
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

// Update the theme toggle button state if necessary
document.querySelector("#theme-toggle").addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});


function handleSubmit() {
    alert("Your message has been sent successfully!");
    return false;
}


