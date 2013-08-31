#pragma strict

var Body : GameObject ;

function OnTriggerEnter (Body : Collider) { 

	Body.transform.parent = gameObject.transform;
	
}

function OnTriggerExit (Body : Collider) { 
	
	Body.transform.parent = null;
}