const pages = document.querySelectorAll('.page');
let current = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (current < pages.length - 1) {
        pages[current].classList.remove('active');
        current++;
        pages[current].classList.add('active');
    } else {
        alert("Đã hết thiệp! 🎉");
    }
});
