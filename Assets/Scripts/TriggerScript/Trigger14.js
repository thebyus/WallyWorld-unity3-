var Wall14down : AnimationClip; //this is your animation clip.
var Body : GameObject;
var Sound : AudioClip;
private var up = true; // door initially closed


function Update () {
	if (Vector3.Distance(Body.transform.position, transform.position) < 2) {
		    if (up){ // only do it if wall is up
        	up = false; // wall now is down
		  animation.Play ("Wall14down");
		  Destroy (gameObject, 5);
	}
}
}