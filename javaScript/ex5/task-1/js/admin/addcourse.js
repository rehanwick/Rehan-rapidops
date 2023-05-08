const form = document.forms[0] ; 
const email =  localStorage.getItem('email') ; 
let course = JSON.parse(localStorage.getItem('course')) || [] ;


function addCourse()
{
    const title = form.title.value.trim(); 
    if(title.includes(' '))
    {
        alert(`In "${title}" , Please dont use space in title`) ; 
        return ; 
    }
    const discription1 = form.discription.value ; 
    const img = form.img.value ; 
    const obj = {
        title : title , 
        discription :  discription1 , 
        img :  img 
    }
    course.push(obj) ; 
    localStorage.setItem('course' , JSON.stringify(course)) ;
}
