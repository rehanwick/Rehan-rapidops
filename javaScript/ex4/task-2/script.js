const Fname = document.getElementById('fistName') ; 
const lastName = document.getElementById('lastName') ; 
const main = document.getElementById('div') ; 
const btn = document.getElementById('btn') ; 
let innerContext ; 
// let i = 1 ; 


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
    


    div.append(nameDiv) ; 
    div.append(lastNameDiv) ; 
    div.append(editBtn) ; 
    div.append(delBtn) ; 
    main.append(div) ; 
}

function editText(ef)
{
    ef = ef.parentNode.children ;  
    const name = ef[0] ; 
    const lastname = ef[1] ; 
    Fname.value =  name.textContent ; 
    lastName.value = lastname.textContent ; 
    innerContext = ef ; 
    btn.textContent = 'update'
}

function deletef(ef) {
     ef.parentNode.remove() ;
}