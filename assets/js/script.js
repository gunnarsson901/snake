// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM is now loaded')
    drawCanvas()
})

// Creats game canvas
function drawCanvas() {
    const canvas = document.getElementById('cvs');
    canvas.style.border = '1px solid black';
}