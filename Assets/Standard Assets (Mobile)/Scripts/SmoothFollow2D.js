var target : Transform;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var velocity : Vector2;

public var xOffset : float;
public var yOffset : float;

function Start()
{
	thisTransform = transform;
}

function Update() 
{
	
	
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
		target.position.x + xOffset, velocity.x, smoothTime);
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		target.position.y + yOffset, velocity.y, smoothTime);
}