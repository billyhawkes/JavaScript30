const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "hsl(0, 50%, 50%)";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let hue = 0;
let lineW = 50; 

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
	if (!isDrawing) return;
	console.log(e)

	ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
	
	hue++;

	if (ctx.lineWidth < 40 || ctx.lineWidth > 60) {
		direction = !direction;
	}
	direction ? ctx.lineWidth++ : ctx.lineWidth--;
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true
	lastX = e.offsetX;
	lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
