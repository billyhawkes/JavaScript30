const img = document.querySelector('img');
const root = document.documentElement;
const blur = document.querySelector('#blur');
const spacing = document.querySelector('#spacing');
const color = document.querySelector('#base');

blur.addEventListener('input', function () {
	root.style.setProperty('--blur', + blur.value + blur.dataset.sizing);
});
spacing.addEventListener('input', function () {
	root.style.setProperty('--spacing', spacing.value + spacing.dataset.sizing)
});
color.addEventListener('input', function () {
	root.style.setProperty('--base', color.value);
});
