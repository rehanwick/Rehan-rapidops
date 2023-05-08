const emailSpan = document.getElementById('userEmail') ; 
const email = localStorage.getItem('email')
let  course = localStorage.getItem('course') ; 

emailSpan.innerText = `${email}(admin)` ; 

//displaying add Course 
const div = document.getElementById('course') ; 


function logout()
{
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('name') ; 
    alert(`User logout`)
    document.location.href = "./index.html" ; 
}


course = JSON.parse(course) ; 

for(let i of course)
{
    let card = document.createElement('div')
    card.setAttribute('class' ,'card') ;
    card.setAttribute('style' , 'width: 18rem;')
    card.innerHTML = createCard(i,'./assign.html') ;  
    div.append(card)
}


function createCard(course ,link )
{
   const card = 
            `
                <img src="${course.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.discription}</p>
                    <a href="${link}" class="btn btn-primary">Assign Course</a>
                </div>
            ` ;

    return card ; 
}
