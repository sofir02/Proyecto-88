
canvas= new fabric.Canvas ('myCanvas');
var ball_x= 0;
var ball_y= 0;
var hoyo_x= 800;
var hoyo_y= 400;



block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(Img){
		hoyo_obj= Img;
		hoyo_obj.scaleToWidth(50);
		hoyo_obj.scaleToHeight(50);
		hoyo_obj.set ({
			top: hoyo_y,
			left: hoyo_x
		});

		canvas.add(hoyo_obj);

	});

	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function(Img){
		ball_obj= Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set ({
			top: ball_y,
			left: ball_x
		});

		canvas.add(ball_obj);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hoyo_x)&&(ball_y==hoyo_y)){
		console.log ("FELICIDADES!!");
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="GENIAL!!";
		document.getElementById("myCanvas").style.borderColor="blue";

	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >= 5){
		   ball_y = ball_y - block_image_height;
		   console.log ("alto del Bloque= " , block_image_height);
		   console.log("cuando la flecha de arriba sea presionada, x= " + ball_x + ", y= " + ball_y);
		   canvas.remove(ball_obj);
		   new_image();
		}
	}

	function down()
	{
		if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			console.log ("alto del Bloque= " , block_image_height);
			console.log("cuando la flecha de abajo sea presionada, x= " + ball_x + ", y= " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5){
				ball_x = ball_x - block_image_width;
				console.log ("ancho del Bloque= " , block_image_width);
				console.log("cuando la flecha de la izquierda sea presionada, x= " + ball_x + ", y= " + ball_y);
				canvas.remove(ball_obj);
				new_image();
			
			 }
		}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
				console.log ("ancho del Bloque= " , block_image_width);
				console.log("cuando la flecha de la derecha sea presionada, x= " + ball_x + ", y= " + ball_y);
				canvas.remove(ball_obj);
				new_image();
			
		}
	}
	
}

