var Wall16 : GameObject ;
var Sound : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall16.animation.Play ("Wall16down");
		audio.PlayOneShot(Sound);
		Destroy (Wall16, 5);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		
}