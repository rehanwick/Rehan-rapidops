function pattern3(n) {
    let s =''; 
    let a = Math.ceil(n/2)  ; 
    let b = a ; 
    for(let i = 1 ;i <= n/2 ; i++)
    {
        for(let j = 1; j <= n ; j++)
        {
            if(a==j || b==j)
            {
                s += "*" ; 
            }
            else {
                s += " " ; 
            }
        }
        b++ ; 
        a-- ; 
        s+="\n" ; 
    }

    for(let i = 1 ;i <= n/2+1 ; i++)
    {
        for(let j = 1; j <= n ; j++)
        {
            if(a==j || b==j)
            {
                s += "*" ; 
            }
            else {
                s += " " ; 
            }
        }
        b-- ; 
        a++ ; 
        s+="\n" ; 
    }
    console.log(s);
   // document.getElementById("pattern").innerHTML = s ; 
}
pattern3(5) ; 