// Simple dark/light toggle — toggles `body.dark` and persists choice
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle-mode');

    function updateButtonText() {
        if (!btn) return;
        btn.textContent = document.body.classList.contains('dark') ? 'Light mode' : 'Dark mode';
    }

    // Apply saved preference
    const saved = localStorage.getItem('mode');
    if (saved === 'dark') document.body.classList.add('dark');

    updateButtonText();

    if (btn) {
        btn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            localStorage.setItem('mode', isDark ? 'dark' : 'light');
            updateButtonText();
        });
    }
});