/*global $*/
//main index js
$(".headshot").mouseenter(function(){
    console.log("worked");
    $(".headshot").css("display", "none");
});

$(".headshot").mouseleave(function(){
    console.log("worked@");
    $(".headshot1").css("display", "block");
});
$(".pic").mouseenter(function(){
    console.log("worked");
    $(".pic").css("display", "none");
});

$(".pic").mouseleave(function(){
    console.log("worked@");
    $(".pic1").css("display", "block");
});




//about me js
var commentlist=["Good Job","You can do better","I dont know what should i say","Code Nation is best"];
var commentname=["Idk","someone","anyone","Hui"];

function commentmethod(){
commentname.forEach(function(eachname, index){

            $("#names").append("<p>"+eachname+":</p>");
        });

commentlist.forEach(function(eachcomment, index){

            $("#comments").append("<p>"+eachcomment+"</p>");
        });
}
commentmethod();

function addcomment(){
    var inputcomment=$("#commentinput").val();
    commentlist.push(inputcomment);
    
    var inputname=$("#nameinput").val();
    commentname.push(inputname);
    
    commentmethod();
}
function emptystring(){
    $("#names").empty();
    $("#comments").empty();
}


$("#comment").click(function() {
    emptystring();
    addcomment();
  
});


//profoilo js

