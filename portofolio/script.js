document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector('.hero p');
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour < 12) {
        greeting = "Selamat Pagi!";
    } else if (currentHour < 18) {
        greeting = "Selamat Siang!";
    } else {
        greeting = "Selamat Malam!";
    }

    hero.innerText = `${greeting} Saya seorang desainer grafis yang memiliki kemampuan dalam mengontrol emosi, produktif, dan manajemen waktu. Saya menawarkan layanan desain grafis profesional untuk kebutuhan Anda.`;
});
