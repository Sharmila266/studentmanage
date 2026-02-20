// Simple smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Future interactive features (edit button, download report, etc.)
document.addEventListener("DOMContentLoaded", function () {
    console.log("Student Details Page Loaded");
});
function saveAttendance() {
    const checkboxes = document.querySelectorAll('.attendance-check');
    let presentCount = 0;

    checkboxes.forEach((box) => {
        if (box.checked) {
            presentCount++;
        }
    });

    alert(`Attendance Saved!\nPresent Students: ${presentCount}`);
}
function showTab(tabId) {
    const tabs = ["upcoming", "past", "results"];

    tabs.forEach(id => {
        document.getElementById(id).classList.add("d-none");
    });

    document.getElementById(tabId).classList.remove("d-none");

    // Update active tab style
    document.querySelectorAll(".nav-link").forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}
// Example JS for active nav highlight
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
// Highlight active nav link automatically
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
// Active Navbar Highlight
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
// Active Navbar Highlight
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
// Contact Form Submit (Demo)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message sent successfully!");
            form.reset();
        });
    }
});
