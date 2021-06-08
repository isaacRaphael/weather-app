// let darkButton = document.querySelector('dark-btn')
let htmlBody = document.getElementById('body')
const pText = document.querySelector('.welcome-section p')



function toggleDark (){
	 htmlBody.className ="dark"
}

function toggleLight (){
	htmlBody.classList.remove('dark')
}


if (document.body.style.maxWidth <= 450) {
	pText.innerHtTML = 'wanna know the weather today?'
}