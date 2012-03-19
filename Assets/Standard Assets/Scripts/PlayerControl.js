private var mySpeed;
var  constant_velocity = 10;
var top_speed = 10;
var myGrav = 5;
function Start(){
	//transform.velocity = Vector3(0,0,0);
}
function Update () {
	var p1_control : CharacterController  = GetComponent(CharacterController);
	mySpeed = Vector3(Input.GetAxis("Horizontal")*top_speed,p1_control.velocity.y,0);
	p1_control.SimpleMove( mySpeed+ Vector3(constant_velocity,0,0));
	
	//rigidbody.AddForce(Vector3(0,myGrav*-1,0));
	//transform.rotation = Quaternion.identity;


}