var Wall32fall : AnimationClip; //this is your animation clip.
var Body : GameObject;
var Sound : AudioClip;


function Update () {
	if (Vector3.Distance(Body.transform.position, transform.position) < 2) {
		  audio.PlayOneShot(Sound);
		  animation.Play ("Wall32fall");
		  Destroy (gameObject, 16);
	}
}