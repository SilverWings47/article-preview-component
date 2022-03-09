const shareIcon = document.querySelector('.fas');
const shareBtn = document.querySelector('.share-btn');
const tooltip = document.querySelector('.tooltip');

shareBtn.addEventListener('click', showTooltip);

function showTooltip() {
    tooltip.classList.toggle('active');
    shareBtn.classList.toggle('active');
}