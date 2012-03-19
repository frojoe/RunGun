#pragma strict

var getGunSound : AudioClip;
var gunShotSound : AudioClip;
var myBullet : GameObject;
var myCooldown : float;
var myName : String;
var myAmmo : int;
var timeLastFired : float;

function Fire () {

print("Gun fired!");

if ((Time.timeSinceLevelLoad - timeLastFired) > myCooldown || timeLastFired == 0 )

{

Instantiate(myBullet, transform.position, Quaternion.identity);
Instantiate(myBullet, transform.position, Quaternion.identity);
Instantiate(myBullet, transform.position, Quaternion.identity);
Instantiate(myBullet, transform.position, Quaternion.identity);
Instantiate(myBullet, transform.position, Quaternion.identity);

timeLastFired = Time.timeSinceLevelLoad;
myAmmo--;

}


}

function Start () {

}

function Update () {

}