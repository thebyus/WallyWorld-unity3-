var Wall10 : GameObject;
var WallSlide : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;
var Bridge16 : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall10.animation.Play ("Wall10Sidetoside");
		audio.PlayOneShot(WallSlide);
		Bridge16.animation.Play ("Bridge16Sidetoside");
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);

			}