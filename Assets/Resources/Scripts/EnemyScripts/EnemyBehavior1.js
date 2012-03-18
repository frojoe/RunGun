

//Basic enemy behavior script
//Goals: keep up with the player?  i guess
//Play some animations
//Launch some rockets
//take damage


var health : int = 1;//maybe develop a case structure for different enimies.

var target : GameObject;
private var velocity : Vector2;
var smoothTime = 0.3;
var thisTransform;


//Animation Stuff
var ArriveAnim : AnimationClip;
var HoverAnim : AnimationClip;
var AttackAnim : AnimationClip;
var ExitAnim : AnimationClip;
var orginalPosition : Vector3;
var canAttack : boolean = false;
var AttackInterval : float = 1;
var SpawnOffset : Vector3 = Vector3(0,10,10);




function Start(){
target = gameObject.FindWithTag("Player");
	thisTransform = transform;
orginalPosition = (this.transform.position - target.transform.position - Vector3(Random.Range(0,10),Random.Range(-10,10),0));

this.transform.position= transform.position + SpawnOffset;//move to the camera position

}//start


function hover(){
//animation.CrossFade(ArriveAnim);

	if(canAttack){
	yield WaitForSeconds(AttackInterval);
	attack();
	}

}

function attack(){
//animation.Play(AttackAnim);
//Some more stuff
}

function Update () {
	
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
		target.transform.position.x + orginalPosition.x, velocity.x, smoothTime);
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		target.transform.position.y + orginalPosition.y, velocity.y, smoothTime);
	thisTransform.position.z = 0;
}//update


function takeDamage(){
//instantiate some particle effects
health = health - 1;
	if(health<=0){
	die();
	}
}//takeDamage


function die(){

//Send message about score

//instantiate a death prefab or animation and/or effects

Destroy(gameObject);
}//die