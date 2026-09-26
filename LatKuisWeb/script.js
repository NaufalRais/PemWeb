function changeTheme() {
    const body = document.getElementById("homeBody");
    const themeButton = document.getElementById("themeButton");

    if (!body || !themeButton) return;

    // Ganti tema tanpa mengubah fitur yang sudah ada
    body.classList.toggle("dark-mode");

    // Update teks tombol
    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }

    // Feedback tombol tema
    if (typeof anime !== "undefined") {
        anime({
            targets: themeButton,
            scale: [0.92, 1],
            rotate: [-2, 0],
            duration: 300,
            easing: "easeOutBack"
        });

        anime({
            targets: ".report-dot",
            scale: [0.8, 1],
            duration: 420,
            easing: "easeOutElastic(1, .6)"
        });
        animateHomeEntrance();
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

function animateHomeEntrance() {
    if (typeof anime === "undefined") return;
    if (!document.getElementById("homeBody")) return;

    const navbar = document.getElementById("mainNavbar");
    const heading = document.querySelector(".dashboard-heading");
    const tableCard = document.querySelector(".table-card");
    const rows = document.querySelectorAll("#salesTable tbody tr");
    const orbOne = document.querySelector(".accent-orb-one");
    const orbTwo = document.querySelector(".accent-orb-two");
    const reportDot = document.querySelector(".report-dot");

    // Hentikan animasi sebelumnya agar tidak bertumpuk
    anime.remove([
        navbar,
        heading,
        tableCard,
        rows,
        orbOne,
        orbTwo,
        reportDot
    ]);

    // Reset ke posisi awal animasi
    anime.set(navbar, {
        opacity: 0,
        translateY: -12
    });

    anime.set(heading, {
        opacity: 0,
        translateY: 22
    });

    anime.set(tableCard, {
        opacity: 0,
        translateY: 22,
        scale: 0.985
    });

    anime.set(rows, {
        opacity: 0,
        translateX: -10
    });

    anime.set(orbOne, {
        opacity: 0,
        scale: 0.6
    });

    anime.set(orbTwo, {
        opacity: 0,
        scale: 0.6
    });

    anime.set(reportDot, {
        opacity: 0,
        scale: 0.75
    });


    // Timeline utama
    const intro = anime.timeline({
        easing: "easeOutCubic"
    });

    intro
        .add({
            targets: navbar,
            opacity: [0, 1],
            translateY: [-12, 0],
            duration: 520
        })

        .add({
            targets: heading,
            opacity: [0, 1],
            translateY: [22, 0],
            duration: 620,
            offset: "-=300"
        })

        .add({
            targets: tableCard,
            opacity: [0, 1],
            translateY: [22, 0],
            scale: [0.985, 1],
            duration: 600,
            offset: "-=340"
        })

        .add({
            targets: orbOne,
            opacity: [0, 1],
            scale: [0.6, 1],
            duration: 500,
            offset: "-=420"
        })

        .add({
            targets: orbTwo,
            opacity: [0, 1],
            scale: [0.6, 1],
            duration: 500,
            offset: "-=400"
        });


    // Baris tabel muncul satu per satu
    anime({
        targets: rows,
        opacity: [0, 1],
        translateX: [-10, 0],
        duration: 440,
        delay: anime.stagger(75, {
            start: 650
        }),
        easing: "easeOutQuad"
    });


    // Indikator dot muncul terakhir
    anime({
        targets: reportDot,
        opacity: [0, 1],
        scale: [0.75, 1],
        duration: 850,
        delay: 1100,
        easing: "easeOutElastic(1, .55)"
    });
}

document.addEventListener("DOMContentLoaded", function () {

    // Login page
    initLoginUI();

    if (typeof anime === "undefined") return;

    // Home page
    if (document.getElementById("homeBody")) {
        animateHomeEntrance();
    }
});

function initLoginUI() {

    if (typeof anime === "undefined") return;

    const card = document.querySelector(".login-card");
    const image = document.querySelector(".login-image");
    const form = document.querySelector(".login-form");
    const controls = document.querySelectorAll(
        ".login-form .form-control"
    );
    const button = document.querySelector(".login-button");

    if (!card || !form) return;


    // Entrance animation login
    anime.timeline({
        easing: "easeOutCubic"
    })

        .add({
            targets: card,
            opacity: [0, 1],
            translateY: [24, 0],
            scale: [0.97, 1],
            duration: 650
        })

        .add({
            targets: image,
            opacity: [0, 1],
            translateX: [-18, 0],
            duration: 500,
            offset: "-=380"
        })

        .add({
            targets: form,
            opacity: [0, 1],
            translateX: [18, 0],
            duration: 500,
            offset: "-=430"
        })

        .add({
            targets: button,
            opacity: [0, 1],
            translateY: [8, 0],
            duration: 380,
            offset: "-=260"
        });


    // Input focus animation
    controls.forEach(function (control) {

        control.addEventListener("focus", function () {

            anime({
                targets: control,
                scale: [1, 1.01],
                duration: 180,
                easing: "easeOutQuad"
            });

        });


        control.addEventListener("blur", function () {
            anime({
                targets: control,
                scale: [1.01, 1],
                duration: 180,
                easing: "easeOutQuad"
            });

        });

    });
}