var Wall14 : GameObject ;
var Sound : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall14.animation.Play ("Wall14down");
		audio.PlayOneShot(Sound);
		Destroy (Wall14, 5);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		
}