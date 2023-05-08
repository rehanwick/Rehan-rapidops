
const xhr = new XMLHttpRequest();
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") ; 
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

const forms = document.forms[0] ; 
submite = () => {
    console.log(forms);
    const body = JSON.stringify({
        title: "Hello World",
        body: "My POST request",
        userId: 900,
      });
}