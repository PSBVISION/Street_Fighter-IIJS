const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};


window.onload = function() {
    const canvasEl = document.querySelector("canvas");
    const context = canvasEl.getContext("2d");


    canvasEl.width =GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;


    context.strokeStyle = "yellow";
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    


    console.log(context);
};