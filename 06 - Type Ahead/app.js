const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
fetch(endpoint)
	.then(res => res.json())
	.then(data => cities = data);


const input = document.querySelector('.search');
const list = document.querySelector('.suggestions');
console.log(input)

input.addEventListener('input', function(e) { 
	if (this.value == "") {
		list.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
		return;
	}
	list.innerHTML = "";

	const searched = cities.filter(place => `${place.city}, ${place.state}`.toLowerCase().includes(this.value.toLowerCase()))
	console.log(searched);

	searched.forEach(city =>  
		list.innerHTML += `<li><p>${city.city}, ${city.state}</p><p>${city.population}</p></li>`);
});
