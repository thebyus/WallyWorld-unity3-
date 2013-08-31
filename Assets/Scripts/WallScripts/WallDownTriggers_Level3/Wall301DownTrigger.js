var Wall301 : GameObject;
var WallSlide : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall301.animation.Play ("Wall301down");
		audio.PlayOneShot(WallSlide);
		Destroy (Wall301, 5);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		}