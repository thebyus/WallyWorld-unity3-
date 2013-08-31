private var Body : GameObject;
private var Goal : GameObject;
private var Overlay : GameObject;
private var BackgroundMusic : GameObject;
private var BackgroundNoise : GameObject;
private var Trap : GameObject;

//private var timeSinceLoadLevel ;

//private var startTime ;
private var restSeconds : int;
/*private var roundedRestSeconds : int;
private var roundedRestMinutes : int;
private var displaySeconds : int;
private var displayMinutes : int;

var countDownSeconds : int;
*/
var WorldCamera : Camera;

var Speed = 0.1;
var RotationSpeed = 1.0;

var WinClip : AudioClip;
var LoseClip : AudioClip;
var CreditsClip : AudioClip;
// var SoundClip : AudioClip;

var WinFlag = false;
var LoseFlag = false;
var OverlayFlag = false;
var SoundFlag = false;
var Credits = false;
/*var IncreaseTime = true ;

static var Counter = 0;
static var Timer = 240;
*/
var FrontCollisionDistance = .1;
var BackCollisionDistance = .1;
var SideCollisionDistance = .1;
var trapFloorMaxDistance = 10;
var trapFloorTag = "TrapFloor";
var FloorMaxDistance = .5;
var FloorTag = "Floor";

private var FrontBlocked = false;
private var BackBlocked = false;
private var RightBlocked = false;
private var LeftBlocked = false;

function Start() {
	//Find Our Objects
	Body = GameObject.Find("Body");
	Goal = GameObject.Find("Goal");
	Overlay = GameObject.Find("Overlay");
//	Sound = GameObject.Find("Sound");
	Trap = GameObject.Find("Trap");
	
	
	//Check If Anything Is Missing
	if (Body == null) {
		Debug.Log ("No Object Named Body");
	}
	if (Goal == null) {
		Debug.Log ("No Object Named Goal");
	}
	if (Overlay == null) {
		Debug.Log ("No Object Named Overlay");
	}
//	if (Sound == null) {
//		Debug.Log ("No Object Named Sound");
//	}
		
	if (Trap == null) {
		Debug.Log ("No Object Named Trap");
	}
	
	//Make Our Main Camera Attached To The Body
	Camera.main.transform.parent = Body.transform; 


}

/*function Awake (){

	startTime = Time.deltaTime;
}
*/
// User Interface

