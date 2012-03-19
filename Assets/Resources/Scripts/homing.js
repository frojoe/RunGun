    var target : Transform;
     
    var damping = 1.0;
    var drivespeed = 15;
     
     
    function Update () {
       
               
            transform.Translate(Vector3.forward * Time.deltaTime * drivespeed);
           
            var rotation = Quaternion.LookRotation(target.position - transform.position);
            transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
       
     
        if (Input.GetButtonDown ("Fire1")) {
     
            ray = Camera.mainCamera.ScreenPointToRay (Input.mousePosition);
            var hit : RaycastHit;
            if (Physics.Raycast (ray, hit)) {
                raytarget = hit.point;
                print("HIT SOMETHING");
                target = hit.transform;
            }
           
        }
     
    }