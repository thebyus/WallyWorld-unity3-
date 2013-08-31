var Coin2 : GameObject;
var Sound : AudioClip;

	function Start () {
	//Find Our Objects
	Coin2 = GameObject.Find("Coin2");
	
	//Check If Anything Is Missing
	if (Coin2 == null) {
		Debug.Log ("No Object Named Coin2");
	}
	}



function OnTriggerEnter(Coin2 : Collider) {

	if(Coin2.tag == "Coin2") { 
		AudioSource.PlayClipAtPoint(Sound, transform.position);
		Game.Timer +=2;
		Destroy (Coin2.gameObject);
		}
		}