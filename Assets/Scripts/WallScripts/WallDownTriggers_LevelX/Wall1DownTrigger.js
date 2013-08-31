var Wall1 : GameObject;
var WallSlide : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall1.animation.Play ("Wall1down");
		audio.PlayOneShot(WallSlide);
		Destroy (Wall1, 5);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		}