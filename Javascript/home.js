
function myFunction() {
    document.getElementById("mydiv_sidebar").style.backgroundColor = "lightblue";
    document.getElementById("color_change").style.backgroundColor = "lightblue";
    document.getElementById("text_color").style.color = "lightblue";
    document.getElementById("button").style.backgroundColor = "lightblue";
    document.getElementById("openbtn").style.backgroundColor = "lightblue";
    document.getElementById("mySidepanel").style.backgroundColor = "lightblue";
    // let a = document.querySelectorAll(".color_change").style.backgroundColor = "lightblue";

    // for (let i = 0; i < a.length; i++) {
    //     // console.log(a[i])
    // }

}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }