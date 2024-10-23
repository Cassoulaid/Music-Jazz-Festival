function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}

const text = document.getElementById('banner-content');
        let position = window.innerWidth;

        function continuousScroll() {
            position-=4;
            if (position < -text.offsetWidth) {
                position = window.innerWidth;
            }
            text.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(continuousScroll);
        }

        continuousScroll();
