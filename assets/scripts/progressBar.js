const range = document.getElementById("progressRange");
const sliderValueDisplay = document.getElementById("slider-value");

range.addEventListener("input", function () {
    const value = parseInt(this.value, 10); 
    const thumbPosition = ((value - this.min) / (this.max - this.min)) * 100; 

    this.style.setProperty("--thumb-position", `${thumbPosition}%`);
    sliderValueDisplay.textContent = value;
});

range.dispatchEvent(new Event("input"));