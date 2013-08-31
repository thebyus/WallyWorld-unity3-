var Bridge17 : GameObject;
var TriggerBridge : GameObject ;
var TriggerRed : GameObject ;
var Wall28 : GameObject ;


function OnTriggerEnter(collisionInfo : Collider) {

	if(gameObject.tag == "Body");
		Bridge17.animation.Play ("Bridge17updown");
		Instantiate(TriggerRed,TriggerBridge.transform.position,TriggerBridge.transform.rotation);
		Destroy(TriggerBridge);
		Wall28.animation.Play("Wall28down");
		Destroy(Wall28, 5);
		
		
		}
		