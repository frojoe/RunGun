   var isDown : boolean = false;
   
   
   function LateUpdate(){
   
   if(isDown){
   
    animation["Down"].speed = 1;
  // animation["Down"].time = animation["Down"].length;
   if(!animation.isPlaying){
   animation.CrossFade("Down");
   }
   }
   else{
   animation["Down"].speed = -1;
   //animation["Down"].time = animation["Down"].length;
   if(!animation.isPlaying){
   animation.CrossFade("Down");
   }
   }
   }