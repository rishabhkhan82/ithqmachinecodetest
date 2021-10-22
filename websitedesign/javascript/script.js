    /* Toggle Button Script */
    var x, y, butEle, filterSec, welcomeSec, categoriesSec, welcomeHead;
    x = 1;
    y = 1;
    butEle = document.getElementById('circle-but');
    filterSec = document.getElementById('filter-section');
    welcomeSec = document.getElementById('welcome-section');
    welcomeSecTwo = document.getElementById('welcome-section-two');
    formSec = document.getElementById('form-section');
    categoriesSec = document.getElementById('categories-section');
    welcomeHead = document.getElementById('welcome-heading');
    function myFunction()
    {
        butEle.style.border = "2px solid white";
        if(x == 1)
        {
            butEle.style.border = "2px solid white";
            butEle.style.transform = "translateX(30px)";
            butEle.style.transition = "transform 0.5s";
            filterSec.style.backgroundColor = "white";
            welcomeSec.style.backgroundColor = "#f8f9fa";
            welcomeSecTwo.style.backgroundColor = "#f8f9fa";
            formSec.style.backgroundColor = "#f8f9fa";
            categoriesSec.style.backgroundColor = "#f8f9fa";
            welcomeHead.style.color = "none";
            x = 0;
        }
        else
        {
            butEle.style.border = "2px solid black";
            butEle.style.transform = "translateX(0px)";
            butEle.style.transition = "transform 0.5s";
            filterSec.style.backgroundColor = "#212529";
            welcomeSec.style.backgroundColor = "#212529";
            welcomeSecTwo.style.backgroundColor = "#212529";
            formSec.style.backgroundColor = "rgba(139,0,0,0.9)";
            categoriesSec.style.backgroundColor = "#212529";
            welcomeHead.style.color = "#6c757d";
            x = 1;
        }
    }

    function myFunction2()
    {
        butEle.style.border = "2px solid white";
        if(y == 1)
        {
            butEle.style.border = "2px solid white";
            butEle.style.transform = "translateX(30px)";
            butEle.style.transition = "transform 0.5s";
            y = 0;
        }
        else
        {
            butEle.style.border = "2px solid black";
            butEle.style.transform = "translateX(0px)";
            butEle.style.transition = "transform 0.5s";
            y = 1;
        }
    }
