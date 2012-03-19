var spawnee: Transform;
var spawnee2: Transform;
var spawnee3: Transform;
var spawnees : Transform[];
private var newgrounds : Transform;
private var spawn_array = new Array();
private var start_ground_amount = 3;
private var ground_length = 20;
private var player_start;
private var ground_start;
private var spawn_prefab : Transform;

private var playa ;
private var ground_count = 0;
function Start(){
	playa = GameObject.Find("Player");
	player_start = playa.transform.position.x;
	ground_start = player_start;
	for(ground_count=0;ground_count< start_ground_amount; ground_count++){
		newgrounds = Instantiate(spawnees[0],Vector3(player_start+(ground_count-1)*ground_length,0,0),Quaternion.identity);
		spawn_array.push(newgrounds);
	}

	
}

function Update () {
	var dmw;
	/*
	if (Input.GetKeyDown("up")){
		newgrounds = Instantiate(spawnees[0],Vector3(playa.transform.position.x,playa.transform.position.y - 6,0),Quaternion.identity);
		spawn_array.push(newgrounds);
	}
	if (Input.GetKeyDown("down")){
		if (spawn_array.length > 0){
			dmw = spawn_array.shift();
			Destroy(dmw.gameObject);
		}	
	}*/
	
	if(playa.transform.position.x>player_start+ground_length)
	{
		var segment_num = Mathf.Floor(Random.value*3); //genrate random number from 0-2
		var segment_length;
		var rotation = Quaternion.identity;
		rotation.eulerAngles = Vector3(0,0,20);
		switch (segment_num)
		{
			case 0:
				//spawn_prefab = Resources.Load("Terrain01") as Transform;
				newgrounds = Instantiate(spawnees[0],Vector3(ground_start+((ground_count++-1)*ground_length),0,0),Quaternion.identity);				
				break;
			case 1:
				//spawn_prefab = Resources.Load("Terrain02")as Transform;
				newgrounds = Instantiate(spawnees[1],Vector3(ground_start+((ground_count++-1)*ground_length),3.92544,0),rotation);
				break;
			case 2:
				//spawn_prefab = Resources.Load("Terrain03") as Transform;
				newgrounds = Instantiate(spawnees[2],Vector3(ground_start+((ground_count++-1)*ground_length-4),8.5,0),Quaternion.identity);				
				break;
			default:
				break;
		}
		//newgrounds = Instantiate(spawnee,Vector3((ground_count++-1)*ground_length,0,0),Quaternion.identity);
		spawn_array.push(newgrounds);
		
		if (spawn_array.length > 0){
			dmw = spawn_array.shift();
			Destroy(dmw.gameObject);
		}	
		player_start += ground_length;
	}
	
}