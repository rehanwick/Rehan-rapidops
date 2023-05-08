let n = 3 ; //Number of Nodes.  
const nodes = []
for(let i = 0 ; i < n ; i++)
{   for(let j =0 ; j < n ;j++)
        {   const obj ={ data :{"id" : `N${i}-${j}`} }
            nodes.push(obj) ; 
        } 
}
console.log(nodes);
//--------------------------------For Edges-------------------------------------------
const edges = [] ; 
for(let node of nodes)
{
    let C = +node.data.id[1] ;  //Col  
    let R = +node.data.id[3] ;  //Row

    if(C+1 < n)
    {   const obj1 ={data : {
                     id :`S${C}-${R}` ,
                     source :`N${C}-${R}` ,
                     target :`N${C+1}-${R}`}}
        edges.push(obj1);
    }   
    if(R+1 < n )
    {   const obj2 ={data : {
                     id :`E${C}${R}`,
                     source :`N${C}-${R}`,
                     target :`N${C}-${R+1}`}}
        edges.push(obj2);
    }
    if(R-1 >= 0)
    {   const obj3 ={data : {
                     id: `W${C}-${R}` , 
                     source :`N${C}-${R}` , 
                     target :`N${C}-${R-1}`} } 
        edges.push(obj3);
    }
    if(C-1 >= 0 )
    {   const obj4 ={data:{
                     id : `S${C}-${R}` , 
                     source : `N${C}-${R}` , 
                     target : `N${C-1}-${R}`}}
        edges.push(obj4);
    }
}
console.log(edges);
console.log(edges.length);
//--------------------------------Digonals--------------------------------------------
const digonals = []  ;
for(let node of nodes)
{
    let C = +node.data.id[1] ;  //Col
    let R = +node.data.id[3] ;  //Row

    if(C+1 < n && R+1 < n)
    {   const obj = {data : {
                     id : `SE${C}-${R}` ,
                     source : `N${C}-${R}`,
                     target:  `N${C+1}-${R+1}`}}
        digonals.push(obj);
    }
    if(C+1 < n && R-1 < n && R-1 >= 0)
    {   const obj = {data : {
                     id : `SW${C}${R}`,
                     source : `N${C}-${R}`,
                     target:  `N${C+1}-${R-1}`}}
        digonals.push(obj);
    }
    if(C-1 < n && R-1 < n && C-1>=0 && R-1 >= 0 )
    {   const obj = {data : {
                     id : `WN${C}${R}` ,
                     source : `N${C}-${R}`,
                     target:  `N${C-1}-${R-1}`}}
        digonals.push(obj);
    }
    if(C-1 < n && R+1 <n && C-1 >=0 )
    {   const obj = {data : {
                     id : `NE${C}${R}` ,
                     source : `N${C}-${R}`,
                     target:  `N${C-1}-${R+1}`}}
        digonals.push(obj);
    }

}
console.log(digonals)
console.log(digonals.length);