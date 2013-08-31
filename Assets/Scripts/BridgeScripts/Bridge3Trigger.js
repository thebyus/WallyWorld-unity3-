var Bridge3 : GameObject;
var TriggerBridge : GameObject ;
var TriggerRed : GameObject ;

function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Bridge3.animation.Play ("Bridge3BackForth");
		Instantiate(TriggerRed,TriggerBridge.transform.position,TriggerBridge.transform.rotation);
		Destroy(TriggerBridge);
		}
		