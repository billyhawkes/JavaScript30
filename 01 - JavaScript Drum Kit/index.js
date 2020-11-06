const body = document.querySelector("body");
const audio = Array.from(document.querySelectorAll("audio"));
const boxes = Array.from(document.querySelectorAll(".key"));

body.addEventListener("keydown", keypressed);

async function keypressed(e) {
	keyNum = e.which;
	const corBox = boxes.filter((box) => box.attributes[0].nodeValue == keyNum);
	const corAudio = audio.filter(
		(sound) => sound.attributes[0].nodeValue == keyNum
	);

	if (!corAudio[0]) return;
	corAudio[0].currentTime = 0;
	corAudio[0].play();
	const anim = await playAnimation(corBox[0]);
}

function playAnimation(box) {
	return new Promise((resolve) => {
		box.attributes[1].nodeValue += " playing";
		setTimeout(() => {
			box.attributes[1].nodeValue = "key";
			resolve();
		}, 100);
	});
}