function OnGUI () { 

/*
	var guiTime = Time.timeSinceLevelLoad - startTime;
	restSeconds = Timer - (guiTime);
	
	roundedRestSeconds = Mathf.CeilToInt(restSeconds);
	displayMinutes = roundedRestSeconds / 60;
	displaySeconds = roundedRestSeconds % 60;
	
	
	textTime = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds);
	 
*/	 
//	if (LoseFlag == true){
//		GUI.Label (Rect (300,0, Screen.height - 20, Screen.width), "Timer: " + restSeconds);
//	}
	
/*	if (WinFlag == false && LoseFlag == false) {
//		GUI.Label (Rect (Screen.width / 10, Screen.height / 2, Screen.width / 2, Screen.height / 2), "Points: " + Counter);
		if (restSeconds > 0){
			GUI.Label (Rect (300,0, Screen.height - 20, Screen.width), "Timer: " + textTime);
		if (restSeconds <= 0){
			GUI.Label (Rect (300,0, Screen.height - 20, Screen.width), "Timer: 0:00");

	}
	}
	}
*/	

	//What Displays when we win
	if (WinFlag == true && Credits == false) {
		GUI.Label (Rect (Screen.width / 2, Screen.height / 2, Screen.width / 2, Screen.height / 2), "You Made It! Press 'C' for Credits! Press 'R' to Retry!"); // Place it in these X, Y coordinates (Screen width value, screen.height value) | It's scale are these X, Y values (Screen width value, screen.height value) | Out text in in quotations
	}
	
	//What Displays when we lose
	if (LoseFlag == true && Credits == false) {
		GUI.Label (Rect (Screen.width / 2, Screen.height / 2, Screen.width / 2, Screen.height / 2), "Try Again! Press 'C' for Credits! Press 'R' to Retry!");
	}
	
	//What our overlay displays
	if (OverlayFlag == true && Credits == false) {
//		GUI.Label (Rect (100, 100, Screen.width, Screen.height), "You have 4 minutes!");
		GUI.Label (Rect (100, 120, Screen.width, Screen.height), "Avoid the Lava and find the Giant Gold Star");
//		GUI.Label (Rect (100, 140, Screen.width, Screen.height), "Green Stars = 1 second");
//		GUI.Label (Rect (100, 160, Screen.width, Screen.height), "Blue Stars = 2 seconds");
//		GUI.Label (Rect (100, 180, Screen.width, Screen.height), "Yellow Stars = 3 seconds");
		GUI.Label (Rect (100, 200, Screen.width, Screen.height), "Press W to move forward");
		GUI.Label (Rect (100, 220, Screen.width, Screen.height), "Press S to move backward");
		GUI.Label (Rect (100, 240, Screen.width, Screen.height), "Press A to turn left");
		GUI.Label (Rect (100, 260, Screen.width, Screen.height), "Press D to turn right");

	}
	
	// Timer Clock
//		GUI.Label (Rect (0, Screen.height - 20, Screen.width / 2, Screen.height / 2), "Timer - " + Mathf.RoundToInt(Time.time)); // In Seconds

	if (Credits == true) {
		GUI.Label (Rect (0, 0, Screen.width, Screen.height), "Game Design - Eamonn O'Brien");
		GUI.Label (Rect (0, 20, Screen.width, Screen.height), "Programing - Eamonn O'Brien");
		GUI.Label (Rect (0, 40, Screen.width, Screen.height), "Art - Eamonn O'Brien");
		GUI.Label (Rect (0, 60, Screen.width, Screen.height), "Audio - Eamonn O'Brien");
		GUI.Label (Rect (0, 80, Screen.width, Screen.height), "Sliding Wall SFX www.freesfx.co.uk");
		GUI.Label (Rect (0, 100, Screen.width, Screen.height), "Bomb Explosion SFX soundbible.com");
		GUI.Label (Rect (0, 120, Screen.width, Screen.height), "Background Music – Mysterious Paths by Jewel Beat");
		GUI.Label (Rect (0, 140, Screen.width, Screen.height), "Win Music Remix – Horn SFX soundbible.com, Music YSoul");
		GUI.Label (Rect (0, 160, Screen.width, Screen.height), "Credits Background Music – 12Gauge by NiT GriT");
	}
}

		
function Update () {

	if (WinFlag == false && LoseFlag == false) { // If the game isn't lost or won
	
		// Movement
		if (FrontBlocked == false) { // if we're not blocked in the front
			if (Input.GetKey (KeyCode.W)) {
				Body.transform.Translate(0, 0, Speed);
			}
		}
		
		if (FrontBlocked == false) { // if we're not blocked in the front
			if (Input.GetKey (KeyCode.UpArrow)) {
				Body.transform.Translate(0, 0, Speed);
			}
		}
		
		if (BackBlocked == false) { // if we're not blocked in the back
			if (Input.GetKey (KeyCode.S)) {
				Body.transform.Translate(0, 0, -Speed);
			}
		}
		
		if (BackBlocked == false) { // if we're not blocked in the back
			if (Input.GetKey (KeyCode.DownArrow)) {
				Body.transform.Translate(0, 0, -Speed);
			}
		}
		// Rotation
		if (RightBlocked == false) { // if we're not blocked on the right
			if (Input.GetKey (KeyCode.D)) {
				Body.transform.Rotate (0, RotationSpeed, 0);
			}
		}
		
		if (RightBlocked == false) { // if we're not blocked on the right
			if (Input.GetKey (KeyCode.RightArrow)) {
				Body.transform.Rotate (0, RotationSpeed, 0);
			}
		}
		
		if (LeftBlocked == false) {// if we're not blocked on the left
			if (Input.GetKey (KeyCode.A)) {
				Body.transform.Rotate (0, -RotationSpeed, 0);
			}
		}
		
		if (LeftBlocked == false) {// if we're not blocked on the left
			if (Input.GetKey (KeyCode.LeftArrow)) {
				Body.transform.Rotate (0, -RotationSpeed, 0);
			}
		}
	
	
	}
	
	// Win Condition
		if (Vector3.Distance(Body.transform.position, Goal.transform.position) < 1.3) { // If the distance between Body and Goal is Less Than 3, play the Goal sound and set the GoalFlag to true
		if (WinFlag == false) {
			OverlayFlag = false; //We set this to false so that the Overlay and Win text don't collide. Change if needed.
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
			Destroy(gameObject.Find("Goal"));
			audio.clip = WinClip; // set our Audio Source to this clip
			audio.Play(); // command the audio source to Play
			WinFlag = true;
		
		}
	}
	
	// Lose Condition
//	if (Vector3.Distance(Body.transform.position, Trap.transform.position) < 2) { // If the distance between Body and Trap is Less Than 3, play the Lose sound and set the LoseFlag to true/		if (LoseFlag == false) {

	
		if (restSeconds < 0) {
		if (LoseFlag == false) {
			OverlayFlag = false;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
			audio.clip = LoseClip;
			audio.Play();
			LoseFlag = true;
			
			}
			}
			
	//Bring Up Credits Or Retry
	if (WinFlag == true || LoseFlag	== true) { // if we've won or lost the game
		if (Input.GetKey (KeyCode.R)) { // if the R key is pressed
//			Application.LoadLevel (Application.loadedLevel); // load the previous loaded level
//			Timer = 240;
		}
		
		if (Input.GetKey (KeyCode.C)) {
			if (Credits == false) {
				audio.clip = CreditsClip;
				audio.Play();
			}
			Credits = true;
		}
	}
	
	// Exit App
	if (Credits == true) {
		if (Input.GetKey (KeyCode.Escape)) {
			Application.Quit(); // quit the application (only works in an application form)
		}
	}
	
	
	// Overlay Trigger
	if (Vector3.Distance(Body.transform.position, Overlay.transform.position) < 2) {
		OverlayFlag = true;
	} else {
		OverlayFlag = false;
	}

	
	// Timer
//	if (Mathf.RoundToInt(Time.time) > 60) { // If game runs for over 60 seconds, set Lose to true
//		if (LoseFlag == false && WinFlag  == false) {
//			OverlayFlag = false;
//			audio.clip = LoseClip;
//			audio.Play();
//			LoseFlag = true;
//		}
//	}
	
	//Collision -- Be Careful with this stuff

	// Front
	var FrontRay : RaycastHit;
	Debug.DrawRay (Body.transform.position, Body.transform.forward * FrontCollisionDistance, Color.green);
	
		if (Physics.Raycast (Body.transform.position, Body.transform.forward, FrontRay, trapFloorMaxDistance)) {
		if (FrontRay.collider.CompareTag(trapFloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
			
	
	if (Physics.Raycast (Body.transform.position, Body.transform.forward, FrontRay, 10)) {
		if (FrontRay.distance < FrontCollisionDistance) { // if our distance is less than the value of our variable FrontCollisionDistance
			FrontBlocked = true; // set our Blocked variable to true
			Debug.Log("I'm blocked in the front! My max distance is: " + FrontCollisionDistance + " but my current distance is: " + FrontRay.distance);
		} else { // if our distance is greater than the value of our variable FrontCollisionDistance
			FrontBlocked = false; // tell our Blocked variable it's free
		} 
		} else {
		FrontBlocked = false;
	}
	

	if (Physics.Raycast (Body.transform.position, Body.transform.forward, FrontRay, FloorMaxDistance)) {
		if (FrontRay.collider.CompareTag(FloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
		
	// Back
	var BackRay : RaycastHit;
	Debug.DrawRay (Body.transform.position, -Body.transform.forward * BackCollisionDistance, Color.green);

			if (Physics.Raycast (Body.transform.position, Body.transform.forward, BackRay, FloorMaxDistance)) {
		if (BackRay.collider.CompareTag(FloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
		
	
		if (Physics.Raycast (Body.transform.position, -Body.transform.forward, BackRay, 10)) {
		if (BackRay.distance < BackCollisionDistance) {
			BackBlocked = true;
			Debug.Log("I'm blocked in the back! My max distance is: " + BackCollisionDistance + " but my current distance is: " + BackRay.distance);
		} else {
			BackBlocked = false;
		}
	} else {
		BackBlocked = false;
	}
	
	if (Physics.Raycast (Body.transform.position, -Body.transform.forward, BackRay, trapFloorMaxDistance)) {
		if (BackRay.collider.CompareTag(trapFloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
				Destroy (BackgroundMusic);
				Destroy (BackgroundNoise);
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
		

				
	// Right
	var RightRay : RaycastHit;
	Debug.DrawRay (Body.transform.position, Body.transform.right * SideCollisionDistance, Color.blue);

				if (Physics.Raycast (Body.transform.position, Body.transform.forward, RightRay, FloorMaxDistance)) {
		if (RightRay.collider.CompareTag(FloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
		
		
		if (Physics.Raycast (Body.transform.position, Body.transform.right, RightRay, 10)) {
		if (RightRay.distance < SideCollisionDistance) {
			RightBlocked = true;
			Debug.Log("I'm blocked on the right! My max distance is: " + SideCollisionDistance + " but my current distance is: " + RightRay.distance);
		} else {
			RightBlocked = false;
		}
	} else {
		RightBlocked = false;
	}
	
	if (Physics.Raycast (Body.transform.position, Body.transform.right, RightRay, trapFloorMaxDistance)) {
		if (RightRay.collider.CompareTag(trapFloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
				Destroy(gameObject.Find("BackgroundMusic"));
				Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
							
		}
		}
		}
		
		

		
		
	// Left
	var LeftRay : RaycastHit;
	Debug.DrawRay (Body.transform.position, -Body.transform.right * SideCollisionDistance, Color.blue);

				if (Physics.Raycast (Body.transform.position, Body.transform.forward, LeftRay, FloorMaxDistance)) {
		if (LeftRay.collider.CompareTag(FloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
			
		
				if (Physics.Raycast (Body.transform.position, -Body.transform.right, LeftRay, 10)) {
		if (LeftRay.distance < SideCollisionDistance) {
			LeftBlocked = true;
			Debug.Log("I'm blocked on the Left! My max distance is: " + SideCollisionDistance + " but my current distance is: " + LeftRay.distance);
		} else {
			LeftBlocked = false;
		}
	} else {
		LeftBlocked = false;
	}
	
	if (Physics.Raycast (Body.transform.position, -Body.transform.right, LeftRay, trapFloorMaxDistance)) {
		if (LeftRay.collider.CompareTag(trapFloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
				Destroy(gameObject.Find("BackgroundMusic"));
				Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}
		

	 //Down
//	var DownRay : RaycastHit;
//	Debug.DrawRay (Body.transform.position, -Body.transform.up * trapFloorMaxDistance, Color.blue);  // give us a debug view of the raycast
//	if (Physics.Raycast (Body.transform.position, -Body.transform.up, DownRay, trapFloorMaxDistance)) {  // look down
//		if (DownRay.collider.CompareTag(trapFloorTag)) {  // check for the trapFloorTag Tag value on the object below
//			if (LoseFlag == false) {
//				OverlayFlag = false;
//				LoseFlag = true;
//				Destroy (BackgroundMusic);
//				Destroy (BackgroundNoise);
//				audio.clip = LoseClip;
//				audio.Play();
								
//		}
//		}
		
//	}
		
	 //Up
	var UpRay : RaycastHit;
	Debug.DrawRay (Body.transform.position, Body.transform.up * trapFloorMaxDistance, Color.red);  // give us a debug view of the raycast
	if (Physics.Raycast (Body.transform.position, Body.transform.up, UpRay, trapFloorMaxDistance)) {  // look down
		if (UpRay.collider.CompareTag(trapFloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
				Destroy(gameObject.Find("BackgroundMusic"));
				Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();						
		}
		}
		}


	if (Physics.Raycast (Body.transform.position, Body.transform.forward, UpRay, FloorMaxDistance)) {
		if (UpRay.collider.CompareTag(FloorTag)) {  // check for the trapFloorTag Tag value on the object below
			if (LoseFlag == false) {
				OverlayFlag = false;
				LoseFlag = true;
			Destroy(gameObject.Find("BackgroundMusic"));
			Destroy(gameObject.Find("BackgroundNoise"));
				audio.clip = LoseClip;
				audio.Play();
								
		}
		}
		}

 }