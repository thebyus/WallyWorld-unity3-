var Wall31down : AnimationClip; //this is your animation clip.
var Body : GameObject;
var Sound : AudioClip;


function Update () {
	if (Vector3.Distance(Body.transform.position, transform.position) < 2) {
		  audio.PlayOneShot(Sound);
		  animation.Play ("Wall31down");
		  Destroy (gameObject, 5);
	}
}