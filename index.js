const messageForm = document.querySelector('#message-form');
const messageShow = document.querySelector('#message-show');

const linkForm = document.querySelector('#link-form');
const messageInput = document.querySelector('#message-input');

const linkInput = document.querySelector('#link-input');
const copyIcon = document.querySelector('#copy-icon');
const linkIcon = document.querySelector('#link-icon');

const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
	messageForm.classList.add('hide');
    messageShow.classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();

	messageForm.classList.add('hide');
	linkForm.classList.remove('hide');
	const encrypted = btoa(messageInput.value);
	const encryptedUrl = `${window.location}#${encrypted}`;

	linkInput.value = encryptedUrl;
	linkInput.select();

	// let a = document.createElement('a');
	// const linkText = document.createTextNode('link');
	// a.appendChild(linkText);
	// a.setAttribute('href', encryptedUrl);
	// a.setAttribute('target', '_blank');

	// linkIcon.appendChild(a);
});

copyIcon.addEventListener('click', () => {
	linkInput.select();
	linkInput.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(linkInput.value);
});
