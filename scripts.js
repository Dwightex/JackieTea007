// Функция для запуска фейерверков
function runFireworks() {
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        // Произвольно выберите угол, чтобы создать эффект фейерверка
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: Math.random() }
        });

        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: Math.random() }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Запуск фейерверков при загрузке страницы
window.onload = runFireworks;