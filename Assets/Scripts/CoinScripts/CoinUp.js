#pragma strict


var Sound1 : AudioClip;
var Sound2 : AudioClip;
var Sound3 : AudioClip;
var SoundBomb : AudioClip;


function OnTriggerEnter(other : Collider) {

			if(other.CompareTag("Coin1")) { 
			AudioSource.PlayClipAtPoint(Sound1, transform.position);
			Timer.Timer +=1;
			other.transform.position = Vector3(0,-10,0);
			}
			
		
			if(other.CompareTag("Coin2")) { 
			AudioSource.PlayClipAtPoint(Sound2, transform.position);
			Timer.Timer +=2;
			other.transform.position = Vector3(0,-10,0);
			}
				
		
			if(other.CompareTag("Coin3")) { 
			AudioSource.PlayClipAtPoint(Sound3, transform.position);
			Timer.Timer +=3;
			other.transform.position = Vector3(0,-10,0);
			}
		
		
			if(other.CompareTag("Bomb")) { 
			AudioSource.PlayClipAtPoint(SoundBomb, transform.position);
			Timer.Timer +=-10;
			other.transform.position = Vector3(0,-10,0);
			
			}
			
}
		
		
		