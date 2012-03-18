using UnityEngine;
using System.Collections;

public class ShotgunProjectile : MonoBehaviour {
	// Public variables
	public float ProjectileSpeed;
	
	// Private variables
	private Transform myTransform;
	private Vector3 originalPosition;
	private Ray ray;
	private Vector3 shotgunRandomPosition;
	// Use this for initialization
	void Start () {
		
		GameObject player = GameObject.FindWithTag("Player");
		
		Physics.IgnoreCollision(player.collider, collider);
		
		myTransform = transform;
		originalPosition = transform.position;
		shotgunRandomPosition = ( (Input.mousePosition ) + 
		                         (new Vector3( (Random.Range(-50, 50)), (Random.Range(-50, 50)), 0) ) );
		
		ray = Camera.main.ScreenPointToRay (shotgunRandomPosition);
		ProjectileSpeed = Random.Range(180,220);
		
		//print(Input.mousePosition);
	}
	
	// Update is called once per frame
	void Update () {
		// Move projectile
		float amountToMove = ProjectileSpeed * Time.deltaTime;
		
		Vector3 shootVec = new Vector3(ray.origin.x - originalPosition.x, ray.origin.y - originalPosition.y, 0).normalized;
		myTransform.Translate( shootVec * amountToMove);
		
		
		float distanceTraveled = Mathf.Sqrt(Mathf.Pow(myTransform.position.x - originalPosition.x, 2) + Mathf.Pow(myTransform.position.y - originalPosition.y, 2));
		
		if (distanceTraveled > 5000)
			Destroy(gameObject);
	}
	void OnTriggerEnter(Collider thing){
		//print(thing.gameObject.tag);
		
		
		
		if(thing.gameObject.tag == "enemy")
		{
			//take away health
			print("hit enemy");

			thing.gameObject.SendMessage("ApplyDamage", 1F);
			Destroy(gameObject);
		}
		
		
	    if(thing.gameObject.tag == "floor")
		{	
			Destroy(gameObject);
		}
		
		if(thing.gameObject.tag == "item")
		{	
			thing.gameObject.SendMessage("Hit", 1F);
			Destroy(gameObject);
		}
}
}