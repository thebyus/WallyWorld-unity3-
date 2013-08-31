#pragma strict

var Overlay : GameObject;

function OnTriggerEnter(other : Collider){
	(gameObject.Find("Overlay")).transform.position = Vector3(0,-10,0);
	}