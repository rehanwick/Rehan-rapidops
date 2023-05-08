
// Adding pre-Define Courses to local-storage 
// if you does not content 

const course = [
    {
        title: 'HTML', discription: 'THIS IS  THE html Discription', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png'
    } ,
    {
        title: 'JavaScript', discription: 'JavaScript , promises ,  async await  , Hosting , setTimeout() ,  setInterbal()  \nDOM ', img: 'https://www.interviewbit.com/blog/wp-content/uploads/2021/08/javascript.jpg'
    } , 
    {
        title: 'Node.js', discription: 'node.js this is the discription of node js', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
    } 
]

if(localStorage.getItem('course') == undefined)
{
    localStorage.setItem('course' , JSON.stringify(course)) ;
}


 const user = [
    {
         course : ['SAMPLE', 'JavaScript', 'Node.js'] , 
        email: "rs0327884@gmail.com" , 
        name : "Rehan" , 
        password : "123" , 
        role : "user" , 
    } , 
    {
        course : []  , 
        email : 'samarth@gmail.com' ,
        name :  "Samarth" , 
        password : '123' , 
        role : "user"
    } ,{
        course : [] , 
        email : 'admin@gmail.com' , 
        name : 'admin' , 
        password : '123' , 
        role : 'admin'
    }
 ]


if(localStorage.getItem('userList') == undefined)
{
    localStorage.setItem('userList' , JSON.stringify(user)) ;
}