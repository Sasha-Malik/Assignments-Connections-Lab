
/* Carousel*/

let count = 0;
let prev = document.querySelector('.prev');

prev.addEventListener( 'click',() => {
    slide[count].style.display = "none";

    if(count>=1)
        count--;
    else
        count = 2;

    slide[count].style.display = "flex";
});

let next = document.querySelector('.next');
next.addEventListener( 'click',() => {

    slide[count].style.display = "none";

    if(count<2)
        count++;
    else
        count = 0;

    slide[count].style.display = "flex";
});

let slide = document.getElementsByClassName("slide");
slide[0].style.display = "flex";


/* Faq List */

let ans = document.getElementsByClassName("answer");

let ques = document.querySelectorAll('.faqList');

let open = [0,0,0,0];

ques.forEach(element => {

    element.addEventListener('click', () => { 


        console.log(element.innerHTML);

        if(element.innerHTML == "Question 1" && open[0] == 0)
        {
                ans[0].style.display = 'flex';
                open[0] = 1;
        }

        else if(element.innerHTML == "Question 2" && open[1] == 0)
        {
            ans[1].style.display = 'flex';
            open[1] = 1;
        }

        else if(element.innerHTML == "Question 3" && open[2] == 0)
        {
            ans[2].style.display = 'flex';
            open[2] = 1;
        }


        else if(element.innerHTML == "Question 4" && open[3] == 0)
        {
            ans[3].style.display = 'flex';
            open[3] = 1;
        }
        
        else if(element.innerHTML == "Question 1" && open[0] == 1)
        {
            ans[0].style.display = 'none';
            open[0] = 0;
        }
        

        else if(element.innerHTML == "Question 2" && open[1] == 1)
        {
            ans[1].style.display = 'none';
            open[1] = 0;
        }

        else if(element.innerHTML == "Question 3" && open[2] == 1)
        {
            ans[2].style.display = 'none';
            open[2] = 0;
        }


        else if(element.innerHTML == "Question 4" && open[3] == 1)
        {
            ans[3].style.display = 'none';
            open[3] = 0;
        }

        
    });
    
});

/* Adding comments */

function add(value){ 

    const div = document.createElement('div');
    div.classList.add('play');
    div.textContent = value;

    const container = document.querySelector('.container5');
    container.appendChild(div);
}

let counter = 0;

window.addEventListener("load", () => {

    let inputBox = document.getElementById("sentence");

    inputBox.addEventListener("change", (e) => {
    

    console.log(e.target.value);

    if(counter<5)
        {
            add(e.target.value);
            counter++;
        }

    inputBox.value = "";

    });

});



