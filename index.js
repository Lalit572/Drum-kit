
//for click event 
var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",clicks);
    document.querySelectorAll(".drum")[i].addEventListener("mouseover",clicks1);
    document.querySelectorAll(".drum")[i].addEventListener("mouseout",clicks2);

}
function clicks()
{
        var buttonData=this.innerHTML;
    switch(buttonData)
    {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
             audio.play();
            break; 

        case "a":
                var audio= new Audio("sounds/tom-2.mp3");
                 audio.play();
                break;
                
        case "s":
                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                break; 
                
        case "d":
                var audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                break; 

        case "j":
            var audio= new Audio("sounds/snare.mp3");
             audio.play();
            break; 
            
        case "k":
            var audio= new Audio("sounds/crash.mp3");
             audio.play();
            break; 

        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
             audio.play();
            break; 

        default:console.log(buttonData);  
        
    }
    soundPlay(buttonData);  

    buttonAnimation(buttonData);

}

//for mouse hover and mouse out event

function clicks1()
{

        var buttonData=this.innerHTML;
    switch(buttonData)
    {
        case "w":
            this.style.color="white";
            break; 

        case "a":
             this.style.color="white";
                break;
                
        case "s":
            this.style.color="white";
                break; 
                
        case "d":
            this.style.color="white";
                break; 

        case "j":
            this.style.color="white";
            break; 
            
        case "k":
            this.style.color="white";
            break; 

        case "l":
            this.style.color="white";
            break; 

        default:console.log(buttonData);    
    }

    
}

function clicks2()
{

        var buttonData=this.innerHTML;
    switch(buttonData)
    {
        case "w":
            this.style.color="#DA0463";
            break; 

        case "a":
             this.style.color="#DA0463";
                break;
                
        case "s":
            this.style.color="#DA0463";
                break; 
                
        case "d":
            this.style.color="#DA0463";
                audio.play();
                break; 

        case "j":
            this.style.color="#DA0463";
            break; 
            
        case "k":
            this.style.color="#DA0463";
            break; 

        case "l":
            this.style.color="#DA0463";
            break; 

        default:console.log(buttonData);    
    }
}



//for key event
document.addEventListener("keydown",function(event)
{
    soundPlay(event.key);
    buttonAnimation(event.key);
});
function soundPlay(key)
{
    switch(key)
    {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
             audio.play();
            break; 

        case "a":
                var audio= new Audio("sounds/tom-2.mp3");
                 audio.play();
                break;
                
        case "s":
                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                break; 
                
        case "d":
                var audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                break; 

        case "j":
            var audio= new Audio("sounds/snare.mp3");
             audio.play();
            break; 
            
        case "k":
            var audio= new Audio("sounds/crash.mp3");
             audio.play();
            break; 

        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
             audio.play();
            break; 

        default:console.log(buttonData);    
}
}


// function for animation

function buttonAnimation(currentKey)
{
    var active = document.querySelector("."+ currentKey);
    active.classList.add("pressed");
    setTimeout(function()
    {
        active.classList.remove("pressed");
    },200);
}
