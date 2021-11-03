
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

/**
 * set Time: just set time.
 *
 * @return {void} 
 */
function setTime() {
	const date = new Date();

	const seconds = date.getSeconds();
	const secondsDegreed = ((seconds / 60) * 360) + 90;

	const minutes = date.getMinutes();
	const minutesDegreed = ((minutes / 60) * 360) + 90;

	const hours = date.getHours();
	const hoursDegreed = ((hours / 12) * 360) + 90;

	secondHand.style.transform = `rotate(${secondsDegreed}deg)`;
	minHand.style.transform = `rotate(${minutesDegreed}deg)`;
	hourHand.style.transform = `rotate(${hoursDegreed}deg)`;
}


setInterval(setTime,1000);