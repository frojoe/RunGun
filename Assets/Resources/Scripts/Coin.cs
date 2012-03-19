using UnityEngine;
using System.Collections;

public class Coin : MonoBehaviour
{
	private GameObject player;
	private bool knockedDown = false;

	// Use this for initialization
	void Start() {
		player = GameObject.Find("Player");
		 Physics.IgnoreLayerCollision(9,10);
	}
	
	void Update() {
		// Delete coin if too far from the player
		if (Vector3.Distance(this.transform.position, player.transform.position) >= 100)
		{
			Destroy(this.gameObject);
		}
	}
	
	void KnockdownCoin() {
		if(!knockedDown)
		{
			// Knock down the coin
			knockedDown = true;
			this.rigidbody.AddForce(new Vector3(0,-1000,0));
		}
	}
	
	void collectCoin() {
		// Remove coin after collection
		Destroy(this.gameObject);
    }
}
