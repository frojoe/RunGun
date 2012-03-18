//Homing missle script 
//by Widget for PyroCat Games
//cc last change: 7/16/11, 

var explosion : GameObject;


var target : Transform;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var velocity : Vector2;
var orginalPosition : Vector3;

var Player; // can we assume the player will be in the same position, will it matter?

var fireTime = 10;//i have no idea how this works yet.  this is for missle speed
var speed : float = 2;
var health : int = 2;

//var explosion prefab

function Start(){
		thisTransform = transform;

	Player = GameObject.FindWithTag("Player");	// see "player" above^

	target = Player.transform;	

	orginalPosition = this.transform.position - target.transform.position;

}


function Update () {
	
if(thisTransform.position.x <= target.position.x){
	thisTransform.position.x = target.position.x;
	smoothTime = 0.2;
}	
	
thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
		target.position.x, velocity.x, smoothTime);
		
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		target.position.y, velocity.y, smoothTime);
		
		
		transform.LookAt(Player.transform); // this should probably lerp a bit too.
		
transform.Translate(Vector3.forward*speed*Time.deltaTime);
//transform.position = Vector3.Lerp(transform.position, Player.transform.position, (Time.time)/1000); //come to think of it, shouldn't the missle also have an "" animation"?  not sure how to implement if player can move around.
//also, rigid body + force can have a nice effect, though physics are expensive and would be harder to target.

}




//conditions: 
//1. hit player (lose all hp)
//2. hit player projectile (lose x hp)
//3. end of screen, dissappear , cleanup (dissapear),,(not sure if different.
function OnCollisionEnter(object : Collision){
if(object.gameObject.tag == "Player"){
	print("HIT");
}	
}
function ApplyDamage (damage : float) {

	health--;
	
	if (health <= 0)
	{
		Invoke("Explode",0);
	}

}

function playerDamage(){
	//print("BATARANG");
	Player.SendMessage("ApplyDamage",1.0);
	Invoke("Explode",0);
}
function Explode(){
	
Instantiate(explosion, transform.position, transform.rotation);
  Disappear();
	
}

function Disappear(){
//oop is a mysterious beast
	Destroy(gameObject);
}