let str1 = "**{{symbol}}::{{code}}--{{amount}}@@" ;
let str12 = "**{{symbol}}::--{{amount}}@@{{code}}" ;
let str2 = "22{{code}}::{{symbol}}--{{amount}}22" ;
let str22 = "22{{amount}}678::{{symbol}}hjkk{{code}}--22" ;  
let str3 = "{{code}}::{{amount}}::{{symbol}}12" ; 
let str32 = "{{amount}}LL{{code}}::{{symbol}}12" ; 

function solve(str)
{
    // Removing extra elements from front and back 
    str = str.substring(str.indexOf('{{'),str.length) ;
    str = str.substring(0,str.lastIndexOf('}}')+2) ;

    let codeIndx = str.indexOf('{{code}}') ; 
    let a = str.indexOf('{{amount}}') ; 
    let s = str.indexOf('{{symbol}}');
    
    if(s<codeIndx && s < a)
    {
        if(codeIndx <a)
        {
            str = str.substring(codeIndx , str.length) ; 
        }
        else {
            str = str.substring(a,str.length)
        }
    }
    else if(a<s && codeIndx <s) {
        if(codeIndx <a)
        {
            str = str.substring(0,a+10) ; 
        }
        else {
            str = str.substring(0,codeIndx +8) ; 
        }
    }
    else {
        if(codeIndx <a)
        {
            str = str.substring(0,s) + str.substring(a,str.length) ; 
        }
        else {
            str = str.substring(0,s) + str.substring(codeIndx,str.length) ; 
        }
    }
    console.log(str);
}

solve(str22)



/// using regex and replace
// function removeSymbol(str)
// {
//     str = str.replace(/{{SYMBOL}}/g, "");
//     console.log(str);
// }

// const strg = "::{{CODE}}--{{SYMBOL}}**{{AMOUNT}}--";
// removeSymbol(strg);
