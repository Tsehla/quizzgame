var showId=1;
var hideId=1;

//hide show dom function

function domHideOrShow(){
 
 
if(showId!=10 || showId!=6){
//top content
    if(hideId>4){
    document.getElementById(50+hideId-5).style.display="none";
    }
    document.getElementById(showId+50).style.display="block";



//middle content
//hide previous
    document.getElementById(hideId-1).style.display="none";
    document.getElementById(showId).style.display="block";
// bottom content
    document.getElementById(showId+30).style.display="none";
    




   }
//show result part 1
if(showId==6){
     alert("your part 1 result is ");

}
//part 2 result
if(showId==11){
      alert("your part 2 results is");
      showId=0;
      location.reload();
     
 }

showId=showId+1;
hideId=showId;


console.log("this is hide "+hideId);

 
}
//down up left right center  button click even
function tempMessage(){
     alert("function not implemented use 'D'/'down' button to play");
}