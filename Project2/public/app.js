let socket = io();

socket.on('connect', function() {
    console.log("Connected");
  });

window.addEventListener('load', ()=>{


    let courseName = "";

    let btn = document.querySelector(".btn");

        btn.addEventListener("click",()=>{

            removeMessages();

            let textVal = document.getElementById("textVal")
            let courseWindow = document.querySelector('.courseContainer');
            courseWindow.style.display = "none";

            let eachContainer = document.querySelector('.eachContainer');
            eachContainer.style.display = "flex";

            courseName = textVal.value;

            let courseHeading = document.querySelector('.courseHeading');
            courseHeading.innerHTML = courseName;
    
            let url = "/comments?selectedCourse="+courseName;

            fetch(url)
            .then(res => res.json())
            .then(data =>{

                let arr = data.comments;
                arr.forEach(e => {
                    //console.log(e.comment);  
                    addMessage(e.comment);    
                });

            })

            /*let commentObj = {
            "msg" : textVal.value,
            "updateAt" : new Date()
            };

            let commentObjJSON = JSON.stringify(commentObj);
            socket.emit('data',commentObjJSON);*/

        });
    

    let button = document.querySelector('.btnComment');
    button.addEventListener('click',()=>{

        let text = document.getElementById("textValComment");
        addMessage(text.value);

        let commentObj = {
            "courseName" : courseName,
            "comment" : text.value,
            "updateAt" : new Date()
            };

            let commentObjJSON = JSON.stringify(commentObj);
            socket.emit('data',commentObj);

    });
  

});
 
function addMessage( message){

    let elem = document.createElement('div');
        elem.innerHTML = message;
        elem.classList.add('comment');

        let container = document.querySelector('.commentContainer');
        container.appendChild(elem);
}

function removeMessages(){

    let container = document.querySelector('.commentContainer');
    let child = container.lastElementChild;

    while(child)
    {
        container.removeChild(child);
        child = container.lastElementChild;
    }

}