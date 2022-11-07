let socket = io();

socket.on('connect', function() {
    console.log("Connected");
  });

window.addEventListener('load', ()=>{


    let courseName = "";

    socket.on( 'sdata' , (data)=> {
        addMessage(data.comment);
    });


    fetch('/courses')
    .then(res => res.json())
    .then(data => {

  
        let container = document.querySelector(".courseWindow");

        data.courseArray.forEach(e =>{

            let child = document.createElement('button');
            child.classList.add("course");
            child.innerHTML = e;
            
            child.addEventListener('click', ()=>{

                courseName = child.innerHTML;
                showComments(courseName);

            });

            container.appendChild(child);

        });

    });

    let form = document.getElementById("form");
    form.addEventListener('submit', handleForm);

    let formComment = document.getElementById("formComment");
    formComment.addEventListener('submit', handleForm);

    function handleForm(event) { event.preventDefault(); } 


    let btn = document.querySelector(".btn");

        btn.addEventListener("click",()=>{

            let textVal = document.getElementById("textVal")
            courseName = textVal.value;

            showComments(courseName);

        });
    

    let button = document.querySelector('.btnComment');
    button.addEventListener('click',()=>{

            let text = document.getElementById("textValComment");

            if(text.value != "")
            { 
                let commentObj = {
                "courseName" : courseName,
                "comment" : text.value,
                "updateAt" : new Date()
                };
              
                socket.emit('data',commentObj);

            }
           
    });


    let pollsubmit = document.querySelector('.pollsubmitbtn');
    pollsubmit.addEventListener('click',()=> {

        let wpoll = document.getElementById("workload").value;
        let gpoll = document.getElementById("grading").value;
        let epoll = document.getElementById("exams").value;
        let cpoll = document.getElementById("content").value;
        let ppoll = document.getElementById("professor").value;

        let pollObj = {
            "courseName" : courseName,
            "polldata" : [wpoll,gpoll,epoll,cpoll,ppoll],
            "updateAt" : new Date()
            };

        let pollobjJSON = JSON.stringify(pollObj);
        socket.emit('poll',pollObj);

        console.log(pollobjJSON);
    })
  

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

function showComments(courseName){

            removeMessages();

            let courseWindow = document.querySelector('.courseContainer');
            courseWindow.style.display = "none";

            let eachContainer = document.querySelector('.eachContainer');
            eachContainer.style.display = "flex";


            let courseHeading = document.querySelector('.courseHeading');
            courseHeading.innerHTML = courseName;

    
            let url = "/comments?selectedCourse="+courseName;
            

            fetch(url)
            .then(res => res.json())
            .then(data =>{

                let arr = data.comments;
                //console.log(arr);
                arr.forEach(e => {
                    addMessage(e.comment);    
                });

            })


            let url2 = "/polls?selectedCourse="+courseName;
            fetch(url2)
            .then(res => res.json())
            .then(data =>{

                
                let arr = data.poll; // Gets all the poll for the courses
                let t_wpoll = 0;     // Total Workload
                let t_gpoll = 0;     // Total Grading
                let t_epoll = 0;     // Total Exams
                let t_cpoll = 0;     // Total Content
                let t_ppoll = 0;     // Total professor     
                let totaluserpoll = 0;
                

                let a_wpoll = 0;     // Average Workload
                let a_gpoll = 0;     // Average Grading
                let a_epoll = 0;     // Average Exams
                let a_cpoll = 0;     // Average Content
                let a_ppoll = 0;     // Average Professor

                //console.log(arr);

                arr.forEach(e => {
                   t_wpoll += parseInt(e.polldata[0]);
                   t_gpoll += parseInt(e.polldata[1]);
                   t_epoll += parseInt(e.polldata[2]);
                   t_cpoll += parseInt(e.polldata[3]);
                   t_ppoll += parseInt(e.polldata[4]);
                   totaluserpoll++;
                });

                a_wpoll = t_wpoll/totaluserpoll;
                a_gpoll = t_gpoll/totaluserpoll;
                a_epoll = t_epoll/totaluserpoll;
                a_cpoll = t_cpoll/totaluserpoll;
                a_ppoll = t_ppoll/totaluserpoll;

                /*console.log("Average Workload :" +a_wpoll);
                console.log("Average Grading :" +a_gpoll);
                console.log("Average Exams:" +a_epoll);
                console.log("Average Content :" +a_cpoll);
                console.log("Average Professor :" +a_ppoll);*/

            })
}