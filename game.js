
 function MyFunction(){
 	
  var x=document.getElementById('bg');
  if(x.style.display==="none"){
  	x.style.display="block";
  }else{
  	x.style.display="none";
  	
  }
 }
function abc()
{
	var b=document.getElementById('bg');
	a=document.getElementById('close');
 a.addEventListener("click",function()
 {
 	b.style.display="none"; 
 })

}
setTimeout("abc()",100);

function MyGame(){
	document.location="http://www.download-free-games.com";
}

function MyDragons(){
	var a=prompt("Enter the name of dragons");

	switch(a)
	{
		case "Fire Dragon":
		 alert("Welcome this page");
		 document.location="https://poki.com/en/g/robot-fire-dragon";
		 break;

		 case "Lightning Dragon":
		 alert("Welcome this page");
		 document.location="https://www.mobiles24.co/downloads/s/634462-320-electric_lightning_dragon_keyboard";
		 break;

		 case "Water Dragon":
		  alert("Welcome this page");
		 document.location="https://apkpure.com/sea-dragon-water-beast-survival/com.confun.sea.dragon.beast";
		 break;

		 case "Wind Dragon":
		  alert("Welcome this page");
		 document.location="https://www.miniclip.com/games/dragon-merge-wind/en/";
		 break;

		 case "Shadow Dragon":
		  alert("Welcome this page");
		 document.location="https://apk4all.com/android/apps/dragon-shadow-battle-super-hero-legend-mod/";
		 break;

		 default:
		 alert("Not a dragon");

	}
}
function Myimg(){
	var b = prompt("Enter the dragos name");


	switch(b)
	{
		case "Fire Dragon":
		 alert("Welcome this page");
		 document.location="https://wallpapercave.com/fire-dragon-wallpaper";
		 break;

		 case "Lightning Dragon":
		 alert("Welcome this page");
		 document.location="https://wallpaperaccess.com/lightning-dragon";
		 break;

		 case "Water Dragon":
		  alert("Welcome this page");
		 document.location="https://wallpapercave.com/water-dragon-wallpaper";
		 break;

		 case "Wind Dragon":
		  alert("Welcome this page");
		 document.location="https://wallpaperaccess.com/wind-dragon";
		 break;

		 case "Ice Dragon":
		  alert("Welcome this page");
		 document.location="https://wallpaperaccess.com/ice-dragon";
		 break;

		 default:
		 alert("Not a dragon");

	}

}

function Myimg2(){
	document.location="https://wallpapercave.com/dark-lord-wallpapers";
}

function Myimg3(){
	document.location="https://unsplash.com/s/photos/dark-night";
}