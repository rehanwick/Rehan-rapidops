// checking if user is login 
if(!email)
{
    alert(`please login`) ; 
    window.location.href = "./login.html" ;  
}

// course is empty  
if(!course || course.length == 0)
{
    div.innerHTML = `<h3 style="margin-top : 20px; margin-bottom: 40px; margin-left:100px" >There is no course please add some course <a href='./addCourse.html'>ADD-COURSE</a></h3>` ; 
}
