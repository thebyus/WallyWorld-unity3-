var Body : GameObject;
var Sound : AudioClip;

function Start () {
	//Find Our Objects
	Body = GameObject.Find("Body");
	
	//Check If Anything Is Missing
	if (Body == null) {
		Debug.Log ("No Object Named Body");
	}
}


function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
				  AudioSource.PlayClipAtPoint(Sound, transform.position);
		  Game.Timer +=20;
		Destroy (gameObject);
		}