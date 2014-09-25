document.addEventListener('DOMContentLoaded', domloaded, false);

function domloaded(){

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    painting = false,
    lastX = 0,
    lastY = 0,
    lineThickness = 5;
	penColour = '#000000';
	
var penType = 1;
	
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight - 160;
ctx.fillStyle = "rgba(25,25,25,0)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mousemove', mouseMove, false);
canvas.addEventListener('touchstart', mouseDown, false);
canvas.addEventListener('touchmove', mouseMove, false);



canvas.addEventListener('mouseup', mouseUp, false);
canvas.addEventListener('touchend', mouseUp, false);


ptPen.onclick = function(e){
	penType = 1;
	penColour = "#000000";
	lineThickness = 5 ;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.globalCompositeOperation = 'source-over';
}


//////////    PEN COLOURS - duplicate function and match ID and HexColor to the new line in the HTMLtable  ///////////////////////

black.onclick = function(e){
	penColour = "#000000";
}

red.onclick = function(e){
	penColour = "#FF0011";
}

blue.onclick = function(e){
	penColour = "#0099FF";
}

green.onclick = function(e){
	penColour = "#00FF11";
}

/*newColorId.onclick = function(e){
	penColour = "newColorHEXCode";
}
*/


	

ptClearAll.onclick = function(e) {
ctx.clearRect(0,0,canvas.width,canvas.height);
$('#content').getHighlighter().removeHighlights();
};




updateThickness = function() {

document.getElementById("penWidth").innerHTML = "lineThickness = " + lineThickness;

}





function mouseDown(e)
{
	painting = true;
	ctx.fillStyle = penColour;
    lastX = e.pageX - this.offsetLeft;
    lastY = e.pageY - this.offsetTop;
	console.log('reu')

}

function mouseUp(e)

{ 
	painting = false;
}

function mouseMove(e)

{
e.preventDefault();

if (penType ==1){
	console.log("PENTOOL");
	$('#content').css('z-index',0);

	
    if (painting) {
		
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;

        // find all points between        
        var x1 = mouseX,
            x2 = lastX,
            y1 = mouseY,
            y2 = lastY;


        var steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
        if (steep){
            var x = x1;
            x1 = y1;
            y1 = x;

            var y = y2;
            y2 = x2;
            x2 = y;
        }
        if (x1 > x2) {
            var x = x1;
            x1 = x2;
            x2 = x;

            var y = y1;
            y1 = y2;
            y2 = y;
        }

        var dx = x2 - x1,
            dy = Math.abs(y2 - y1),
            error = 0,
            de = dy / dx,
            yStep = -1,
            y = y1;
        
        if (y1 < y2) {
            yStep = 1;
        }
       
        //lineThickness = 5 - Math.sqrt((x2 - x1) *(x2-x1) + (y2 - y1) * (y2-y1))/10;
        if(lineThickness < 1){
            lineThickness = 1;   
        }

        for (var x = x1; x < x2; x++) {
            if (steep) {
                ctx.fillRect(y, x, lineThickness , lineThickness );
            } else {
                ctx.fillRect(x, y, lineThickness , lineThickness );
            }
            
            error += de;
            if (error >= 0.5) {
                y += yStep;
                error -= 1.0;
            }
        }

		


        lastX = mouseX;
        lastY = mouseY;

		
    }
	}
	
	

}







}