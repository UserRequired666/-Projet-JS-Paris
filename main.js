function gameLoop(){

    //update game
    updateGameState();
    
    //draw game
    drawGameGraphics();
    
    //repeat loop
    requestAnimationFrame(gameLoop);
    
    }
    function updateGameState(){
        //udate game state logic
    }
    function drawGameGraphics(){
        // draw game graphics logic
    }
    //start game loop
    requestAnimationFrame(gameLoop);