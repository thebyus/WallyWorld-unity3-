var Coin1 : GameObject;
var Sound : AudioClip;

	function Start () {
	//Find Our Objects
	Coin = GameObject.Find("Coin1");
	
	//Check If Anything Is Missing
	if (Coin1 == null) {
		Debug.Log ("No Object Named Coin1");
	}
	}



function OnTriggerEnter(Coin1 : Collider) {

	if(Coin1.tag == "Coin1") { 
		AudioSource.PlayClipAtPoint(Sound, transform.position);
		Game.Timer +=1;
		Destroy (Coin1.gameObject);
		}
		}