document.getElementById('developmentButton').addEventListener('click', function() {
    alert('Нет подключения к интернету');

    setTimeout(() => {
        startDestruction();
    }, 2000);
});

function startDestruction() {
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    content.classList.add('hidden');
    overlay.classList.remove('hidden');
    overlay.textContent = 'Телефон уничтожается...';

    setTimeout(() => {
        overlay.textContent = 'Сайт ломается...';
    }, 2000);

    setTimeout(() => {
        overlay.textContent = 'Хаха, ты попался на прикол, 1 апреля не верь никому!';
    }, 5000);

    setTimeout(() => {
        resetPage();
    }, 10000);
}

function resetPage() {
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    content.classList.remove('hidden');
    overlay.classList.add('hidden');
    overlay.textContent = '';
}
