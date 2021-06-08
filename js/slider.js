window.addEventListener('DOMContentLoaded',()=>{
    const elementSlider = document.querySelectorAll('.nav-dot'),
          timeOut = 30000;

    let number = 0,
        infinity = setInterval(function() {
        elementSlider[number].click();
        number++;
        if(number==elementSlider.length){
            number=0;
        }
    },10000);

});