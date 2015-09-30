// vector2.js

var Vector2 = function() {		// Construct Vector2 and set to origin (0,0)
	this.x = 0;
	this.y = 0;
};

Vector2.prototype.set = function(xVal,yVal)
{
	if( typeof(this.xVal) == "undefined" || typeof(this.yVal) == "undefined")	
	{
		this.x = 0;		// Initialize to (0,0) if either parameters were undefined.
		this.y = 0;
	}
	else
	{
		this.x = xVal;
		this.y = yVal;
	}
}

Vector2.prototype.normalize = function()
{
	if( typeof(this.x) == "undefined" || typeof(this.x) == "undefined")	
	{
		this.x = 0;		// Initialize to (0,0) if either were undefined.
		this.y = 0;
	}

	// 'normalize' the direction
	// ie. the hypotenuse of the triangle formed by x,y will equal 1
	var magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
	if (magnitude != 0)
		{
		this.x /= magnitude;
		this.x /= magnitude;
		return this;		// return the vector as well as modifying it.
		}
}

Vector2.prototype.add = function(vectorToAdd)
{	if( typeof(vectorToAdd.x) == "undefined" || typeof(vectorToAdd.x) == "undefined")	
	{
		vectorToAdd.x = 0;		// Initialize to (0,0) if either were undefined.
		vectorToAdd.y = 0;
	}
	// Add x,y components together, modifying calling object and return vector.
	this.x += vectorToAdd.x;
	this.y += vectorToAdd.y;
	return this;		// return the vector as well as modifying it.
}

Vector2.prototype.subtract = function(vectorToTake)
{	if( typeof(vectorToTake.x) == "undefined" || typeof(vectorToTake.x) == "undefined")	
	{
		vectorToTake.x = 0;		// Initialize to (0,0) if either were undefined.
		vectorToTake.y = 0;
	}
	// Subtract vectorToTake from calling object, modify calling object and return vector.
	this.x -= vectorToTake.x;
	this.y -= vectorToTake.y;
	return this;		// return the vector as well as modifying it.
}

Vector2.prototype.multiplyScalar = function(scaleFactor)
{	if(typeof(scaleFactor) == "undefined") scaleFactor = 1;	// Don't scale if scaleFactor undefined . 
	// Multiply x,y components by scaleFactor, modify the calling object and return vector.
	this.x *= scaleFactor.x;
	this.y *= scaleFactor.y;
	return this;		// return the vector as well as modifying it.
}






