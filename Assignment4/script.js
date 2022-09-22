const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '09b467da90msh65b0ccec6eea801p1778d6jsnb4debf6a2bfb',
		'X-RapidAPI-Host': 'sentino.p.rapidapi.com'
	}
};

let button = document.querySelector('.btn');
button.addEventListener('click', ()=>{ 

fetch('https://sentino.p.rapidapi.com/questionnaire/neo.sentino.90', options)
	.then(response => response.json())
	.then(response => console.log(response.items[Math.floor(Math.random() * 90)]))
	.catch(err => console.error(err));

});

 