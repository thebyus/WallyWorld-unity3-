var Coin3 : GameObject;
var Sound : AudioClip;

	function Start () {
	//Find Our Objects
	Coin3 = GameObject.Find("Coin3");
	
	//Check If Anything Is Missing
	if (Coin3 == null) {
		Debug.Log ("No Object Named Coin3");
	}
	}



function OnTriggerEnter(Coin3 : Collider) {

	if(Coin3.tag == "Coin3") { 
		AudioSource.PlayClipAtPoint(Sound, transform.position);
		Game.Timer +=3;
		Destroy (Coin3.gameObject);
		}
		}