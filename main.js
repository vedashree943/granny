var canvas=new fabric.Canvas("myCanvas");
p_x=10;
p_y=10;
block_width=30;
block_height=30;
var po="";
var b_image="";
function pu() {
    fabric.Image.fromURL("player.png",function (Img){
        po=Img;
        po.scaleToWidth(150);
        po.scaleToHeight(140);
        po.set({
            top:p_y, left:p_x

        });
        canvas.add(po);
    });

    
}
function ni(get_image) {
    fabric.Image.fromURL(get_image,function (Img){
        b_image=Img;
        b_image.scaleToWidth(block_width);
        b_image.scaleToHeight(block_height);
        b_image.set({
            top:p_y, left:p_x

        });
        canvas.add(b_image);
    });
    
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80') {
        console.log("shift and p are pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
        }
        if (e.shiftKey==true && keypressed=='77') {
            console.log("shift and m are pressed together");
            block_height=block_height-10;
            block_width=block_width-10;
            document.getElementById("Current_width").innerHTML=block_width;
            document.getElementById("Current_height").innerHTML=block_height;
            }
    if (keypressed=='38'){
        up();
        
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='66'){
        ni("b.png");
        console.log("b");
    }
    if (keypressed=='76'){
        ni("lake.png");
        console.log("l");
    }
    if (keypressed=='71'){
        ni("grass.png");
        console.log("g");
    }
    if (keypressed=='87'){
        ni("wc.png");
        console.log("w");
    }
    if (keypressed=='67'){
        ni("bc.png");
        console.log("c");
    }
    if (keypressed=='70'){
        ni("f.png");
        console.log("f");
    }
    if (keypressed=='86'){
        ni("verrec.png");
        console.log("v");
    }
    if (keypressed=='82'){
        ni("rec.png");
        console.log("r");
    }
    if (keypressed=='84'){
        ni("tri.png");
        console.log("t");
    }

}
function up(){
    if (p_y >=0){
        p_y=p_y-block_height;
        console.log("when up arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image height = "+ block_height);
    canvas.remove(po);
    pu();
    
    
    }
}
function down(){
    if (p_y <=500){
        p_y=p_y+block_height;
        console.log("when down arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image height = "+ block_height);
        canvas.remove(po);
        pu();

    
    }
}
function left(){
    if (p_x >=0){
        p_x=p_x-block_width;

        console.log("when left arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image width = "+ block_width);
        canvas.remove(po);
        pu();
    }
}
function right(){
    if (p_x <=700){
        p_x=p_x+block_width;
        console.log("when right arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image width = "+ block_width);
        canvas.remove(po);
        pu();
        
    
    }
}
