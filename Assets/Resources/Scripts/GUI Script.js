
var healthDisplay : Texture2D;
var player : PlayerControl;
var spawner : EnemySpawnerDebug;


function OnGUI()
{
//health
GUI.Box( (Rect (10,10,100,25)), (Time.timeSinceLevelLoad.ToString() ));

GUI.Box( (Rect (10,50,50,25)), (player.health.ToString()) );

GUI.Box( (Rect (70,50,50,25)), (player.top_speed.ToString()) );

GUI.Box( (Rect (10,100,50,25)), (spawner.spawnRate.ToString()) );


}

function Update () {
}