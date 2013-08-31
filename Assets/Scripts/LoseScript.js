#pragma strict

var LoseFlag : boolean = false;
var SurfaceLava : GameObject ;



	function OnTriggerEnter(SurfaceLava : Collider){
		LoseFlag = true ;
	
	
	}
	