function updateRange(value) {
    const range = document.getElementById('progressRange');
    const percentage = (value - range.min) / (range.max - range.min) * 100;
    range.style.background = `linear-gradient(to right, #7166f5 ${percentage}%, #e9ecef 0%)`;
}

// Initialize the slider background on page load
document.addEventListener('DOMContentLoaded', function () {
    const range = document.getElementById('progressRange');
    updateRange(range.value);
});