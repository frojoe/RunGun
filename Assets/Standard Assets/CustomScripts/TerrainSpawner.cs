using UnityEngine;
using System.Collections;
using System.Collections.Generic;



public class TerrainSpawner : MonoBehaviour {
	
	//Arrays that describe the various terrain pieces//////////////////
	public GameObject[] spawnees;
	public float[] spawneeLengths;
	public float[] spawneeXOffsets;
	public float[] spawneeYOffsets;
	public float[] spawneeAngles; 
	private Quaternion[] spawneeRotations; //used privately  to convert angles to rotations

	private GameObject newGrounds;
	private Queue<GameObject> spawnedTerrain = new Queue<GameObject>(); //holds references to spawned objects
	private int startGroundAmount = 3;
	private float groundLength = 20;
	private float spawnStart = 0;
	private float groundStart = 0;
	private Transform spawnPrefab;
	
	
	private GameObject playa ; //reference to player
	private int groundCount = 0; //iterator for ground loops
	private float pastXOffset =0; 
	private float lastSpawnPos = 0;
	// Use this for initialization
	void Start () {
		playa = GameObject.Find("Player");// get reference to player
		spawnStart = playa.transform.position.x; //initiate start of spawns to initial player position + half of first terrain length
		groundStart = spawnStart; //start of ground is first spawn point
		
		///////////Generate intial platoforms remeber to randomize later /////////////////////////
		for(;groundCount< startGroundAmount; groundCount++){
			Vector3 startVector = new Vector3(spawnStart+(groundCount-(float)0.5)*spawneeLengths[0],0,0);
			newGrounds = Instantiate(spawnees[0],startVector,Quaternion.identity) as GameObject;
			spawnedTerrain.Enqueue(newGrounds);
		}
		//setup variables needed to calculate next platform position
		lastSpawnPos = spawnStart + spawneeLengths[0]*(float)1.5; //set last spawnpoint to position of last spawned terrain
		pastXOffset = spawneeLengths[0]*(float)0.5 - spawneeXOffsets[0]; // set previous  x offset for next psawn calculation
		spawnStart += spawneeLengths[0]; //set next spawnpoint
		
		/////////////////////////////////////////////////////////////////
		
		//translate inspector inputted angles into actual Rotations/////////////////
		spawneeRotations = new Quaternion[spawnees.Length];
		for(int i=0; i<spawnees.Length; i++)
		{
			spawneeRotations[i].eulerAngles = new Vector3(0,0,spawneeAngles[i]); 
		}
		/////////////////////////////////////////////////////////////////////////////
	
	}
	
	// Update is called once per frame
	void Update () {

		
		GameObject obsoleteTerrain;
		if(playa.transform.position.x>spawnStart) // when player goes past point where another land needs to be spawned
		{

			int segmentNum = (int)Mathf.Floor(Random.value*spawnees.Length); //genrate random number from 0- number of terrain types - 1
			
			//spawn randomly chosen piece  with offset due differing centerpoints
			float newSpawnPos = lastSpawnPos + pastXOffset + (spawneeLengths[segmentNum]/2) + spawneeXOffsets[segmentNum];
			newGrounds = Instantiate(spawnees[segmentNum],new Vector3(newSpawnPos,spawneeYOffsets[segmentNum],0),spawneeRotations[segmentNum])as GameObject;				
		
			
			spawnedTerrain.Enqueue(newGrounds); //store reference to new land
			spawnStart += spawneeLengths[segmentNum];	//set new spawn point
			pastXOffset = (spawneeLengths[segmentNum]/2)-spawneeXOffsets[segmentNum]; //set up the previous part of the next offsets
			lastSpawnPos = newSpawnPos; // record current spawn position for next spawn 
			if (spawnedTerrain.Count > 0){ // delete old terrain if it exists
				//print(spawnedTerrain.Dequeue());
				obsoleteTerrain = spawnedTerrain.Dequeue();
				
				Destroy(obsoleteTerrain);
			}	
			
		}
	}
}
