function pattern5(n) { 
    let s = '' ; 
    for(let i = n-1 ; i >0 ; i--)
    {
        for(let j = 1 ; j <=n ; j++ )
        {
            if(j<(n-i))
            {
                s+= "  " ;
            }
            else {
                    s+= ` ${j} ` ; 
            }
        }
        s+='\n' ; 
    }

    for(let i =0 ; i<n ; i++)
    {
        for(let j = 0 ; j < n ; j++)
        {
            if(j<(n-i-1))
            {
                s += "  " ; 
            }
            else 
            {
                s += ` ${j+1} ` ;
            }
        }
        s+= '\n' ; 
    }
    console.log(s);
   // document.getElementById("pattern").innerHTML = s ; 
}

pattern5(5) ; 