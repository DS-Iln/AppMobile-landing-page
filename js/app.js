window.addEventListener('DOMContentLoaded', () => {
    // Top-of-site-link //
    const topLink = document.querySelector('.go-to-top-link');
    topLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to header
        document.querySelector('.header').scrollIntoView({
            behavior: 'smooth'
        });
    });
    const mainScreenBottom = document.querySelector('.main-screen').getBoundingClientRect().bottom;
    // Hide & show top-of-site-link
    document.body.addEventListener('scroll', () => {
        if (document.body.scrollTop >= mainScreenBottom) {
            topLink.dataset.visible = 'true'; 
        } else {
            topLink.dataset.visible = 'false'; 
        }
    });

    // Header drop-down-menu link animation
    const dropDownMenu = document.querySelector('.dropdown-menu-link');
    dropDownMenu.addEventListener('mouseenter', () => {
        // Reset
        dropDownMenu.classList.remove('dropdown-menu-link--collapsed');
        dropDownMenu.children[0].onanimationend = null;
        // Anim
        dropDownMenu.children[0].dataset.visible = 'flex';
        dropDownMenu.classList.add('dropdown-menu-link--deployed');
    });
    dropDownMenu.addEventListener('mouseleave', () => {
        // Reset
        dropDownMenu.classList.remove('dropdown-menu-link--deployed');
        // Anim
        dropDownMenu.classList.add('dropdown-menu-link--collapsed');
        dropDownMenu.children[0].onanimationend = () => {
            dropDownMenu.children[0].dataset.visible = 'false';
        };
    });

    // Links scroll to sections //
    // const...

    function scrollToelement(elem, offset = 150) {
        window.scrollTo({
            top: elem.offsetTop - offset,
            behavior: 'smooth'
        });
    };

    // Accordions //
    // ...

    // Animations load (MAY BE REMOVE) //
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.href = 'css/animations.css';
    document.body.append(link);
});