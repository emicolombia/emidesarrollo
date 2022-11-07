window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };
    // Alert //
    function sweetAlert(){
        Swal.fire('Any fool can use a computer')}
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});     

    //instagram//
    'use strict'
    
    const galery = document.querySelector('.galery');
    const feed = document.querySelector('.contenedor-galery');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const fields = "id,media_type,media_url,thumbnail_url,timestamp,permalink,caption";
    const limit = 10;

    const token = 'EAAHZAZBqwg3isBAIV6ZCych5aYCZAozYXULUAnGs1o9MULBAAX5TZB43mXcylmpErcpBh7ZCmgY59H9eroOihx6uokyVvmu2oZAPwn0qdEWqpshkXRRMigxd7sy2tn1YZCB0RADJvxFkEam2nJTmjZAGpYh7Ve6H7PCwilDAflZBN9Pa69KZAZBNI8vTqwwAyiCggJMEF5rlX0kWhCjqxHkFAZBpR';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=${limit}`;

    fetch(url)
    .then(res => res.json())
    .then(data => CrearHtml(data.data))

    function CrearHtml(data){
        for (const img of data){
            galery.innerHTML += `
            <div class="image overflow">
            <img loading="lazy" src="${img.media_url }" alt="">
            <div class="opacity-hover">
                <a href="${img.permalink}" class="caption">
                    <p>
                    ${img.caption.slice(0, 100)}
                    </p>
                </a>
            </div>
            </div>
            `
        }
    }
next.addEventListener('click', moveGalery);
prev.addEventListener('click', moveGalery);

function moveGalery(e){
    if(e.target.id === 'next' || e.target.parentElement.id === 'next'){
        feed.scrollLeft += feed.offsetWidth;
    }else{
        feed.scrollLeft -= feed.offsetWidth;
    }
}