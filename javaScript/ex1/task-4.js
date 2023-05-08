function pattern4(n){ 
    let s = '' ; 
    let a = 1 ; 
    let flag = 1 ; 
    for(let i = 1 ; i <= n ; i++)
    {
        for(let j = 1 ;j <= n;j ++)
        {
            if(i == j ) {
                s += '*' ; 
            } else if (i>j)
            {
                s += '*' ; 
            }
            else {
                s += " " ; 
            }
        }
        s += "\n" ; 
    }
    for(let i = n ; i >=1 ; i--)
    {
        for(let j = 1 ;j <= n;j ++)
        {
            if(i == j ) {
                s += '*' ; 
            } else if (i>j)
            {
                s += '*' ; 
            }
            else {
                s += " " ;  
            }
        }
        s += "\n" ; 
    }
    


    console.log(s);
    //document.getElementById("pattern").innerHTML = s 
}
pattern4(3) ; 