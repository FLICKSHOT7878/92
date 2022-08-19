var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_heigth);
        block_image_object.set({
           left:0,
           top:0
        });
        canvas.add(block_image_object);
    });
}

function playSound()
{
x.play();
}
