var Bridge2 : GameObject;
var TriggerBridge : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Bridge2.animation.Play ("Bridge2BackForth");
		Instantiate(TriggerRed,TriggerBridge.transform.position,TriggerBridge.transform.rotation);
		Destroy(TriggerBridge);
		}
		