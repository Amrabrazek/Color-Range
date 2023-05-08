
var paragraph = document.querySelector("p");

var ranges = document.querySelectorAll("input[type=range]")


for (var i = 1; i < ranges.length+1; i++)
{
    document.querySelector("input[type=range]:nth-of-type("+i+")").addEventListener('input',function(){

        var red = document.querySelector("input[type=range]:nth-of-type(1)").value
    
        var green = document.querySelector("input[type=range]:nth-of-type(3)").value
    
        var blue = document.querySelector("input[type=range]:nth-of-type(2)").value
    
        var opacity = document.querySelector("input[type=range]:nth-of-type(4)").value

        paragraph.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        
        paragraph.style.opacity = opacity
    })
}


