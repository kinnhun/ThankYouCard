const pages = Array.from(document.querySelectorAll('.page'));
let currentPage = 0;

function nextPage() {
    if (currentPage < pages.length) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');
    }
}

document.getElementById('book').addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX > rect.width / 2) {
        nextPage();
    } else {
        prevPage();
    }
});