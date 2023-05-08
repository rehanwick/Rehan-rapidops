
const btn = document.getElementById('btn'); 
const arr = [{  _id : '0' , 
                tag: `kjhf` , 
                parent_id : null, 
                domain_id:'comman' , 
                description : 'hgfvkjfn' }] ; 

const InputArr = [] ;
InputArr[0] = 1
InputArr[1] = prompt('Enter the number Fist line child node')
InputArr[2] = prompt('Enter the number Second line child node')
InputArr[3] = prompt('Enter the number Second line child node')
InputArr[4] = prompt('Enter the number Second line child node')

let max= InputArr[0] ; 
for(let i in InputArr)
{ 
    for(let j = 0 ; j < InputArr[i] ; j++)
    {   arr.push({ _id: i+j , 
                   tag : 'tag' , 
                   parent_id : (i==0) ? '0' : `${i-1}${Math.floor(Math.random()*10)%InputArr[i-1]}` , 
                   domain_id : 'domain' ,
                   description : 'discription'
                }) ; 
    }
}

console.log(arr);
const div = document.getElementById('div1') ; 

let outputStr = '' ; 

arr.sort((a,b) => { if (a.parent_id > b.parent_id){return 1 }})

let indx = 1 ; 
for(let i in InputArr)
{ for(let j =0 ; j < InputArr[i] ; j++)
   {
        outputStr +=`${JSON.stringify(arr[indx]._id)} pID(${JSON.stringify(arr[indx].parent_id)}) &emsp; &emsp;` ;
        indx++ ;  
   }
   outputStr +=`<br>` ; 
}
console.log(outputStr);
div.innerHTML = outputStr ;

btn.disabled = false ; 

const div2 = document.getElementById('div2') ; 
function moveNode() {
    const siftingNodeId = prompt('Enter the node id you want to move') ; 
    const siftingNodeParentId = prompt('Enter the node where you want to sift make sure it should not be its child') ; 
    if(ischild(siftingNodeId , siftingNodeParentId))
    {
        alert('Node is not present or it is the child node of that node')
        return
    }
    for(let node of arr)
    {
        if(siftingNodeId == node._id)
        {
            node.parent_id = siftingNodeParentId ; 
        }
    }
    div2.innerHTML = JSON.stringify(arr) ; 

}

const stack = [] ; 
function ischild(id1 , id2)
{
        const node1 = arr.find(node => node._id === id1);

        if (!node1) {
          return true;
        }
        let parent = node1;
        while (parent) {
          if (parent._id === id2) {
            return true;
          }
          parent = arr.find(node => node._id === parent.parent_id);
        }
      
        return false;
}



