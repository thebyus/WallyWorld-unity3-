var Bomb : GameObject;
var Sound : AudioClip;

	function Start () {
	//Find Our Objects
	Bomb = GameObject.Find("Bomb");
	
	//Check If Anything Is Missing
	if (Bomb == null) {
		Debug.Log ("No Object Named Bomb");
	}
	}



function OnTriggerEnter(Bomb : Collider) {

	if(Bomb.tag == "Bomb") { 
		AudioSource.PlayClipAtPoint(Sound, transform.position);
		Game.Timer +=-10;
		Bomb.transform.position = Vector3(0,-10,0);
		}
		}