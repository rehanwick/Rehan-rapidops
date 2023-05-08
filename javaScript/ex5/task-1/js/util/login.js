
const form = document.forms[0] ; 
console.log(form);
//getting data from local Storage 
let userList = localStorage.getItem('userList') ; 
if(userList.length != 0)
{
    userList = JSON.parse(userList);
} 

// console.log(userList);
//login function
function login()
{
    const email = form.email.value  ; 
    const password = form.password.value ; 
    
    for( let i of userList)
    {
         console.log(i);
        if(i.email == email)
        {
            
            if(i.password == password)
            {
                localStorage.setItem("email" , email) ; 
                localStorage.setItem("role" , i.role) ; 
                localStorage.setItem("name" , i.name) ; 
                if(i.role == 'admin')
                {
                    window.location.href = "./adminBoard.html"
                }
                else {
                    window.location.href = "./userBoard.html" ; 
                }
                return ; 
            }
        }
    }
    alert(`Invalid User`) ;    
}
