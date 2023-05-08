const userEmail = document.getElementById('userEmail') ; 
const email = localStorage.getItem("email") ; 
userEmail.innerText = `${email} (User)` ;
const userList =  JSON.parse(localStorage.getItem('userList')) ; 
const course = JSON.parse(localStorage.getItem('course')) ; 
const div = document.getElementById('courses') ; 

function createCard(course ,link )
{
   const card = 
            `
                <img src="${course.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.discription}</p>
                    <a href="${link}" class="btn btn-primary">Learn</a>
                </div>
            ` ;

    return card ; 
}


for(let i of userList)
{
  if(i.email == email)
  {
      for(let j of i.course)
      {
        for(let k of course)
        {
            if(k.title == j )
            {
              let card = document.createElement('div')
                  card.setAttribute('class' ,'card') ;
                  card.setAttribute('style' , 'width: 18rem;')
                  card.innerHTML = createCard(k,'') ; 
                    div.append(card) ; 
            }
} } }  }




//logout function 
function logout()
{
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('name') ; 
    document.location.href = "./login.html" ; 
}