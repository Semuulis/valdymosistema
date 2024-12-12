function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        alert(`Sveiki, ${username}! Prisijungimas sėkmingas.`);
        window.location.href = "valdymas.html";
    } else {
        alert("Neteisingi prisijungimo duomenys. Bandykite vėl.");
    }
}

// Adjust room light intensity
function adjustLight(imageId, value) {
    const roomImage = document.getElementById(imageId);
    if (roomImage) {
        const brightnessValue = 50 + parseInt(value / 2); // 50% base brightness + slider value
        roomImage.style.filter = `brightness(${brightnessValue}%)`;
    }
}



// Digital clock
function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    const timeString = now.toLocaleTimeString("lt-LT", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (clock) clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

