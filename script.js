
function navbar(){
    document.querySelector('body').addEventListener('wheel',(dets)=>{
    if(dets.deltaY >0){
        gsap.to('nav',{
            duration:0.25,
            transform: `translateX(-50%) translateY(-150%)`
        })
    }else{
        gsap.to('nav',{
            duration:0.25,
            transform: `translateX(-50%) translateY(0%)`
        })
    }
})
}
navbar(); 




var cflower = document.querySelectorAll(".flower")
var stem = document.querySelectorAll(".js-stem-path")

var movespeed =0;

var stemPath = "M 81 378 Q 81 157.5 100.93475257984589 0.000006757501408438671 m -5.0013049484030825 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0";
var stemvalue =100.93475257984589;

cflower.forEach((elem,index)=>{
    var correspondingStem = stem[index];
    elem.addEventListener("mousemove",(dets)=>{
    movespeed =dets.movementX*10;
    
    movespeed = Math.max(-50, Math.min(50, movespeed));
    
    // cflower.style.transform = `translateX(${dets.movementX}%)`
        
        
    if(index === 4){
        gsap.to(elem,{
            transform :`translateX(${movespeed/2}% ) rotate(${movespeed/3}deg)`,
            // x: `${movespeed}%`,   // Using x instead of transform for better performance
            // rotation: movespeed,  // Rotate based on movementX
            // duration: 0.2,        // Smooth animation duration
            // ease: "power1.out"
        })
    }else{
        gsap.to(elem,{
            transform :`translateX(${movespeed}% ) rotate(${movespeed}deg)`,
            // x: `${movespeed}%`,   // Using x instead of transform for better performance
            // rotation: movespeed,  // Rotate based on movementX
            // duration: 0.2,        // Smooth animation duration
            // ease: "power1.out"
        })
    }
    // gsap.to(elem,{
    //     transform :`translateX(${movespeed}% ) rotate(${movespeed}deg)`,
    //     // x: `${movespeed}%`,   // Using x instead of transform for better performance
    //     // rotation: movespeed,  // Rotate based on movementX
    //     // duration: 0.2,        // Smooth animation duration
    //     // ease: "power1.out"
    // })

    stemvalue = Math.max(20, Math.min(180, Math.abs(movespeed + stemvalue))); 
    stemPath = `M 105 312 Q 105 130 ${stemvalue} 0.39950113411240107 m -6.288153423427375 -6 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0`;
    gsap.to(correspondingStem,{
        attr:{
            d:stemPath,
            
        }
    })
    
})

})



var valueA = 100.93475257984589;
var maxValue = 120;
var direction =1;
var minValue = 80;
var valueB=0;


setInterval(()=>{
    valueA+=direction;
    valueB+=direction
    if(valueA >= maxValue){
        direction--;
    }else if(valueA <= minValue){
        direction++;

    }

    stemPath = `M 105 312 Q 105 130 ${valueA} 0.39950113411240107 m -6.288153423427375 -6 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0`;
    gsap.to('.stem path',{
        attr:{
            d:stemPath
        }
    })
    gsap.to('.flower',{
        transform :`translateX(${valueB/5}% ) rotate(${valueB/5}deg)`,
    })
},100)


    





