// bullet.js
var BULLET_SPEED = 120;

var Bullet = function() {
	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.width = 32;
	this.height = 32;
	this.xVel = 0;
	this.yVel = 0;
	this.rotation = 0;
	this.image.src = "bullet.png";
};

Bullet.prototype.update = function(deltaTime)
{
	if( typeof(this.xVel) == "undefined" || typeof(this.xVel) == "undefined")	
	{
		this.xVel = 0;		// Initialize to zero velocity if either were undefined.
		this.yVel = 0;	
	}	
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.xVel = -BULLET_SPEED;
	}
	else
	{
		if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
		{
			this.xVel = BULLET_SPEED;
		}
		else
		{
			this.xVel = 0;
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.yVel = -BULLET_SPEED;
	}
	else
	{	
		if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
		{
			this.yVel = BULLET_SPEED;
		}
		else
		{
			this.yVel = 0;
		}
	}
		
	// update  the bullet.
		this.x += this.xVel * deltaTime;
		this.y += this.yVel * deltaTime;
		
	/*
	// update all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].x += bullets[i].velocityX * deltaTime;
		bullets[i].y += bullets[i].velocityY * deltaTime;
	}
	*/
	}

Bullet.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

