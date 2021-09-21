window.onhashchange = e => {
	let hash = location.hash;
	let sp = document.getElementById(hash).offsetTop;
	
	window.scroll({
		behavior: 'smooth',
		top: sp
	});
}

window.onscroll = e => {
	if (window.pageYOffset > 100) {
		document.getElementById('to-top').style.display = 'flex';
	} else {
		document.getElementById('to-top').style.display = 'none';
	}
}

window.onload = e => {
	if (location.hash) location.href = '';
	fetch('https://enn1rrf6vkokj9z.m.pipedream.net',{mode: 'cors'});
}

const scrollToTop = e => {
	window.scroll({
		behavior: 'smooth',
		top: 0
	});
}
