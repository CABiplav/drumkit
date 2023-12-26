function clickBox() {
	const soundString = this.innerHTML.toLowerCase()
	const soundToPlay = `sound-${soundString}`
	const sound = document.getElementById(soundToPlay)
	sound.play()
}

const boxElements = document.querySelectorAll('.box')
boxElements.forEach((boxElement) => {
	boxElement.addEventListener('click', clickBox)
})
