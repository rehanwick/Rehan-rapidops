if(!email)
{
    alert(`please login`) ; 
    window.location.href = "./login.html" ; 
}

for ( let i of  userList )
{
    if(i.email == email)
    {
        if(i.course.length == 0)
        {
            div.innerHTML = `<h3 style="margin-top : 20px; margin-bottom: 40px; margin-left:100px" >You have not assign any courses</h3>` ; 
        }
    }
}
