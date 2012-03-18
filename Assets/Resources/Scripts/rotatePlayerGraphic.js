
function Update () {
	CheckCollide();
}

function CheckCollide() {
	    var forward : Vector3 = transform.TransformDirection(-Vector3.up) * 10;
      var rayHit : RaycastHit;
	 Debug.DrawRay(transform.position, forward, Color.green);
	   if (Physics.Raycast (transform.position, -Vector3.up, rayHit, 8)) {
       // Debug.Log("Hit something");
       
    var hitRotation = Quaternion.FromToRotation(Vector3.up, rayHit.normal);
    //print(hit.transform.name);
transform.rotation = hitRotation;
    }
	
    
}