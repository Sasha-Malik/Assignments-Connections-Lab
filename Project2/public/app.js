let socket = io();

socket.on('connect', function() {
    console.log("Connected");
  });

window.addEventListener('load', ()=>{

    let btn = document.querySelector(".btn");
    console.log(btn);

    if(btn != null)
    {
        btn.addEventListener("click",()=>{

            let textVal = document.getElementById("textVal")
            let courseWindow = document.querySelector('.courseContainer');
            courseWindow.style.display = "none";
            //console.log(textVal.value);

            let commentObj = {
            "msg" : textVal.value,
            "updateAt" : new Date()
            };

            let commentObjJSON = JSON.stringify(commentObj);
            socket.emit('data',commentObjJSON);

        });
    }
  

});
 