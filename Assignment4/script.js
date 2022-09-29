
function addResponse( textValue ){

	let parent = document.querySelector('#quiz');
	const newlabel = document. createElement('label');
	let input = document.createElement("input");
	
	input.setAttribute ("type","radio" );
	newlabel.appendChild(input);
	let text = document.createTextNode(textValue);
	newlabel.append(text);
	
	parent.appendChild(newlabel);
	
	var newElem = document.createElement("BR");
	parent.appendChild(newElem);
}

function addResponse2( textValue ){

	let parent = document.querySelector('#quiz2');
	const newlabel = document. createElement('label');
	let input = document.createElement("input");
	
	input.setAttribute ("type","radio" );
	newlabel.appendChild(input);
	let text = document.createTextNode(textValue);
	newlabel.append(text);
	
	parent.appendChild(newlabel);
	
	var newElem = document.createElement("BR");
	parent.appendChild(newElem);
}



window.addEventListener('load', function() {
	fetch('responses.json')
	.then((response) => response.json())
	.then((data) => {

		//console.log(data.responses);

		for (let index = 0; index < 90; index++)
		{
			addResponse(data.responses[index]);
			addResponse2(data.responses[index]);
			
		}	
		
	});
})


let check = 0;

let check1 = 0;
let check2 = 0;

let checkBreak = 0;

let person1 = "null";
let person2 = "null";

let button = document.querySelector(".submit");
button.addEventListener('click', ()=>{

	let result = document.querySelector('.resultCont');
	let textResults = document.createElement('div');
	person1 = personalities[Math.floor(Math.random() * 16)];
	textResults.innerHTML = person1;
	result.appendChild(textResults);
		check1 = 1;
});



let button2 = document.querySelector(".submit2");
button2.addEventListener('click', ()=>{

	let result = document.querySelector('.resultCont');
	let textResults = document.createElement('div');
	person2 = personalities[Math.floor(Math.random() * 16)];
	textResults.innerHTML = person2;
	result.appendChild(textResults);
	check2 = 1;

	if(check1 == 1 && check2 == 1 )
	{
		let count1 = 0;
		

		for(let i = 0 ; i < hightCompatibility1.length ; i++)
		{
			if(person1 == hightCompatibility1[i] || person2 == hightCompatibility1[i])
			count1++;

			else if(person1 == hightCompatibility1[i] && person2 == hightCompatibility1[i])
			coun1+=2;
		}

		if(count1 >= 2 && checkBreak!= -1)
		{
			 checkBreak = -1;
			check = 2;
			let comp = document.querySelector('.compatibility');
			let x = document.createElement('div');
			x.setAttribute('class','comp');
			x.innerHTML ="High Compatibility!";
			comp.appendChild(x);
		}

		else if(checkBreak!= -1)
		{
			check = 1;
			checkBreak = -1;
			let comp = document.querySelector('.compatibility');
			let x = document.createElement('div');
			x.setAttribute('class','comp');
			x.innerHTML ="Moderate Compatibility!";
			comp.appendChild(x);
		}
		
	}

});



 
let personalities = ["ESTJ" , "ENTJ", "ESFJ", "ENFJ", "ISTJ", "ISFJ", "INTJ", "INFJ", "ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INTP" , "INFP"];
let hightCompatibility1 = ["ISTJ", "ESTJ", "ISFJ", "ESFJ" , "INFP", "ENFP", "INFJ", "ENFJ", "ESTP", "INTP" ];


//sketch


function setup() {

    const myCanvas = createCanvas(1430,800, WEBGL);
	myCanvas.parent("canvas-container");
	
  }
  
  function draw() {

	background('#000000');


  
	if(check == 2)
	{
		//orbitControl();
		translate(0,-50,0);
	  
		rotateZ(frameCount * 0.015);
		rotateY(frameCount * 0.015);
		rotateX(frameCount * 0.015);
		
		sphere(70);
		
		translate(100,100,100);  
		sphere(70);
	}

	else if(check == 1)
	{
		translate(0,-150,0);
	  
		rotateZ(frameCount * 0.015);
		rotateY(frameCount * 0.015);
		rotateX(frameCount * 0.015);
		
		sphere(70);
		
		translate(100,250,100);  
		sphere(70);
	}

	else
	{
	rotateZ(frameCount * 0.01);
	  rotateY(frameCount * 0.01);
	 rotateX(frameCount * 0.01);
	  
	  
	sphere(50);
	
	translate(0,150,0);
	sphere(50);
  
	translate(100, -50 ,0);
	sphere(50);
	
	
	translate(50, -100 ,0);
	sphere(50);
	
	
	
	translate(-50, -100 ,0);
	sphere(50);
	
	
	translate(-100, -50 ,0);
	sphere(50);
	
	
	translate(-100, 50 ,0);
	sphere(50);
	
	  
	translate(-50, 100 ,0);
	sphere(50);
	
	
	translate(50, 100 ,0);
	sphere(50);


	}
  
  }

  