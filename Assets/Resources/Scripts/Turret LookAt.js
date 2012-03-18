var target;
private var rotOffset : Vector3 = Vector3(90,0,0.0);


function Awake (){
target = gameObject.FindWithTag("Player");

}

function Update () {
 var rotation = Quaternion.LookRotation(target.transform.position);
 transform.eulerAngles = Vector3((rotation.eulerAngles.x + rotOffset.x),0,rotation.eulerAngles.z + rotOffset.z);
}