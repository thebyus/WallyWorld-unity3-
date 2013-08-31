var Bridge11 : GameObject;
//var Arrow2 : GameObject ;
var TriggerBridge : GameObject ;
var TriggerWallRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Bridge11.animation.Play ("Bridge11Rise");
		Instantiate(TriggerWallRed,TriggerBridge.transform.position,TriggerBridge.transform.rotation);
		Destroy(TriggerBridge);
//		Destroy (Arrow2);
		}
		