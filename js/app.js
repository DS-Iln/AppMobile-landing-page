window.addEventListener('DOMContentLoaded', () => {
    // top-of-site-link
    document.querySelector('.go-to-top-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.header').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Links scroll to sections
    // const...

    function scrollToelement(elem, offset = 150) {
        window.scrollTo({
            top: elem.offsetTop - offset,
            behavior: 'smooth'
        });
    };

    // Accordions
    // ...
});