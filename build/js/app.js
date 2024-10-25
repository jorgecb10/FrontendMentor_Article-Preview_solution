document.addEventListener("DOMContentLoaded",function(){let a=document.querySelector(".card__enlace"),c=document.querySelector("#enlace"),t=document.querySelector(".card__contacto"),r=document.querySelector(".card__info-contacto"),i="rgb(255, 255, 255)",n="rgb(72, 85, 106)";var e=matchMedia("(min-width: 468px)");let o=!1;function s(e){e.matches?(c.addEventListener("click",d),c.removeEventListener("click",l)):(c.addEventListener("click",l),c.removeEventListener("click",d))}function l(e){var a;e.preventDefault(),o=t.style.backgroundColor===n||o?(t.style.backgroundColor=i,(a=document.createElement("div")).className="card__info-contacto",a.innerHTML=`
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
            `,r.replaceWith(a),r=a,!1):(t.style.backgroundColor=n,(a=document.createElement("div")).className="card__info-contacto",a.innerHTML=`
                <p class="card__texto-share">
                    Share
                </p>
                <div class="card__links">
                    <img src="img/icon-facebook.svg">
                    <img src="img/icon-twitter.svg">
                    <img src="img/icon-pinterest.svg"> 
                </div>
            `,r.replaceWith(a),r=a,!0)}function d(e){e.preventDefault();{let e=document.querySelector(".card__flotante");if(e)e.remove();else{let e=document.createElement("div");e.classList.add("card__flotante"),e.innerHTML=`
                <p class="card__texto-share">
                    Share
                </p>
                <div class="card__links">
                    <img src="img/icon-facebook.svg">
                    <img src="img/icon-twitter.svg">
                    <img src="img/icon-pinterest.svg"> 
                </div>
            `,a.appendChild(e)}}}window.addEventListener("resize",function(){var e;480<=window.innerWidth?(t.style.backgroundColor=i,o&&((e=document.createElement("div")).className="card__info-contacto",e.innerHTML=`
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
                `,r.replaceWith(e),r=e,o=!1)):window.innerWidth<=480&&(e=document.querySelector(".card__flotante"))&&e.remove()}),s(e),e.addListener(s)});