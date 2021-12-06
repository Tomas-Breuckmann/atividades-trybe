document.getElementById("header-container").style.backgroundColor = "green";

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "pink";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";
for (i=0;i<2;i+=1){
document.querySelectorAll(".emergency-tasks h3")[i].style.backgroundColor = "red";
}
for (i=0;i<2;i+=1){
    document.querySelectorAll(".no-emergency-tasks h3")[i].style.backgroundColor = "black";
}
document.getElementById("footer-container").style.backgroundColor = "green";