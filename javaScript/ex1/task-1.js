
function patter1(n) {
    let s ='' ; 
    for(let i = 1 ; i <= n ; i++ )
    {
        for(let j = 1 ; j <= n ; j++)
        {
            if( i == j || 6-i == j )
            {
                s+="*" ; 
            }
            else {
                s += " " ; 
            }
        } 
        s += "\n" ; 
    }
    console.log(s);
   // document.getElementById("pattern").innerHTML = s ; 
}

patter1(5); 
