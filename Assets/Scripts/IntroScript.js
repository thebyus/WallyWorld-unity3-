#pragma strict

var IntroTexture : Texture;

function Start () {

}

function Update () {

	   if(Input.anyKey){
		Application.LoadLevel(1);
	}

}

function OnGUI(){

	GUI.DrawTexture(Rect(10,10,Screen.width-20, Screen.height-20), IntroTexture);
	
	}