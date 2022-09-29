
function setup() {

    const myCanvas = createCanvas(1430,800, WEBGL);
	myCanvas.parent("canvas-container");
	
  }
  
  function draw() {
	background('#000000');
	//orbitControl();
  
  
	rotateZ(frameCount * 0.01);
	  rotateY(frameCount * 0.01);
	 rotateX(frameCount * 0.01);
	  
	  
	sphere(40);
	
	translate(0,150,0);
	sphere(40);
  
	translate(100, -50 ,0);
	sphere(40);
	
	
	translate(50, -100 ,0);
	sphere(40);
	
	
	
	translate(-50, -100 ,0);
	sphere(40);
	
	
	translate(-100, -50 ,0);
	sphere(40);
	
	
	translate(-100, 50 ,0);
	sphere(40);
	
	  
	translate(-50, 100 ,0);
	sphere(40);
	
	
	translate(50, 100 ,0);
	sphere(40);
  
  }