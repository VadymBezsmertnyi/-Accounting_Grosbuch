window.addEventListener('DOMContentLoaded',()=>{
    const listService = document.querySelectorAll('.legalListFull'), /* Форми послуг */
             buttonService = document.querySelectorAll('.legalListFull .buttonServiceList'), /* Кнопки форм послуг */
             buttonHideService =  document.querySelectorAll('.hideButton'), /* Кнопки закриття форм послуг */
             nameTextService = document.querySelectorAll('.nameTextService'), /* Головна назва тексту */
             textService = document.querySelectorAll('.textService'), /* Основний текст послуги */
             other = document.querySelectorAll('.other');

    /*Відкриття при нажимання кнопок детальніше */
    buttonService.forEach((button, i) =>{
        button.addEventListener('click', () =>{
            showListService ();
            hideTextServie ();
            listService[i].style.display = "none";
            nameTextService[i].style.display = "";
            textService[i].style.display = "";
            buttonHideService[i].style.display = "";
        });
    });

    /* Закривання при нажиманні на кнопку зачинити */
    buttonHideService.forEach(otherSite =>{
        otherSite.addEventListener('click', () =>{
            showListService ();
            hideTextServie ();
        });
    });

    /* Закривання при нажиманні на інші частини сайту */
    other.forEach(otherSite =>{
        otherSite.addEventListener('click', () =>{
            showListService ();
            hideTextServie ();
        });
    });
    
    /* Функція скривання основного тексту, тексту послуг, кнопок зачинити */
    function hideTextServie (){
        nameTextService.forEach(form =>{
            form.style.display = "none";
        });
        textService.forEach(form =>{
            form.style.display = "none";
        });
        buttonHideService.forEach(button =>{
            button.style.display = "none";
        });
    }
    hideTextServie ();

    /* Функція відкривання основної форми */
    function showListService (){
        listService.forEach(form =>{
            form.style.display = "";
        });
    }










});