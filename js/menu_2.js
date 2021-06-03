window.addEventListener('DOMContentLoaded',()=>{
    const secondMenuLegal = document.querySelectorAll('.third_menuLegal'), /* Другий ряд меню Юридчні*/
          secondMenuFOP = document.querySelectorAll('.third_menuFOP'), /* Другий ряд меню ФОПи*/
          MenuLegal = document.querySelectorAll('#menuLegal div'), /* Третій ряд меню юридичні */
          MenuFOP = document.querySelectorAll('#menuFOP div'), /* Третій ряд меню ФОПи */
          idMenuFOP = document.querySelector('#menuFOP'); /* ID третього ряду ФОПи */


          console.log(idMenuFOP);
          /* console.log(secondMenuFOP);
          console.log(MenuLegal);
          console.log(MenuFOP); */

    /* Фукція скривання третього меню */
    function hideSecondMenu(){
        secondMenuLegal.forEach(button =>{
            button.classList.add('displayNone');
        });
        secondMenuFOP.forEach(button =>{
            button.classList.add('displayNone');
        });
    }
    hideSecondMenu();

    /* Функція скривання стилів */
    function hideStyle(){
        MenuLegal.forEach(button =>{
            button.classList.remove('mouseclick');
        });
        MenuFOP.forEach(button =>{
            button.classList.remove('mouseclick');
        });
    }
    /* Включання/виключання стилів при наведенні на елемент */
    MenuLegal.forEach(button =>{
        button.addEventListener('mouseover', () =>{
            button.classList.add('mouseover');
        });
        button.addEventListener('mouseout', () =>{
            button.classList.remove('mouseover');
        });
    });
    MenuFOP.forEach(button =>{
        button.addEventListener('mouseover', () =>{
            button.classList.add('mouseover');
        });
        button.addEventListener('mouseout', () =>{
            button.classList.remove('mouseover');
        });
    });

    /* Відображення третього меню при кліку на елемент */
    MenuLegal.forEach((button, i) =>{
        button.addEventListener('click', ()=>{
            hideStyle();
            hideSecondMenu();
            secondMenuLegal[i].classList.remove('displayNone');
            button.classList.add('mouseclick');
        });
    });
    MenuFOP.forEach((button, i) =>{
        button.addEventListener('click', ()=>{
            hideStyle();
            hideSecondMenu();
            secondMenuFOP[i].classList.remove('displayNone');
            button.classList.add('mouseclick');
            idMenuFOP.style.margin = "0";
            MenuFOP[i].style.width =  "35vw";
        });
    });
    
});