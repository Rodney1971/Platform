// vector2.js

var Vector2 = function() {		// Construct Vector2 and set to origin (0,0)
	this.x = 0;
	this.y = 0;
};



Vector2.prototype.update = function(normalize)
{
	if( typeof(this.x) == "undefined" || typeof(this.x) == "undefined")	
	{
		this.x = 0;		// Initialize to (0,0) if either were undefined.
		this.y = 0;
	}

	// 'normalize' the direction (the hypotenuse of the triangle formed
	// by x,y will equal 1)
	var magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
	if (magnitude != 0)
		{
		this.x /= magnitude;
		this.x /= magnitude;
		}
}
