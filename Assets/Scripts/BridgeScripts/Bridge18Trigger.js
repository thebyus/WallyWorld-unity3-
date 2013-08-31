var Bridge18 : GameObject;
var TriggerBridge : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Bridge18.animation.Play ("Bridge18up");
		Instantiate(TriggerRed,TriggerBridge.transform.position,TriggerBridge.transform.rotation);
		Destroy(TriggerBridge);
		}
		