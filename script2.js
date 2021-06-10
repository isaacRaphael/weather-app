
let htmlBody = document.getElementById('body')


window.addEventListener('load' , function(){
	htmlBody.className = localStorage.getItem('currentTheme')
})



function toggleDark (){
	htmlBody.className ="dark"
	let currentTheme = htmlBody.classList[0]
	if (currentTheme){
		localStorage.setItem('currentTheme', currentTheme);
	}
}

function toggleLight (){
	htmlBody.classList.remove('dark')
	localStorage.clear()
}


