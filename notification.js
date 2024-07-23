document.getElementById('developmentButton').addEventListener('click', function() {
    alert('Нет подключения к интернету');

    setTimeout(() => {
        startDestruction();
    }, 2000);
});

function startDestruction() {
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');
    const errorImage = document.getElementById('errorImage');

    content.classList.add('hidden');
    overlay.classList.remove('hidden');

    setTimeout(() => {
        document.body.classList.add('shake');
    }, 500);

    setTimeout(() => {
        document.body.classList.remove('shake');
        overlay.textContent = 'Телефон уничтожается...';
    }, 2000);

    setTimeout(() => {
        overlay.classList.add('hidden');
        errorImage.classList.remove('hidden');
    }, 5000);

    setTimeout(() => {
        alert('Хаха, ты попался на прикол, 1 апреля не верь никому!');
        resetPage();
    }, 8000);
}

function resetPage() {
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');
    const errorImage = document.getElementById('errorImage');

    content.classList.remove('hidden');
    overlay.classList.add('hidden');
    overlay.textContent = '';
    errorImage.classList.add('hidden');
    document.body.classList.remove('shake');
}
