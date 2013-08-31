var Wall5 : GameObject;
var Wall2 : GameObject;
var Wall19 : GameObject;
var WallSlide : AudioClip ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Wall5.animation.Play ("Wall5Slide");
		Wall2.animation.Play ("Wall2Slide");
		Wall19.animation.Play ("Wall19Slide");
		audio.PlayOneShot(WallSlide);
		}