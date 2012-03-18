var mySpeed;
var constant_velocity = 10;
var top_speed = 10;
var start_speed = 50;
var myGrav = 5;
var speed_increase_factor : float = 1;
var coinsCollected:int = 0;
var health : float = 10;

function Start(){
	//transform.velocity = Vector3(0,0,0);
}
function Update () {

	//increasing the speed - just adding time to topspeed multiplied by factor
	top_speed = start_speed + (Time.timeSinceLevelLoad* speed_increase_factor);

	var p1_control : CharacterController  = GetComponent(CharacterController);
	
	mySpeed = Vector3(top_speed,p1_control.velocity.y,0);
	
	p1_control.SimpleMove( mySpeed+ Vector3(constant_velocity,0,0));
	
		//transform.rotation = Quaternion.identity;

 //CheckCollide();
}

function CheckCollide() {
	    var forward : Vector3 = transform.TransformDirection(-Vector3.up) * 10;
      var rayHit : RaycastHit;
	 Debug.DrawRay(transform.position, forward, Color.green);
	   if (Physics.Raycast (transform.position, -Vector3.up, rayHit, 8)) {
       // Debug.Log("Hit something");
       
    var hitRotation = Quaternion.FromToRotation(Vector3.up, rayHit.normal);
    //print(hit.transform.name);
transform.rotation = hitRotation;
    }
	
    
}

function OnControllerColliderHit (hit : ControllerColliderHit) {
	if(hit.gameObject.tag == "enemy"){
	//print("OW");
	hit.gameObject.SendMessage("playerDamage");//we were hit by the ememy, it will so damage to us
	//Destroy(hit.gameObject);
	
}

if(hit.gameObject.tag == "coin"){
		hit.gameObject.SendMessage("collectCoin");
		collectCoin();
	}
}	

function collectCoin() {
	coinsCollected++;
	
	print("Coins collected = " + coinsCollected);
}

function ApplyDamage (damage : float) {

	health--;
	
	if (health <= 0)
	{
		Invoke("Explode",0);
	}

}

function Explode(){
//gameoverman	
	constant_velocity = 0;
}