


var explosion : GameObject;

//pick a "path" animation
//control animation speed.
var wedge : GameObject;
//var refPlane : GameObject;
var fireRate = 0.5;
private var nextFire = 0.0;
var AnimSpeed : float = 1.0;

var canFire = true; //maybe change this to be more controllable.  ammo, fire times, timed triggers, etc

var GunPos : Transform;
var projectile : GameObject;

var health : int = 1;//maybe develop a case structure for different enimies.

var target : GameObject;
private var velocity : Vector2;
var smoothTime = 0.3;
var thisTransform;

var orginalPosition : Vector3;

var canAttack : boolean = false;
var AttackInterval : float = 1;
var SpawnOffset : Vector3 = Vector3(0,10,10);



function Start () {
	//health = 1;
	//refPlane = GameObject.Find("RefPlane");
//require animation?
//animation[animation.name].speed = AnimSpeed;
animation.playAutomatically = true;


target = gameObject.FindWithTag("Player");
	thisTransform = transform;
orginalPosition = (this.transform.position - target.transform.position - Vector3(Random.Range(0,10),Random.Range(-10,10),0));


}



function hover(){
//animation.CrossFade(ArriveAnim);

	if(canAttack){
	yield WaitForSeconds(AttackInterval);
	//attack();
	}

}

function Update () {
	thisTransform.position.z = 0;
FireGun();
}

function ApplyDamage (damage : float) {

	health = health - damage;
	
	if (health <= 0)
	{
		Invoke("Die",0);
	}

}

function Die(){
	
	if(wedge){
	Instantiate(wedge, transform.position, transform.rotation);
	wedge.rigidbody.velocity.y = -100;
	wedge.rigidbody.AddForce (Vector3(20,20,0) * -10);

	}

	Instantiate(explosion, transform.position, transform.rotation);
	Destroy(gameObject);
	
}


function FireGun (){

	if (canFire && Time.time > nextFire) {
		nextFire = Time.time + fireRate;
	if(GunPos){
		var missle = Instantiate (projectile, GunPos.position, GunPos.rotation);
		//missle.transform.parent = refPlane.transform;
	}
	
	}
}