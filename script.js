//storing api key
const apiKey = '31b7f92ee1069769b2b8eb71dde1b3d8'


//collecting user location
navigator.geolocation.getCurrentPosition(showPosition); 


function showPosition(position) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
	.then(response => response.json())
	.then(data => displayLocationData(data))
	.catch(err => console.log(err))
}

//colllecting DOM elements
let inputField = document.getElementById('inputField')
const theLocation = document.querySelector('.location')
const theTemp = document.querySelector('.temp')
const theWeather = document.querySelector('.weather')
const highLow = document.querySelector('.high-low')
const weatherIcon = document.querySelector('.weather-icon')
const theDate = document.querySelector('.date')


//Api call based on location
const getData = (search) => {
	fetch(`https://api.openweathermap.org/data/2.5/find?q=${search.toLowerCase()}&units=metric&appid=${apiKey}`)
	.then(response => response.json())
	.then(data => displayData(data))
	.catch(err => console.log(err))
}


// Search event
inputField.addEventListener('keyup' , function(event){
	if (event.keyCode === 13 ) {


	 const encodedInput = encodeURI(inputField.value)
	 getData(encodedInput)
	 inputField.value = ""
	}

})


// data display based on search
function displayData(data){
 theLocation.innerHTML =`${data.list[0].name}, ${data.list[0].sys.country}`
 theTemp.innerHTML = `${Math.round(data.list[0].main.temp)}<sup>o</sup>C`
 theWeather.innerHTML = `${data.list[0].weather[0].main}`
 highLow.innerHTML = `${Math.round(data.list[0].main.temp_min)}<sup>o</sup>C / ${Math.round(data.list[0].main.temp_max)}<sup>o</sup>C`
 pickImage(data.list[0].weather[0].main)

}


// data display based on location
function displayLocationData(data){
 theLocation.innerHTML =`${data.name}, ${data.sys.country}`
 theTemp.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`
 theWeather.innerHTML = `${data.weather[0].main}`
 highLow.innerHTML =`${Math.round(data.main.temp_min)}<sup>o</sup>C / ${Math.round(data.main.temp_max)}<sup>o</sup>C`
 pickImage(data.weather[0].main)

}



function pickImage(weather){
	if (weather.toLowerCase().includes('sun') || weather.toLowerCase().includes('clear')){
		weatherIcon.src="img/sun.svg"
	} else if (weather.toLowerCase().includes('cloud')){
		weatherIcon.src="img/cloudy.svg"
	} else if (weather.toLowerCase().includes('snow')){
		weatherIcon.src="img/snow.svg"
	} else {
		weatherIcon.src="img/rain.svg"
	}
}




//getting date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
theDate.innerHTML = today
