/* ---------- AOS (cukup diinisialisasi sekali) ---------- */
AOS.init({
    offset: 80,
    once: true
});

/* ---------- LOADER ---------- */
window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.classList.add("hide");              // fade out
        setTimeout(function () {
            loader.style.display = "none";
            AOS.refreshHard();
        }, 600);
    }, 1500);
});

/* ---------- MUSIK (mulai setelah klik pertama) ---------- */
document.addEventListener("click", function () {
    const music = document.getElementById("music");
    music.muted = false;
    music.play().catch(function () { /* diabaikan jika diblokir browser */ });
}, { once: true });

/* ---------- EFEK MENGETIK ---------- */
const texts = [
    "I am a Data Scientist",
    "I am a Data Analyst",
    "I am a Data Engineer",
    "I am a Web Designer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const element = document.querySelector(".identitas");
    const currentText = texts[textIndex];

    charIndex += deleting ? -1 : 1;
    element.textContent = currentText.substring(0, charIndex);

    if (!deleting && charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeEffect, 900);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* ---------- SERTIFIKAT (buka / tutup) ---------- */
function showCertifications() {
    const cert = document.getElementById("certifications");
    const btn = document.querySelector(".lainnya");

    const isOpen = cert.classList.toggle("show");
    btn.innerText = isOpen ? "see less certifications" : "see more certifications";
    btn.setAttribute("aria-expanded", isOpen);

    setTimeout(function () {
        AOS.refreshHard();
    }, 700);
}

/* ---------- NAVBAR: tandai menu aktif saat scroll ---------- */
(function () {
    const links = document.querySelectorAll(".navbar a");
    const targets = Array.from(links)
        .map(function (a) { return document.querySelector(a.getAttribute("href")); })
        .filter(Boolean);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) {
                a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-40% 0px -50% 0px" });

    targets.forEach(function (t) { observer.observe(t); });
})();
