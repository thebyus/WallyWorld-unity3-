var Wall32 : GameObject;
var WallSlide : AudioClip ;
var TriggerWall : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(other : Collider) {

	if(other.gameObject.tag == "Body"){
		Wall32.animation.Play ("Wall32fall");
		audio.PlayOneShot(WallSlide);
		Instantiate(TriggerRed,TriggerWall.transform.position,TriggerWall.transform.rotation);
		Destroy(TriggerWall);
		}
		}
		