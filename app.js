var backgroundColor = document.querySelector('.colorDisplay')
var colorValue = document.querySelector('.colorValue');
var clickButton = document.querySelector('.button');


var simpleColors = ['red', 'palegreen', 'lightsalmon', 'orange', 'yellow', 'pink', 'plum', 'palevioletred', 'wheat', 'lightcoral', 'limegreen', 'lightseagreen', 'darkcyan', 'darkgoldenrod'];

clickButton.addEventListener('click', () => {

    let randomSimpleColorVal = Math.floor(Math.random() * simpleColors.length);

    colorValue.textContent = simpleColors[randomSimpleColorVal];
    backgroundColor.style.backgroundColor = simpleColors[randomSimpleColorVal];
    
})



var simpleLink = document.querySelector('.simple');
var hexLink = document.querySelector('.hex');
var rgbLink = document.querySelector('.rgb');


simpleLink.addEventListener('click', () => {

    rgbLink.classList.remove('active');
    hexLink.classList.remove('active');
    simpleLink.classList.add('active');

    clickButton.addEventListener('click', () => {

        let randomSimpleColorVal = Math.floor(Math.random() * simpleColors.length);
    
        colorValue.textContent = simpleColors[randomSimpleColorVal];
        backgroundColor.style.backgroundColor = simpleColors[randomSimpleColorVal];
        
    })
})


hexLink.addEventListener('click', () => {

    rgbLink.classList.remove('active');
    simpleLink.classList.remove('active');
    hexLink.classList.add('active');

    clickButton.addEventListener('click', () => {
        
        let randomHexColorVal = '#';
        randomHexColorVal += Math.random().toString(16).slice(2, 8);
        
        colorValue.textContent = randomHexColorVal;
        backgroundColor.style.backgroundColor = randomHexColorVal;
        
    })

    // ------------------> Another Method <------------------
    // const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // const btn = document.getElementById("btn");
    // const color = document.querySelector(".color");
    
    //   let hexColor = "#";
    //   for (let i = 0; i < 6; i++) {
    //     hexColor += hex[getRandomNumber()];
    //     console.log(hexColor);
    //   }
    
    // function getRandomNumber() {
    //   return Math.floor(Math.random() * hex.length);
    // }
})



rgbLink.addEventListener('click', () => {
    rgbLink.classList.add('active');
    simpleLink.classList.remove('active');
    hexLink.classList.remove('active');

    let rgbColors = ['rgb(255, 0, 0)', 'rgb(152, 251, 152)', 'rgb(255, 160, 122)', 'rgb(255, 165, 0)', 'rgb(255, 255, 0)', 'rgb(255, 192, 203)', 'rgb(221, 160, 221)', 'rgb(216, 112, 147)', 'rgb(245, 222, 179)', 'rgb(240, 128, 128)', 'rgb(50, 205, 50)', 'rgb(32, 178, 170)', 'rgb(0, 139, 139)', 'rgb(184, 134, 11)'];

    clickButton.addEventListener('click', () => {
        let randomRgbColorVal = Math.floor(Math.random() * rgbColors.length);
    
        colorValue.textContent = rgbColors[randomRgbColorVal];
        backgroundColor.style.backgroundColor = rgbColors[randomRgbColorVal];
    })
    
})







