const burger = document.querySelector(".burger");
        const ul = document.querySelector(".nav-ul");
        const li_1 = document.querySelector(".li_1");
        const li_2 = document.querySelector(".li_2");
        const li_3 = document.querySelector(".li_3");
        const li_4 = document.querySelector(".li_4");
        const li_5 = document.querySelector(".li_5");
        burger.addEventListener("click", mySlide);
        
        function mySlide() {
          ul.classList.toggle("nav-ul-new");
          li_1.classList.toggle("nav-li-new");
          li_2.classList.toggle("nav-li-new");
          li_3.classList.toggle("nav-li-new");
          li_4.classList.toggle("nav-li-new");
          li_5.classList.toggle("nav-li-new");
        }