using UnityEngine;
using System.Collections;

public class Coin : MonoBehaviour
{
	private GameObject player;

	// Use this for initialization
	void Start() {
		player = GameObject.Find("Player");
	}
	

	
	void collectCoin() {
		
		Destroy(this.gameObject);
    }
}
