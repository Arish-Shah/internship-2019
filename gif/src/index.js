const gifContainer = document.querySelector('.gif-container');

window.onload = window.onhashchange = function() {
	const q = window.location.hash.slice(1) || 'cats';
	document.querySelector('input[type=text]').value = this.decodeURIComponent(q);

	getGIF(q);
};

async function getGIF(query) {
	const url = 'https://api.giphy.com/v1/gifs/search?';
	const api_key = 'api_key=mtIvaLrwx2hqQOsZLehvw9s3kDrTcTBg';
	const q = `&q=${query}`;

	const response = await fetch(`${url}${api_key}${q}`);
	const json = await response.json();
	const data = json.data;

	clearContainer();
	data.forEach(ele => {
		const a = document.createElement('a');
		a.href = ele.embed_url;
		a.target = '_blank';
		const img = document.createElement('img');
		img.src = ele.images.fixed_width.url;
		a.appendChild(img);
		gifContainer.appendChild(a);
	});
}

function clearContainer() {
	while (gifContainer.firstChild) {
		gifContainer.removeChild(gifContainer.firstChild);
	}
}
