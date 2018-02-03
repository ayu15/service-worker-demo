export default function updateNotify() {
	console.log('inside update notify');
	const elem = document.querySelector('.new-update');
	elem.setAttribute("style", "display: block");
	return Promise.resolve(true);
};
