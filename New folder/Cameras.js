#pragma strict

var cam1 : Camera;
var cam2 : Camera;
var cam3 : Camera;

function Start () {
	cam1.enabled = true;
   	cam3.enabled = false; 
   	cam2.enabled = false;
}

function Update () {
if (Input.GetKeyDown(KeyCode.V)) {
     cam1.enabled = !cam1.enabled;
     cam2.enabled = !cam2.enabled;
 }
Ændring til Cam
}