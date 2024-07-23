document.getElementById('developmentButton').addEventListener('click', function() {
    alert('Нет подключения к интернету');

    setTimeout(() => {
        startDestruction();
    }, 2000);
});

function startDestruction() {
    const button = document.getElementById('developmentButton');
    const overlay = document.getElementById('overlay');
    
    button.classList.add('shake');
    
    setTimeout(() => {
        button.remove();
        showOverlay(overlay);
    }, 3000);
}

function showOverlay(overlay) {
    overlay.classList.remove('hidden');
    overlay.textContent = 'Уничтожение...';
    
    setTimeout(() => {
        overlay.textContent = 'Телефон ломается...';
    }, 2000);
    
    setTimeout(() => {
        overlay.textContent = '';
        overlay.classList.add('hidden');
        document.body.classList.add('shake');
    }, 4000);
    
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 7000);
}
