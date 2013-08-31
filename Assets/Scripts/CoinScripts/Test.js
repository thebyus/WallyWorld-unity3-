var Coin : GameObject;
var Sound : AudioClip;

	function Start () {
	//Find Our Objects
	Coin = GameObject.Find("Coin");
	
	//Check If Anything Is Missing
	if (Coin == null) {
		Debug.Log ("No Object Named Coin");
	}
	}



function OnTriggerEnter(Coin : Collider) {

	if(Coin.tag == "Coin1") { 
		AudioSource.PlayClipAtPoint(Sound, transform.position);
		Game.Timer +=1;
		Destroy (Coin.gameObject);
		}
		}