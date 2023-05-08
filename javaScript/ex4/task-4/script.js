const Fname = document.getElementById('fistName') ; 
const lastName = document.getElementById('lastName') ; 
const main = document.getElementById('div') ; 
const btn = document.getElementById('btn') ; 
let innerContext ; 
let count = 0 ; 
const set1 = new Set() ; 

const array = [
    {
        name : 'rehan' ,
        last : 'shaikh' 
    } ,
    {
        name : 'karnav' , 
        last : 'gamit'
    } , 
    {
        name : 'kairav' ,
        last : 'gamit'
    } ,
    {
        name : 'sagar' , 
        last : 'adesara'
    } , 
    {
        name : 'pawan' ,
        last : 'khandwa'
    } , 
    {
        name : 'namrata' , 
        last : 'vyas'
    } , 
    {
        name : 'jash' , 
        last : 'tamakuwala'
    } , 
    {
        name : 'ravinder' , 
        last : 'sing'
    } , 
    {
        name : 'praduman' , 
        last : 'sarkar'
    } , 
    {
        name : 'hitesh' , 
        last : 'zope'
    }
] ; 



function add()
{
    if(btn.textContent == 'update')
    {  
        const ef = innerContext;
        const name = ef[0] ; 
        const lastname = ef[1] ;    
        name.innerText = Fname.value ; 
        lastname.innerText = lastName.value ; 
        btn.textContent = 'add'
        return ; 
    }

    const div = document.createElement('div') ; 
    // div.id = `${i}-div` ; 
    // i++ ; 
    
    //Check btn 
    const checkBtn = document.createElement("INPUT"); 
    checkBtn.setAttribute("type", "checkbox");
    checkBtn.setAttribute("onclick" , "check(this)" )
    checkBtn.classList.add("sub");


    
    //delete Btn
    const delBtn = document.createElement('button') ;
    delBtn.classList.add("btn");
    delBtn.classList.add("btn-danger"); 
    delBtn.style.margin = "10px"
    delBtn.innerText = 'Delete' ;
    // delBtn.value = div.id ; 
    // delBtn.addEventListener("click",deletef.call(this , div.id)) ;
    delBtn.setAttribute("onclick" , "deletef(this)");
    
    //name Span 
    const nameDiv = document.createElement('span') ;
    nameDiv.style.margin = "10px" ; 
    nameDiv.style.padding = "10px" ; 
    nameDiv.style.borderRadius = "5px"
    nameDiv.style.backgroundColor = '#F2F2F2' ; 
    
    
    const lastNameDiv = document.createElement('span') ; 
    lastNameDiv.style.margin = "10px" ; 
    lastNameDiv.style.padding = "10px" ; 
    lastNameDiv.style.borderRadius = "5px"
    lastNameDiv.style.backgroundColor = '#F2F2F2' ; 

    const addName = Fname.value ; 
    const addlastName = lastName.value ; 
    nameDiv.innerText = addName ; 
    lastNameDiv.innerText = addlastName ; 
    
    //Edit Btn
    const editBtn = document.createElement('button') ; 
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-success");
    editBtn.style.margin = "10px"
    editBtn.innerText = 'Edit' 
    editBtn.value = div.id ; 
    editBtn.setAttribute("onclick" , "editText(this)");
    // editBtn.addEventListener("click", ) ;
    

    div.append(checkBtn) ; 
    div.append(nameDiv) ; 
    div.append(lastNameDiv) ; 
    div.append(editBtn) ; 
    div.append(delBtn) ; 
    main.append(div) ; 
}

function editText(ef)
{
    ef = ef.parentNode.children ;  
    const name = ef[1] ; 
    const lastname = ef[2] ; 
    console.log(lastname);
    Fname.value =  name.textContent ; 
    lastName.value = lastname.textContent ; 
    innerContext = ef ; 
    btn.textContent = 'update'
}

function deletef(ef) {
     ef.parentNode.remove() ;
     count-- ; 
}

function render() {

    for(let i of array)
    {

        const div = document.createElement('div') ; 

           //Check btn 
           const checkBtn = document.createElement('input') ; 
           checkBtn.setAttribute("type" , "checkbox") ; 
           checkBtn.setAttribute("onclick" , "check(this)" )
           checkBtn.classList.add("sub");
    
          //delete Btn
          const delBtn = document.createElement('button') ;
          delBtn.classList.add("btn");
          delBtn.classList.add("btn-danger"); 
          delBtn.style.margin = "10px"
          delBtn.innerText = 'Delete' ;
          // delBtn.value = div.id ; 
          // delBtn.addEventListener("click",deletef.call(this , div.id)) ;
          delBtn.setAttribute("onclick" , "deletef(this)");
          
          //name Span 
          const nameDiv = document.createElement('span') ;
          nameDiv.style.margin = "10px" ; 
          nameDiv.style.padding = "10px" ; 
          nameDiv.style.borderRadius = "5px"
          nameDiv.style.backgroundColor = '#F2F2F2' ; 
          
          
          const lastNameDiv = document.createElement('span') ; 
          lastNameDiv.style.margin = "10px" ; 
          lastNameDiv.style.padding = "10px" ; 
          lastNameDiv.style.borderRadius = "5px"
          lastNameDiv.style.backgroundColor = '#F2F2F2' ; 
      
          nameDiv.innerText = i.name ; 
          lastNameDiv.innerText = i.last ; 
          
          //Edit Btn
          const editBtn = document.createElement('button') ; 
          editBtn.classList.add("btn");
          editBtn.classList.add("btn-success");
          editBtn.style.margin = "10px"
          editBtn.innerText = 'Edit' 
          editBtn.value = div.id ; 
          editBtn.setAttribute("onclick" , "editText(this)");
          // editBtn.addEventListener("click", ) ;
    
        
        div.append(checkBtn) ; 
        div.append(nameDiv) ; 
        div.append(lastNameDiv) ; 
        div.append(editBtn) ; 
        div.append(delBtn) ; 
        main.append(div) ; 
    }

}

function check(ef) {
    
    if(ef.checked)
    {
        set1.add(ef) ; 
        count++ ;  
    }
    else {
        set1.delete(ef); 
        count-- ; 
    }
}

const checbtn = document.getElementById('check') ; 

function deleteall()
{
    for(let i of set1)
    {
        i.parentNode.remove() ; 
    }
    count = 0 ;
    checbtn.checked = false ; 
}

const ar = document.getElementsByClassName('sub') ; 

function selectAll() 
{
    if(checbtn.checked)
     { 
            for( let i of ar )
            {
                i.checked = true ; 
                set1.add(i) ; 
            }
        count = ar.length ; 
     }
     else {
        for( let i of ar )
        {
            i.checked = false ; 
            set1.delete(i) ; 
        }
        count = 0 ;
    }
}


setInterval(function () {
    document.getElementById('total').innerText = count ; 
} ,10); 

//check function




//////////////////////////////////////////////////////////////


