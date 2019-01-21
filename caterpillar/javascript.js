/*var current=1;
slider();
function slider()
{
    if(current==1)
    {
        document.getElementById("left").style.color="rgba(0,0,0,0.5)";
    }
    if(current==5)
    {
        document.getElementById("right").style.color="rgba(0,0,0,0.5)"
    }
    else if(current==2||current==3||current==4){
        document.getElementById("right").style.color="#f7c710";
        document.getElementById("left").style.color="#f7c710";
    }
}
function moveright(){
    if(current<6){
   var imgs = document.getElementsByClassName("slid");
   var alleexone= document.querySelector(".images>div:not(:first-child)");
   current++;
   slider();
   imgs[current-1].style.marginLeft="-10%";
   imgs[current].style.marginLeft="0.0%";
    }
}
function moveleft(){
    if(current>1){
    var imgs = document.getElementsByClassName("slid");
    var alleexone= document.querySelector(".images>div:not(:first-child)");
    current--;
    slider();
    imgs[current+1].style.marginLeft="100%";
    imgs[current].style.marginLeft="0.00%";
    }
 }
 function currentslide(n){
     
     current=n;
     
        moveright(n+1);
     moveleft(n-1);

     
 }*/
 function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    

    
  }