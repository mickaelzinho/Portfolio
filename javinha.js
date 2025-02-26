function toggleMenu(event) {
    event.stopPropagation();
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

function closeMenu(event) {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
}


window.nascer = ScrollReveal({ reset: true })

nascer.reveal('.minha_foto',
    {
        duration: 2000,
        distance: '100px',
        delay: 300

    })

nascer.reveal('.texto_ola',
    {
        duration: 2000,
        distance: '100px',

    })


nascer.reveal('.apresentacao',
    {
        duration: 2000,
        distance: '100px',
        delay: 400

    })

nascer.reveal('.formacao',
    {
        duration: 2000,
        distance: '100px',
        delay: 500

    })



    nascer.reveal('.main',
    {
        duration: 2000,
        distance: '100px',
        delay: 500

    })





nascer.reveal('.certificados',
    {
        duration: 2000,
        distance: '100px',
        delay: 600

    })


nascer.reveal('.container',
    {
        duration: 2000,
        distance: '100px',
        delay: 700

    })

nascer.reveal('.contato_texto',
    {
        duration: 2000,
        distance: '100px',
        delay: 800

    })

nascer.reveal('.download',
    {
        duration: 2000,
        distance: '100px',
        delay: 900

    })
nascer.reveal('.copyright',
    {
        duration: 2000,
        distance: '100px',
        delay: 1000

    })