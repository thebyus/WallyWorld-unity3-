var Wall22 : GameObject ;
var Sound : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall22.animation.Play ("Wall22down");
		audio.PlayOneShot(Sound);
		Destroy (Wall22, 5);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		
}