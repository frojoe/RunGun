using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class CoinSpawner : MonoBehaviour
{
	private const int numCoinPatterns = 1;
	private List<Object> coinPatterns;	
	
	private Object coin;
	private GameObject player; 
	private int spawnRate = 2;
	private float storedModulo = 0;

	// Use this for initialization
	void Start ()
	{
		player = GameObject.Find("Player");
		coin = Resources.Load("Prefabs/CoinPrefab");
		
		coinPatterns = new List<Object>();
		for (int i=0; i<numCoinPatterns; ++i)
		{
			coinPatterns.Add(Resources.Load("Prefabs/Coin Patterns/CoinPattern"+(i+1)));
		}
	}
	
	// Update is called once per frame
	void Update ()
	{
		// Update position of the spawner
		transform.position = new Vector3(player.transform.position.x + 50, player.transform.position.y + 20, 0);
		
		// Spawn 
		if ( storedModulo > ( Time.timeSinceLevelLoad % spawnRate) )
	  	{
			int randomNum = (int) Mathf.Floor(Random.value * numCoinPatterns);
	  	  	Instantiate(coinPatterns[randomNum], transform.position, transform.rotation);
	  	}
	  	storedModulo = ( Time.timeSinceLevelLoad % spawnRate);
	}
}
