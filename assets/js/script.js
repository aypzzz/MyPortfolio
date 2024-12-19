function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("open");
}

const words = document.querySelectorAll('#about-text .word');

function handleScroll() {
    const aboutSection = document.querySelector('#about');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const triggerPoint = windowHeight * 0.4;

    if (sectionTop < triggerPoint) {
        const sectionHeight = aboutSection.offsetHeight;
        const scrollRatio = (triggerPoint - sectionTop) / (sectionHeight * 0.6); 

        words.forEach((word, index) => {
            const wordPosition = index / words.length;

            if (scrollRatio >= wordPosition) {
                word.classList.add('changed-color');
            } else {
                word.classList.remove('changed-color');
            }
        });
    } else {
        words.forEach(word => word.classList.remove('changed-color'));
    }
}

window.addEventListener('scroll', handleScroll);
