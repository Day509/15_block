window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('animated');
        } else {
            el.classList.remove('animated');
        }
    });
});

document.querySelectorAll('.hover-animate').forEach(el => {
    el.addEventListener('mouseover', () => {
        // Ajoutez votre logique d'animation ici
        el.style.transform = 'scale(1.1)';
    });
    el.addEventListener('mouseout', () => {
        // Réinitialiser l'animation
        el.style.transform = 'scale(1.0)';
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax').forEach(el => {
        const speed = el.dataset.parallaxSpeed;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const desertSection = document.querySelector('.container');
    const iceSection = document.querySelector('.container2');
    const floodSection = document.querySelector('.container3');
    const quizSection = document.querySelector('.quiz-section');

    if (window.scrollY >= desertSection.offsetTop && window.scrollY < iceSection.offsetTop) {
        header.style.backgroundColor = "#f4a261"; // Couleur pour le désert
    } else if (window.scrollY >= iceSection.offsetTop && window.scrollY < floodSection.offsetTop) {
        header.style.backgroundColor = "#add8e6"; // Couleur pour la glace
    } else if (window.scrollY >= floodSection.offsetTop && window.scrollY < quizSection.offsetTop) {
        header.style.backgroundColor = "#32cd32"; // Couleur pour l'inondation
    } else if (window.scrollY >= quizSection.offsetTop) {
        header.style.backgroundColor = "#ffffff"; // Couleur pour le quiz
    }
});

document.getElementById('submit-quiz').addEventListener('click', function() {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let totalQuestions = questions.length;

    questions.forEach(question => {
        const checkedRadio = question.querySelector('input[type="radio"]:checked');
        if (checkedRadio) {
            // Ici, vous pouvez comparer la réponse avec la bonne réponse
            // Exemple: 
            if (checkedRadio.value === "Paris") { // Remplacer par la bonne réponse
                score++;
            }
        }
    });

    const result = document.getElementById('quiz-result');
    result.textContent = `Vous avez obtenu ${score} sur ${totalQuestions}.`;
});

