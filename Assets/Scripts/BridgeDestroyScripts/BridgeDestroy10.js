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

function Update () {
	if (Vector3.Distance(Body.transform.position, transform.position) < 2) {
		audio.PlayOneShot(Sound);
		Destroy (gameObject, 10);
	}
}