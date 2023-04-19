/*var path = document.querySelector('path');
let length = path.getTotalLength();
path.style.transition = path.style.webkitTransition = 'none';*/

/*path.setAttribute("stroke", "#000");
path.setAttribute("fill", "none");
path.setAttribute("stroke-dasharray", "");
path.setAttribute("stroke-dashoffset", "0.00");*/

/*function myFunc(){*/
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}





async function iconDraw(){
     let icons = document.getElementById('icon');
     let paths = icons.querySelectorAll('path');
     console.log(paths);

        for(let i = 0; i < paths.length; i++){
        /*let length = paths[i].getTotalLength();*/
        paths[i].style.transition = paths[i].style.webkitTransition = 'none';
        paths[i].style.display = 'none';
        paths[i].setAttribute("stroke", "#000");
        paths[i].setAttribute("fill", "none");
        paths[i].setAttribute("stroke-dasharray", "");
        paths[i].setAttribute("stroke-dashoffset", "0.00");
      
     }
    
     for(let i = 0; i < paths.length; i++){
        let length = paths[i].getTotalLength();
       
        paths[i].style.transition = paths[i].style.webkitTransition = 'none';
        paths[i].style.display = '';
        paths[i].style.strokeDasharray = length + ' ' + length;
        paths[i].style.strokeDashoffset = length;
        paths[i].getBoundingClientRect();
        paths[i].style.transition = paths[i].style.webkitTransition = 'stroke-dashoffset 1s ease-in-out';
        paths[i].style.strokeDashoffset = 0;
        

        await sleep(25);
        /*paths[i].setAttribute("fill", "#000");*/

     }


    }
    async function drawText(){
      
      let divText = document.getElementById('textt');  
      let paths = divText.querySelectorAll('path');
        console.log(paths);
   
           for(let i = 0; i < paths.length; i++){
           /*let length = paths[i].getTotalLength();*/
           paths[i].style.transition = paths[i].style.webkitTransition = 'none';
           paths[i].style.display = 'none';
           paths[i].setAttribute("stroke", "#000");
           paths[i].setAttribute("fill", "none");
           paths[i].setAttribute("stroke-dasharray", "");
           paths[i].setAttribute("stroke-dashoffset", "0.00");
         
        }
        await sleep(2300);
        for(let i = 0; i < paths.length; i++){
           let length = paths[i].getTotalLength();
          
           paths[i].style.transition = paths[i].style.webkitTransition = 'none';
           paths[i].style.display = '';
           paths[i].style.strokeDasharray = length + ' ' + length;
           paths[i].style.strokeDashoffset = length;
           paths[i].getBoundingClientRect();
           paths[i].style.transition = paths[i].style.webkitTransition = 'stroke-dashoffset 0.5s ease-in-out';
           paths[i].style.strokeDashoffset = 0;
           
   
           await sleep(50);
           /*paths[i].setAttribute("fill", "#000");*/
   
        }
   
   
       }
       async function drawLines(){
      
         let divText = document.getElementById('lines');  
         let paths = divText.querySelectorAll('path');
           console.log(paths);
      
              for(let i = 0; i < paths.length; i++){
              /*let length = paths[i].getTotalLength();*/
              paths[i].style.transition = paths[i].style.webkitTransition = 'none';
              paths[i].style.display = 'none';
              paths[i].setAttribute("stroke", "#000");
              paths[i].setAttribute("fill", "none");
              paths[i].setAttribute("stroke-dasharray", "");
              paths[i].setAttribute("stroke-dashoffset", "0.00");
            
           }
           await sleep(1000);
           for(let i = 0; i < paths.length; i++){
              let length = paths[i].getTotalLength();
             
              paths[i].style.transition = paths[i].style.webkitTransition = 'none';
              paths[i].style.display = '';
              paths[i].style.strokeDasharray = length + ' ' + length;
              paths[i].style.strokeDashoffset = length;
              paths[i].getBoundingClientRect();
              paths[i].style.transition = paths[i].style.webkitTransition = 'stroke-dashoffset 5s ease';
              paths[i].style.strokeDashoffset = 0;
              
      
              /*await sleep(500);
              paths[i].setAttribute("fill", "#000");*/
      
           }
      
      
          }
          async function fill(){
            await sleep(5000);
            let paths = document.querySelectorAll('#icon.cls-10');
            for(let i = 0; i < paths.length; i++){
            paths[i].style.transition = paths[i].style.webkitTransition = 'none';
            paths[i].style.fill = 'white';
            paths[i].style.transition = paths[i].style.webkitTransition = 'fill-opacity 2s easy-in';


            }
          }
          async function fillText(){
            await sleep(5000);
            let paths = document.querySelectorAll('#textt.cls-10');
            for(let i = 0; i < paths.length; i++){
            paths[i].style.transition = paths[i].style.webkitTransition = 'none';
            paths[i].style.fill = 'white';
            paths[i].style.transition = paths[i].style.webkitTransition = 'fill-opacity 2s easy-in';


            }
          }
          async function iconFill(){
            let icons = document.getElementById('icon');
            await sleep(2000);
            let paths = document.querySelectorAll('.l');
            for(let i = 0; i < paths.length; i++){
            paths[i].style.transition = paths[i].style.webkitTransition = 'none';
            paths[i].style.opacity = '1';
            paths[i].style.transition = paths[i].style.webkitTransition = 'opacity 1.5s';
            }
          }


iconDraw();

drawLines();
drawText();
fill();
iconFill();
    