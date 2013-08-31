var Wall10Sidetoside : AnimationClip; //this is your animation clip.
var Body : GameObject;
var Sound : AudioClip;
private var up = true; // door initially closed


function Update () {
	if (Vector3.Distance(Body.transform.position, transform.position) < 2) {
		    if (up){ // only do it if wall is up
        	up = false; // wall now is down
		  audio.PlayOneShot(Sound);
		  animation.Play ("Wall10Sidetoside");
	}
}
}