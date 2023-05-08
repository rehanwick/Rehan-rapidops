const state = document.getElementById('state') ; 
const city = document.getElementById('city') ; 
const country = document.getElementById('country') ; 
const obj = {
    india : {
        gujrat : ['Ahmedabad' , 'gandhinagar' , 'surat'] , 
        mp : ['indore' , 'bhopal' , 'ujjain'] , 
        rajisthan : ['jaipur' , 'jodhpur' , 'jaisalm'] 
    } ,
    china : {
         a : ['a1' , 'a2' , 'a3' ] , 
         b : ['b1' , 'b2' , 'b3'] , 
         c : ['c1' , 'c2' , 'c3']
    } , 
    USA : {
        x : ['x1','x2','x3'] , 
        y: ['y1' ,'y2' , 'y3'] , 
        z : ['z1' , 'z2' ,'z3']
    }
}

function statef()
{
    const current  = country.value ; 
    const selectC = document.getElementById('state') ; 
    selectC.length = 1 ; 
    for(let i in obj[current] )
    {
        // console.log(i);   
        const option = document.createElement('option') ;
        option.setAttribute("value" , `${i}`) ;
        option.innerText = i ; 
        selectC.append(option) ;
    }
}

function cityf() 
{
    const countryt = country.value ; 
    const current = state.value ; 

    const con = obj[countryt]; 
    const cit = con[current];   
    const selectC = document.getElementById('city') ; 
    selectC.length = 1 ;        
    for(let i of cit)
    {
        const option = document.createElement('option') ;
        option.setAttribute("value" , `${i}`) ;
        option.innerText = i ; 
        selectC.append(option) ;   
    }
}
