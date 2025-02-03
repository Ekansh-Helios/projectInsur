function updateRange(value) {
    const range = document.getElementById('progressRange');
    range.style.background = `linear-gradient(to right, #007bff ${value}%, #e9ecef ${value}%)`;
}