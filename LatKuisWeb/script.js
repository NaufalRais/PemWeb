function changeTheme() {
    const body = document.getElementById("homeBody");
    const themeButton = document.getElementById("themeButton");
    // Tambahkan / hapus class dark-mode
    body.classList.toggle("dark-mode");

    // Cek apakah sekarang dark mode
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
}

function logout() {
    const confirmation = confirm(
        "Are you sure you want to log out?"
    );

    if (confirmation) {
        window.location.href = "login.html";
    }
}