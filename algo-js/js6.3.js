class Rectangle{  // class rectangle ( 4 arguments )
    constructor(topLeftXPos ,topLeftYPos , width ,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){
        if( this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos  + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos){
                return true;
            } else {
                return false;
            }
    }
}
    function randomXPos(){  // random Xpos ( max 1000)
        return Math.floor(Math.random() * (500 - 0) + 0);
    }
    function randomYPos(){ // random Ypos ( MAX 1000)
        return Math.floor(Math.random() * (500 - 0) + 0);
    }
    function randomWidth(){ //random Width ( Max 300)
        return Math.floor(Math.random() * (10 - 0) + 0);
    }
    function randomLength(){ //random length (Max 500)
       return Math.floor(Math.random() * (10 - 0) + 0);
    }

    let ArrayRect = [];
    let Collided = 0;
    ;
    
    
    
        for(let i=0; i <= 1000 ;i++){ // Boucle pour crée les 1000 rectangles 
            ArrayRect.push(new Rectangle(randomXPos(), randomYPos(), randomWidth(), randomLength()));
                        }
    

        for(let i = 1; i <= 1000; i++){
            let ArrayCollide = [];
        for (let j = 1; j <= 1000; j++) {
            if (i != j && ArrayRect[i].collides(ArrayRect[j])) {
                ArrayCollide.push(j);
        } 
    }
    console.log("rectangle " + i + " collided with " + JSON.stringify(ArrayCollide));
}
       

       
  
  
