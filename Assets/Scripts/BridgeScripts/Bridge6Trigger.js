var Bridge6 : GameObject;
var TriggerBridge : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Bridge6.animation.Play ("Bridge6updown");
		Instantiate(TriggerRed,TriggerBridge.transform.position,TriggerBridge.transform.rotation);
		Destroy(TriggerBridge);
		}
		