const FontSizeControl = document.getElementById('font-size-control');
const TextSpan = document.getElementById('text');

FontSizeControl.addEventListener('input', () => {
    const fontSize = FontSizeControl.value;
    TextSpan.style.fontSize = `${fontSize}px`;
})