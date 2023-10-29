var randomnumber1 = Math.floor(Math.random()*100)+1;

if(randomnumber1%2===0)
{
    document.querySelector("h1").innerHTML="Heads";
    var imagesrc2 = "images\heads" + randomnumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imagesrc2);
    console.log(imagesrc2+"  "+ h);
}
else
{
    document.querySelector("h1").innerHTML="Tails";
    var imagesrc2 = "images\tails" + randomnumber1 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imagesrc2);
    console.log(imagesrc2+"  "+t);
}