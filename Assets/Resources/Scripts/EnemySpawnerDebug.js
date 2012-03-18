var enemy : GameObject;

var spawnRateMax = 1;
var spawnRate = 5;
var spawnRateBase : float = 5;
var spawnRateIncreaseRate = 1;
var spawnRateIncreaseFactor : float = .1;
var target : GameObject;
private var velocity : Vector2;
var smoothTime = 0.3;
var thisTransform;
var orginalPosition : Vector3;
var storedModulo :float = 0;
function Start(){
target = gameObject.FindWithTag("Player");
	thisTransform = transform;
orginalPosition = this.transform.position - target.transform.position;

}





function Update () {
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
		target.transform.position.x + orginalPosition.x, velocity.x, smoothTime);
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		target.transform.position.y + orginalPosition.y, velocity.y, smoothTime);
	
	  if (Input.GetKeyDown (KeyCode.P)){
        spawnRate -= 1;
	  }
	  
	  if (spawnRate < spawnRateMax) {spawnRate = spawnRateMax;}
	 
	   if (Input.GetKeyDown (KeyCode.Space)){
    //    print ("space key was pressed");
        Instantiate(enemy,transform.position,transform.rotation);
	  }
	    
	   // print (storedModulo);
	    
	  if ( storedModulo > ( Time.timeSinceLevelLoad % spawnRate) )
	  {
	  	  	Instantiate(enemy,transform.position,transform.rotation);
	  }
	    
	  
	  storedModulo = ( Time.timeSinceLevelLoad % spawnRate);
	
	  
}
