#pragma strict

var WinMusic : AudioClip;
var Goal : GameObject;
var Body : GameObject;



function OnTriggerEnter (Goal : Collider) {

		if(Goal.CompareTag("Goal")) { 
			
			Destroy(gameObject.Find("Goal"));
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
			Body.transform.position = Goal.transform.position;
			transform.Rotate(0,100,0);
			AudioSource.PlayClipAtPoint(WinMusic, transform.position);
			
			}
		}
		