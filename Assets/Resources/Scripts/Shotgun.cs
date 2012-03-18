using UnityEngine;
using System.Collections;

public class Shotgun : MonoBehaviour {
	
	
public float fireRate = 0.5F;
private float nextFire = 0.0F;
public bool canFire = true;

public float speed = 6.0F;
public float jumpSpeed = 8.0F;
public float gravity = 20.0F;
private Vector3 moveDirection = Vector3.zero;

	public GameObject ProjectilePrefab;
	
	
	//use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		/*
		CharacterController controller = GetComponent<CharacterController>();
		if (controller.isGrounded) {
			moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, 0);
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
		
	
		if (Input.GetButton("Jump")){
		moveDirection.y = jumpSpeed;
		}
		}
//		transform.position = new Vector3(transform.position.x, transform.position.y, 0);

		//Gravity!
		moveDirection.y -= gravity * Time.deltaTime;
		
		//Move the player
		controller.Move(moveDirection * Time.deltaTime);
		
		//Keep in 2d
		//
		*/
		// Fire projectile
		if (Input.GetKey(KeyCode.A) )
		{
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
			Instantiate(ProjectilePrefab, transform.position, Quaternion.identity);
		}
		
		if ( Input.GetKey(KeyCode.A) ){
			if ( canFire && Time.time > nextFire) {
	nextFire = Time.time + fireRate;
	 Instantiate (ProjectilePrefab, transform.position, Quaternion.identity);
	}
		}	
	}
}


/*

var fireRate = 0.5;
private var nextFire = 0.0;
var AnimSpeed : float = 1.0;

var canFire = true; //maybe change this to be more controllable.  ammo, fire times, timed triggers, etc


var projectile : GameObject;


function Awake(){//awake or start, so confusing)

//require animation?
//animation[animation.name].speed = AnimSpeed;
animation.playAutomatically = true;
}


function Update (){
	
	
	if (canFire && Time.time > nextFire) {
nextFire = Time.time + fireRate;
var missle = Instantiate (projectile, transform.position, transform.rotation);
	}
		
}

*/