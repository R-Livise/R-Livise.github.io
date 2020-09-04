function redirigir(ev) {
    let section = ev.target.id

    document.getElementById('nav-info').classList.remove("resalta")
    document.getElementById('nav-work').classList.remove("resalta")
    document.getElementById('nav-contact').classList.remove("resalta")

    ev.target.classList.add("resalta")

    let div = document.getElementById(section.split("-")[1])

    let element = document.getElementById('header');
    let elementStyle = window.getComputedStyle(element);
    let elementColor = elementStyle.getPropertyValue('height').split('p')[0];

    if (div != null) {
        document.scrollingElement.scrollTop = div.offsetTop - elementColor;
    }
}

function redirigirFocus(ev) {
    if (ev.key == "Enter") {
        redirigir(ev);
    }
}

function activeMenu(ev) {
    document.getElementById('content-menu').classList.toggle("no-active")
}

document.getElementById('nav-info').addEventListener('click', redirigir)
document.getElementById('nav-work').addEventListener('click', redirigir)
document.getElementById('nav-contact').addEventListener('click', redirigir)
document.getElementById('nav-info').addEventListener('keyup', redirigirFocus)
document.getElementById('nav-work').addEventListener('keyup', redirigirFocus)
document.getElementById('nav-contact').addEventListener('keyup', redirigirFocus)

document.getElementById('menu').addEventListener('click', activeMenu)