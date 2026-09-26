/* =========================================
   CHANGE THEME
========================================= */

function changeTheme() {

    // Ambil body
    const body = document.getElementById("homeBody");

    // Ambil tombol tema
    const themeButton = document.getElementById("themeButton");


    // Tambahkan / hapus class dark-mode
    body.classList.toggle("dark-mode");


    // Cek apakah sekarang dark mode
    if (body.classList.contains("dark-mode")) {

        // Ubah tulisan tombol
        themeButton.textContent = "Dark Mode";

    } else {

        // Kembalikan tulisan tombol
        themeButton.textContent = "Light Mode";

    }

}



/* =========================================
   LOGOUT
========================================= */

function logout() {

    // Konfirmasi logout
    const confirmation = confirm(
        "Are you sure you want to log out?"
    );


    // Jika user menekan OK
    if (confirmation) {

        // Kembali ke halaman login
        window.location.href = "login.html";

    }

}