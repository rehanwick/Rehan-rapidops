// task is to see that the string contain all the english alphabets in them 

// console.log(arr , arr.length);

const str1 = `A97twiglkajwkt9538u4yjpoy493-9ufebhfwekjhfwekh` ; 

const str2 = 'abcdefghijklmnopqrstuvwxyz' ; 

function solve(str)
{
    str = str.toLowerCase() ; 
    arr = new Array(26).fill(false) ; 

    for(let i of str)
    {
        let indx = i.charCodeAt(0)-97 ; 
        if(indx  >= 0 && indx < 26)
       {
            arr[indx] = true ; 
       }
    }

    for(let i =0 ; i < 26 ; i++)
    {
        if(arr[i] != true )
        {
            // console.log(arr[i]) ; 
            console.log('No, does not contains all');
            // console.log(arr);
            return ;
        }
    }
    console.log('yes , contains all');
    
}

solve(str1) ; 

let a = 'a' ;
a = a.charCodeAt(0) ; 
// console.log(a);