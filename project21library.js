function IsTouchinga(bullet,wall){
    if(wall.x - bullet.x <= wall.width/2 + bullet.width/2 && bullet.x - wall.x <= wall.width/2 + bullet.width/2){
        return true;
    }
    else{
        return false;
    }
}