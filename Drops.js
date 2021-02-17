class Drops {
    constructor(x, y) {
        
    }

    var maxDrops=100;
    
    for(var i=0; i<maxDrops; i++) {
        Drops.push(new createDrop(random(0, 400), (random(0, 400))));
    }
    this.x = x;
    this.y = y;
    this.circle = circle;
}