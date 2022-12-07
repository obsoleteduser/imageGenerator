const display = document.querySelector('.container');
const URL = 'http://dog.ceo/api/breeds/image/random'
console.log(display)

const setImage = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    display.style.background = `url(${data.message})`
}


window.addEventListener('load', () => {

    setImage(URL)

})

setInterval(() => { setImage(URL) }, 2000)