function pattern2(n) { 
    let s = '' ; 
    for(let i = 1 ;i <= n ; i++)
    {
        for(let j = 1 ; j <= n ; j++)
        {
            if(i ==1 || i == n )
            {
                s+='*' ; 
            }
            else if( j ==1 || j == n )
            {
                s+='*' ; 
            }
            else {
                s+=' ' ; 
            }
        }

        s+= '\n' ; 
    }

    console.log(s);

    //document.getElementById("pattern").innerHTML = s ; 
}

pattern2(5)