
// $(document).ready(function(){
//   $("#hide").click(function(){
//     $("p").hide();
//   });
//   $("#show").click(function(){
//     $("p").show(500);
//   });
// });
// $(document).ready(function () {
//     $("click").click(function () {
//         $("p").toggle();
//     })
// });

// su kien cho ca button
// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").toggle();
//   });
// });

//  hien hop
// tuong tu voi toogle , fadeOut
// fadeTo("slow", 0.1) chuyen ve ops
// $("button").click(function () {
//     $("._1").fadeIn();
//     $("._2").fadeIn("slow");
//     $("._3").fadeIn(3000);
    
// });

//slie show
// $(document).ready(function () {
//     $(".click").click(function () {
//     //    $(".box").slideDown("slow");
//     //     $(".box").slideUp("slow");
//         //  $(".box").slideToggle();
//     });

// });


// add li html
// $(document).ready(function () {
//     $("#click").click(function () {
//         $("ol").append("<li> Items </li>");
        
//     });
// });


// add text doccument
// function appendText() {
//   var txt1 = "<p>Text.</p>";        // Create text with HTML
//   var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
//   var txt3 = document.createElement("p");
//   txt3.innerHTML = "Text.";         // Create text with DOM
//   $("body").append(txt1, txt2, txt3);   // Append new elements
// }


// funtion new text add
// function afterText(params) {
//     var text1 = "<b> Test </b>";
//     var text2 = $("<i> </i>").text("Text");
//     var text3 = document.createElement("b");
//     var space = "</br>"
//     text3.innerHTML = "Jquery";

//     $("img").after(text1,text2,text3,space);
    
// }


// $(document).ready(function () {
// //     $("#click").click(function () {
// //         $("#box").remove();
// //     });
// //     $("#click1").click(function () {
// //         $("#box").empty();
// //     });
// //     $("#click2").click(function () {
// //         $("p").remove(".test");
// //         alert("Đã xóa thẻ thành công ")
// //     });
// //   $("#click3").click(function () {
// //         $("h1 , p ").addClass("test");
// //         alert("Đã thêm class  thành công ")
// //   });
// //     $("#click4").click(function () {
// //         $("h1").removeClass("test");
// //         alert("")
// //     });
// //     $(("#toggle")).click(function () {
// //         $("h1 , p ").toggleClass("test");
        
// //     });
// //     $("#click5").click(function (e) {
// //         e.preventDefault(
// //             alert("bg = " + $("p").css("background-color"))
// // );
        
// //     });

// });
// $(document).ready(function(){
// //   $("#click6").click(function(){
// // $("p").css({"background-color": "yellow", "font-size": "200%"});


// //   $("#click7").click(function(){
// //     var txt = "";
// //     txt += "Width of div: " + $("#div1").width() + "</br>";
// //     txt += "Height of div: " + $("#div1").height() + "</br>";
// //     txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
// //     txt += "Inner height of div: " + $("#div1").innerHeight();
// //       $("#div1").html(txt);
      
// //   });


// });

// console.log("helo")
// $(document).ready(function () {
    // $("#click7").click(function () { 
    //     // display elements box
        
    //     // var txt = "";
    //     // txt += "Width of div " + $("#box").width() + "</br>";
    //     // txt += "Height of div " + $("#box").height() + "</br>";
    //     // txt += "Inner Width of div : " + $("#box").innerHeight(); 
    //     // txt += "Inner Height of div " + $("#box").innerWidth();
    //     // $("#box").html(txt);

    //     //display value window

          
    // });
    // $("#click8").click(function () { 
    //     //display value window
    //          var txt = "";
    // txt += "Document width/height: " + $(document).width();
    // txt += "x" + $(document).height() + "\n";
    // txt += "Window width/height: " + $(window).width();
    // txt += "x" + $(window).height();
    // alert(txt);
          
    // });
    
    // set value display
    //     $("#click9").click(function () { 
    //         $("#box").width(400).height(400);;
    // });
    
    // $("#click10").click(function (e) { 
    //     e.preventDefault(
    //         $("#box").load("test.txt")
    //     );
        
    // });
    // $("#click11").click(function () {
    //         var x = $("form").serializeArray();
    //         $.each(x, function (i,field)  { 
    //              $("#box").append(field.name + ":" + field.value + "" );
    //         });
    // });
// });
//     $(document).ready(function(){
// //   $("#click11").click(function(){
// //     var x = $("form").serializeArray();
// //     $.each(x, function(field){
// //       $("#box").append(field.name + ":" + field.value + " ");
// //     });
//         //   });
        

// });

$(document).ready(function () {
    $("#click12").click(function () { 
        console.log ("You click a paragarh")
        
    });
    $( "#click13" ).on( "click", function() {
    console.log( "click" );
});
});

