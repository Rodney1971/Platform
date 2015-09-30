// player.js
var PLAYER_SPEED = 120
var PLAYER_ROTATION_ACCEL = 0.2
var PLAYER_ROTATION_DECAY_FACTOR = 0.95
var Player = function() {
	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.rotation = 0;
	this.width = 159;
	this.height = 163;
	this.xVel = 0;
	this.yVel = 0;
	this.angleVel = 0;
	
	this.image.src = "hero.png";
};

Player.prototype.update = function(deltaTime)
{
if( typeof(this.xVel) == "undefined" || typeof(this.xVel) == "undefined")	
	{
		this.xVel = 0;		// Initialize to zero velocity if either were undefined.
		this.yVel = 0;	
	}	
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.xVel = -PLAYER_SPEED;
	}
	else
	{
		if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
		{
			this.xVel = PLAYER_SPEED;
		}
		else
		{
			this.xVel = 0;
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.yVel = -PLAYER_SPEED;
	}
	else
	{	
		if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
		{
			this.yVel = PLAYER_SPEED;
		}
		else
		{
			this.yVel = 0;
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_A) == true)
	{
		this.angleVel -= PLAYER_ROTATION_ACCEL;
	}
	else
	{
		if(keyboard.isKeyDown(keyboard.KEY_S) == true)
		{
			this.angleVel += PLAYER_ROTATION_ACCEL;
		}
		else
		{
			this.angleVel *= PLAYER_ROTATION_DECAY_FACTOR;
		}
	}
	
	// update the player.
		this.x += this.xVel * deltaTime;
		this.y += this.yVel * deltaTime;
		this.rotation += this.angleVel * deltaTime;
	
/*	OLD DEMO CODE.
	if( typeof(this.rotation) == "undefined" )
		this.rotation = 0; 			          
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation -= deltaTime;
	}
	else
	{
		this.rotation += deltaTime;
	}
*/


}

Player.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

