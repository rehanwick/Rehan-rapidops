alert('lets get started') ; 
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4') 
const box2 = document.getElementById('box2') 
const colorsBox2 = ['black' , 'red' , 'blue']
const colorsBox4 = ['yellow' , 'orange' , 'pink' , 'green' , 'brown']
let j = 0 ; 
let i = 0 ; 

setInterval(() => {
    if(i == 3)
    {
        i = 0 ;
    }
   box2.style =`background-color : ${colorsBox2[i]}`
   i++ ; 
},3000 )



function box1Function()
{
    box3.innerHTML = `3 <br> Oops!!`;
    startChangingColorOnclick();
    setInterval(()=> {
        if(j == 5)
        {
            j = 0 ;
        }
       box4.style =`background-color : ${colorsBox4[j]}`
       j++ ; 
    },5000) ; 
}


function startChangingColorOnclick() {

    document.addEventListener('keydown', (event) => {   
      if(event.key === 'ArrowUp' || event.key === 'ArrowRight')
       { if(j < 5 )
        {
            box4.style =`background-color : ${colorsBox4[j]}`
            j++ ;    
        }
        else {
            j = 0 ; 
            box4.style =`background-color : ${colorsBox4[j]}`
        } }
        else if(event.key === 'ArrowDown' || event.key === 'ArrowLeft')
        {
            if(j < 5 && j >0)
            {
                box4.style =`background-color : ${colorsBox4[j]}`
                j-- ;    
            }
            else {
                j = 0 ; 
                box4.style =`background-color : ${colorsBox4[j]}`
            }
        }
    });
}