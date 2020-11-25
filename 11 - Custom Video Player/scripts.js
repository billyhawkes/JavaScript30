const video = document.querySelector('video');
const playBtn = document.querySelector('.toggle');
const speedRng = document.querySelector('input[name="playbackRate"]');
const volumeRng = document.querySelector('input[name="volume"]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const skip10 = document.querySelector('button[data-skip="-10"');
const skip25 = document.querySelector('button[data-skip="25"]');

// Toggle Play
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

function togglePlay () { 
	// video.paused ? video.play() : video.pause();
	if (video.paused) {
		video.play();
		playBtn.textContent = "||";
	} else {
		video.pause();
		playBtn.textContent = "►";
	}
}

// Playback Rate
speedRng.addEventListener('input', () => video.playbackRate = speedRng.value);

// Volume Range
volumeRng.addEventListener('input', () => video.volume = volumeRng.value);

// Progress Bar

//Changes Progress
function changeProgress(e) {
	const length = (e.offsetX / progress.offsetWidth) * 100;
	progressBar.style.flexBasis = `${length}%`;
	video.currentTime = video.duration * (length/100);
}
let hold = false;
progress.addEventListener('mousedown', () => hold = true);
document.addEventListener('mouseup', () => hold = false);
document.addEventListener('mousemove', () => {if (hold) changeProgress});
progress.addEventListener('click', changeProgress);

//Keeps Progress updated
function updateProgress () {
	progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`
}
video.addEventListener('timeupdate', updateProgress);

// Skip
skip10.addEventListener('click', () => video.currentTime -= 10);
skip25.addEventListener('click', () => video.currentTime += 25);
