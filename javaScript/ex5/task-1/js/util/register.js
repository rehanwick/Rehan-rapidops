
const form = document.forms[0] ; 
// console.log(form);
// localStorage.setItem('userList' , []) ;
let userList = [] ; 

function regester() {
    const name = form.name.value ; 
    const email = form.email.value ; 
    const password = form.password.value ; 
    const repassword = form.repass.value ;
    if(password != repassword)
    {
        alert(`password and re-password does not match`) ; 
        return
    } 
    const role = form.role.value ; 
    // console.log(role);
    const obj = {
        name : name ,
        email : email , 
        password : password ,
        role : role  , 
        course : []
    }
    userList = localStorage.getItem('userList') || [] ;
    if(userList.length != 0)
    {
        userList = JSON.parse(userList);
    } 
    userList.push(obj); 
    localStorage.setItem('userList' , JSON.stringify(userList)) ;
    alert(`user ${name} has been created you can log in now `) ; 
 }

