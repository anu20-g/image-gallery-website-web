function filterGal(cat) {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.item').forEach(el => {
        el.style.display = (cat === 'all' || el.classList.contains(cat)) ? 'block' : 'none';
    });
}