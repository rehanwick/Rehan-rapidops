// sprad the number 7598 show as 7000 500 90 8 

function solve(n)
{
    let i = 0 ; 
    let str = "" ; 
    let str1 = n+"" ; 
    while(n != 0)
    {
        r = n%10 ; 
        str += " "+r*Math.pow(10,i) ; 
        i++ ; 
        n = Math.floor(n/10) ;
    }
    console.log(str);
}

solve(2134)