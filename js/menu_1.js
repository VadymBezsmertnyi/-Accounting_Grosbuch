window.addEventListener('DOMContentLoaded',()=>{
    const buttonMenu = document.querySelectorAll('.button'),/* Перший ряд меню */
          buttonSecondMenu = document.querySelectorAll('.rowSecond_menu'),/* Другий ряд меню */
          partiesPart = document.querySelectorAll('.parties_part, #introductionText'), /* Краї сайту */
          secondMenuLegal = document.querySelectorAll('.third_menuLegal'), /* Другий ряд меню Юридчні*/
          secondMenuFOP = document.querySelectorAll('.third_menuFOP'), /* Другий ряд меню ФОПи*/
          MenuLegal = document.querySelectorAll('#menuLegal div'), /* Третій ряд меню юридичні */
          MenuFOP = document.querySelectorAll('#menuFOP div'); /* Третій ряд меню ФОПи */

    /* Включання/виключання стилів при наведенні на елемент */
    buttonMenu.forEach(button =>{
        button.addEventListener('mouseover', () =>{
            button.classList.add('mouseover');
        });
        button.addEventListener('mouseout', () =>{
            button.classList.remove('mouseover');
        });
    });

    /* Включання/виключання стилів при кліку на елемент */
    buttonMenu.forEach((button, i) =>{
        button.addEventListener('click', () =>{
            hideStyle();
            button.classList.add('mouseclick');
            showButtonSecondMenu(i);
        });
    });
    
    /* Функція виключання стилів кліку елементів */
    function hideStyle(){
        buttonMenu.forEach(button =>{
            button.classList.remove('mouseclick');
        });
        MenuLegal.forEach(button =>{
            button.classList.remove('mouseclick');
        });
        MenuFOP.forEach(button =>{
            button.classList.remove('mouseclick');
        });
    }
    
    /* Поява/зникнення другого ряду меню */
    function showButtonSecondMenu(i=1){
        hideButtonSecondMenu();
        hideSecondMenu();
        buttonSecondMenu[i].classList.toggle('displayNone');
    }

    /* Функція скривання другого ряду і стилів */
    function hideButtonSecondMenu(){
        buttonSecondMenu.forEach(buttonSecond =>{
            buttonSecond.classList.add('displayNone');
        });
        partiesPart.forEach(button =>{
            button.addEventListener('click',() =>{
                hideButtonSecondMenu();
                hideSecondMenu();
                buttonMenu.forEach(button =>{
                    button.classList.remove('mouseclick');
                });
            });
        });
    }
    hideButtonSecondMenu();
    /* Фукція скривання третього меню */
    function hideSecondMenu(){
        secondMenuLegal.forEach(button =>{
            button.classList.add('displayNone');
        });
        secondMenuFOP.forEach(button =>{
            button.classList.add('displayNone');
        });
    }
});