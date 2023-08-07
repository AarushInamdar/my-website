const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        };
    });
});

const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach((el) => observer.observe(el));

// Get the button:
let mybutton = document.getElementById("topButton");
function topFunction() {
    document.getElementById("top").scrollIntoView({behavior: "smooth"});        
}


