var Wall9 : GameObject;
var WallSlide : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall9.animation.Play ("Wall9down");
		audio.PlayOneShot(WallSlide);
		Destroy (Wall9, 5);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		}