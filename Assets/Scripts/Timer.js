

private var startTime ;
private var restSeconds : int;
private var roundedRestSeconds : int;
private var roundedRestMinutes : int;
private var displaySeconds : int;
private var displayMinutes : int;
private var timeSinceLoadLevel ;

var countDownSeconds : int;
var IncreaseTime = true ;

var WinFlag = false;
var LoseFlag = false;

static var Counter = 0;
static var Timer = 240;



/*function Awake (){

	startTime = Time.deltaTime;
}
*/
// User Interface
function OnGUI () { 


	var guiTime = Time.timeSinceLevelLoad - Time.deltaTime;
	restSeconds = Timer - (guiTime);
	
	roundedRestSeconds = Mathf.CeilToInt(restSeconds);
	displayMinutes = roundedRestSeconds / 60;
	displaySeconds = roundedRestSeconds % 60;
	
	
	textTime = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds);
	 

	if (WinFlag == false && LoseFlag == false) {
//		GUI.Label (Rect (Screen.width / 10, Screen.height / 2, Screen.width / 2, Screen.height / 2), "Points: " + Counter);
		if (restSeconds > 0){
			GUI.Label (Rect (300,0, Screen.height - 20, Screen.width), "Timer: " + textTime);
		if (restSeconds <= 0){
			GUI.Label (Rect (300,0, Screen.height - 20, Screen.width), "You Lose");

	}
	}
	}
	
	if(LoseFlag == true && restSeconds > 0 ){
	
			GUI.Label (Rect (300,0, Screen.height - 20, Screen.width), "Timer: " + restSeconds);	
		
	}
	
	}