var Wall5updown : AnimationClip; //this is your animation clip.
var Body : GameObject;
var Sound : AudioClip;


function Update () {
	if (Vector3.Distance(Body.transform.position, transform.position) < 5) {
		  audio.PlayOneShot(Sound);
		  animation.Play ("Wall5updown");
	}
}