// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    function resizeMap() {
        const img = document.getElementById('solar-system-image');
        const areas = img.useMap ? document.querySelectorAll('map[name="' + img.useMap.substring(1) + '"] area') : [];
        const originalWidth = 1200; // Largura original da imagem
        const originalHeight = 1200; // Altura original da imagem
        const currentWidth = img.clientWidth;
        const currentHeight = img.clientHeight;
        const widthRatio = currentWidth / originalWidth;
        const heightRatio = currentHeight / originalHeight;

        areas.forEach(area => {
            const coords = area.dataset.coords.split(',').map(Number);
            const newCoords = coords.map((coord, index) => {
                return index % 2 === 0 ? Math.round(coord * widthRatio) : Math.round(coord * heightRatio);
            });
            area.coords = newCoords.join(',');
        });
    }

    window.addEventListener('resize', resizeMap);
    resizeMap();
});
