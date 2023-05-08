// Finding missing alphabets in the given string 

let str = "abcef" ; 

function find(str)
{
    for(let i = 1 ;i < str.length ; i++)
    {
        if( str.charCodeAt(i)   - str.charCodeAt(i-1) != 1)
        {
           return  String.fromCharCode(str.charCodeAt(i-1)+1)  ; 
        }
    }
}

console.log(find(str));
