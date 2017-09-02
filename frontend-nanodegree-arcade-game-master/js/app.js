var score=0;
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=this.getspeed();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.getspeed=function()
{
  return Math.floor(Math.random()*(300)+100);
}
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x += this.speed * dt;

    } else {
        this.x = -100;
        this.speed = this.getspeed();
    }
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Player=function(x,y)
{
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((this.y + 65 > allEnemies[i].y) && (this.y < allEnemies[i].y + 65) && (this.x < allEnemies[i].x + 65) && (this.x + 65 > allEnemies[i].x)) {
            this.reset();
            alert("OUCH!! The Game is Over And Your Score is:" + " " + score)
            score = 0;
            document.getElementById("score").innerHTML = score;
        }
    }
};
Player.prototype.reset = function(){
  this.x=200;
  this.y=450;
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
    if (key == 'up') {
        if (this.y > 40)
            this.y -= 80;
        else {
            this.reset();
            score++;
            document.getElementById("score").innerHTML = score;
        }
    } else if (key == 'down') {
        if (this.y < 450) {
            this.y += 80;
        } else {
            this.reset();
        }
    } else if (key == 'left') {
        if (this.x > 0)
            this.x -= 100;
    } else if (key == 'right') {
        if (this.x < 400)
            this.x += 100;
    }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies=[
  new Enemy(0,45),
  new Enemy(0,65),
  new Enemy(0,135),
  new Enemy(0,215),
]
var player = new Player(200,450);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
