const div = document.getElementById('student') ;
let userList = localStorage.getItem('userList') ; 
const course = JSON.parse(localStorage.getItem('course'))
userList = JSON.parse(userList) ; 

const emailSpan = document.getElementById('userEmail') ;
const email = localStorage.getItem('email')
emailSpan.innerText = `${email}(admin)` ; 


//showing all to student for assinging the course 
for( let i of userList)
{
    if(i.role == 'user')
    {
        
        //creadting container for drop down 
        const main = document.createElement('div') ; 
        main.classList = "accordion-item" ; 

        //drop Down Heading Name of student 
        const heading = document.createElement('h2') ;
        heading.classList = "accordion-header" ; 
        heading.id = "headingOne" ; 

        //btn to drop down 
        const btn = document.createElement('button') ;
            btn.setAttribute("class" ,"accordion-button collapsed") ;
            btn.type = "button" ; 
            btn.setAttribute("data-bs-toggle" , "collapse") ;
            btn.setAttribute("data-bs-target" ,`#${i.email}` ) ;
            btn.setAttribute("aria-expanded" , "false") ; 
            btn.setAttribute("aria-controls" , `${i.email}`) ; 
            btn.innerText = `${i.name}` ; 

        //drop down div 
        const dropDiv =document.createElement('div') ; 
            dropDiv.id = `${i.email}` ; 
            dropDiv.setAttribute("class" , "accordion-collapse collapse") ; 
            dropDiv.setAttribute("aria-labelledby" ,"headingOne" ) ; 
            dropDiv.setAttribute("data-bs-parent" , "#accordionExample") ; 

        //dropDown Content Div 
        let dropContentDiv = document.createElement('div') ; 
            dropContentDiv.setAttribute("class" , "accordion-body") ;
            dropContentDiv = courseList(i,dropContentDiv) ; 
            // dropContentDiv.innerHTML = `${courseList(i,course)}` ;  

        //Append dropContentDiv to Dro Div  ; 
        dropDiv.append(dropContentDiv) ; 

        //appending Button in heading by clicking the heading drop down is shown 
        heading.append(btn) ; 

        //appending Heading(incside btn) to the main div 
        main.append(heading) ; 

        //appending bropDiv (inside dropdown content) to main 
        main.append(dropDiv) ; 

        //appending main(inside dropdown , heading ) to the html in div(id = #student)
        div.append(main) ;

    }
}

function makedrop(student) {
    const dropdown =` <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${student.email}" aria-expanded="true" aria-controls="${student.email}">
      ${student.name}
    </button>
  </h2>
  <div id="${student.email}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    </div>
  </div>`
}

function courseList(student , div) 
{  
    for(let i of course)
    {
        const main = document.createElement('div') ; 
                main.setAttribute("class" , "course")
        //add btn  
        const btn = document.createElement('button') ; 
            btn.innerText = 'add' ;
            btn.setAttribute("class" , "btn btn-success") ;
            btn.setAttribute("onclick" , "add(this)") ; 
            btn.id = `btn-${student.email}-${i.title}` ;
        
        //span scourse name 
        const courseName = document.createElement('span') ; 
            courseName.innerText = `${i.title}`
        
        main.append(courseName) ;
        main.append(btn) ;    
        div.append(main) ;
    }

    return div ;
}

// add and remove with single btn 
function add(ef)
{
    const title = ef.parentNode.childNodes[0].innerText;
    const userEmail = ef.parentNode.parentNode.parentNode.id ; 
    if(ef.innerText == 'Remove')
    {
        for(let i of userList)
        {
            if(i.email == userEmail)
            {
                i.course.splice(i.course.indexOf(title) , 1) ; 
            }
        }
        localStorage.setItem("userList" , JSON.stringify(userList)) ; 
        return ;   
    }

    for(let i of userList)
    {
        if(i.email == userEmail)
        { 
            i.course.push(title) ;
        }
    }
    localStorage.setItem("userList" , JSON.stringify(userList)) ; 
}



setInterval(function (){
    for(let i of course)
    {
        for(let j of userList)
        {
            if(j.role == `user`)
            {
                const btnDelRemove =document.getElementById(`btn-${j.email}-${i.title}`) ;  
                if(j.course.includes(i.title)) 
                {
                    // console.log(i.title);
                   btnDelRemove.innerText = `Remove` ; 
                   btnDelRemove.setAttribute("class" , "btn btn-danger")
               }
               else {
                    btnDelRemove.innerText = `add` ; 
                    btnDelRemove.setAttribute("class" , "btn btn-success") ; 
               }
            }
        }
    }
        
} , 10)


function logout()
{
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    alert(`User logout`)
    document.location.href = "./login.html" ; 
}