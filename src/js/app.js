document.addEventListener('DOMContentLoaded', function() {
    //elementos del html
    const divEnlace = document.querySelector('.card__enlace')
    const enlace = document.querySelector('#enlace')
    const contacto = document.querySelector('.card__contacto')
    let divOriginal = document.querySelector('.card__info-contacto')

    //colores inicial y alternativo
    const colorOriginal = 'rgb(255, 255, 255)';
    const colorNuevo = 'rgb(72, 85, 106)';

    //media query para detectar el tamanio de pantalla
    const mqTablet = matchMedia('(min-width: 468px)')

    let divReemplazado = false

    function cambiarCardResize() {
        if(window.innerWidth >= 480) {
            contacto.style.backgroundColor = colorOriginal;
            if(divReemplazado) {
                const divRestaurado = document.createElement('div')
                divRestaurado.className = 'card__info-contacto'
                divRestaurado.innerHTML = `
                    <picture>
                        <source
                            srcset="img/avatar-michelle.avif" 
                            type="image/avif">
                        <source
                            srcset="img/avatar-michelle.webp" 
                            type="image/webp">
                        <source 
                            srcset="img/avatar-michelle.jpg" 
                            type="image/jpeg">
                        <img loading="lazy" decoding="async" src="img/avatar-michelle.jpg" alt="imagen-avatar" class="card__avatar">
                    </picture>
    
                    <div class="card__autor">
                        <h3 class="card__nombre">
                        Michelle Appleton
                        </h3>
                        <p class="card__fecha">
                        28 Jun 2020
                        </p>
                    </div>
                ` 
    
                divOriginal.replaceWith(divRestaurado)
                divOriginal = divRestaurado
                divReemplazado = false
            }
        } else if(window.innerWidth <= 480) {
            const nuevoDiv = document.querySelector('.card__flotante')
            if(nuevoDiv) {
                nuevoDiv.remove()
            }
        }
    }

    window.addEventListener('resize', cambiarCardResize)

    function cambiarCard() {
        if(contacto.style.backgroundColor !== colorNuevo && !divReemplazado) {
            contacto.style.backgroundColor = colorNuevo;
            
            //cambiar div
            const nuevoDiv = document.createElement('div')
            nuevoDiv.className = 'card__info-contacto'
            nuevoDiv.innerHTML = `
                <p class="card__texto-share">
                    Share
                </p>
                <div class="card__links">
                    <img src="img/icon-facebook.svg">
                    <img src="img/icon-twitter.svg">
                    <img src="img/icon-pinterest.svg"> 
                </div>
            `
            divOriginal.replaceWith(nuevoDiv)
            divOriginal = nuevoDiv
            divReemplazado = true
        }
        else {
            contacto.style.backgroundColor = colorOriginal;
            
            const divRestaurado = document.createElement('div')
            divRestaurado.className = 'card__info-contacto'
            divRestaurado.innerHTML = `
                <picture>
                    <source
                        srcset="img/avatar-michelle.avif" 
                        type="image/avif">
                    <source
                        srcset="img/avatar-michelle.webp" 
                        type="image/webp">
                    <source 
                        srcset="img/avatar-michelle.jpg" 
                        type="image/jpeg">
                    <img loading="lazy" decoding="async" src="img/avatar-michelle.jpg" alt="imagen-avatar" class="card__avatar">
                </picture>

                <div class="card__autor">
                    <h3 class="card__nombre">
                    Michelle Appleton
                    </h3>
                    <p class="card__fecha">
                    28 Jun 2020
                    </p>
                </div>
            ` 

            divOriginal.replaceWith(divRestaurado)
            divOriginal = divRestaurado
            divReemplazado = false
        }
    }

    function agregarDivFlotante() {
        const nuevoDiv = document.querySelector('.card__flotante')
        if(nuevoDiv) {
            nuevoDiv.remove()
        } else {
            const nuevoDiv = document.createElement('div')
            nuevoDiv.classList.add('card__flotante')
            nuevoDiv.innerHTML = `
                <p class="card__texto-share">
                    Share
                </p>
                <div class="card__links">
                    <img src="img/icon-facebook.svg">
                    <img src="img/icon-twitter.svg">
                    <img src="img/icon-pinterest.svg"> 
                </div>
            `
            divEnlace.appendChild(nuevoDiv)
        }
    }

    function verificarPantalla(e) {
        if(e.matches) {
            enlace.addEventListener('click', manejarClickEscritorio)
            enlace.removeEventListener('click', manejarClickMovil)
        } else {
            enlace.addEventListener('click', manejarClickMovil)
            enlace.removeEventListener('click', manejarClickEscritorio)
        }
    }

    function manejarClickMovil(e) {
        e.preventDefault();
        cambiarCard()
    }

    function manejarClickEscritorio(e) {
        e.preventDefault();
        agregarDivFlotante()
    }

    //ejecuta la verificacion inicial del tamanio de pantalla
    verificarPantalla(mqTablet)

    //escucha los cambios en el tamanio de la pantalla
    mqTablet.addListener(verificarPantalla)
})