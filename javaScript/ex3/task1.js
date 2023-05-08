// 1. Write​ ​ a ​​ pattern​ ​ that​ ​can identify an​ ​ e-mail​ ​ address.
const pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
function isemail(email)
{
    if(email.match(this.pattern))
    {
        console.log('Valid email');
    }
    else {
        console.log('inValid email');
    }
}
// const email = prompt('enter an email') ; 
// const email = 'rs0327884@gmail.com' ; 
// isemail(email); 


///////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ 
// unauthorized​ ​ user. 
// The number of star will be equal to the number of 
// characters hidden, and make this program dynamic.

function hideEmail(email)
{
    let arr = email.split('@') ; 
    let hidenEmail = ''+arr[0][0] ; 
    for(let i = 0 ; i < arr[0].length-2 ; i++)
    {
        hidenEmail += '*' ; 
    }
    let name = arr[0] ; 
    hidenEmail += name[name.length-1] ; 
    hidenEmail += arr[1] ; 
    console.log(hidenEmail);
}

// hideEmail('rs0327884@gmail.com') ; 


////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.
// Input : '<p><strong><em>Javascript​ ​ Exercises</em></strong></p>'
// Output : Javascript​ Exercises

function removeHtmlXml(input)
{
    if(input == null || input == undefined)
    {
        console.log('invalid input');
    }
    else
    {
        console.log(input.replace(/<[^>]*>/g, ''));
    }
}

// removeHtmlXml('<p><strong><em>Javascript​ ​ Exercises</em></strong></p>') 


// 4. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ that​ ​ creates​ ​ a ​ ​ table,​ ​
// by accepting​ ​ row and ​ column​ ​ numbers​ ​ from​ ​ the user,​
// and​ ​input​s ​ row-column​ ​ number​ ​ as​ ​ content​ ​ (e.g.​ ​ Row-0​ ​ Column-0)​ ​ of​ ​ a ​ ​ cell

function creatTable()
{
    const r = +prompt('enter the the rows') ; 
    const c = +prompt('enter the number of col') ; 
    const div = document.getElementById('MyTable') ; 
    let table = document.createElement('table') ; 
    table.style.border = 'solid 1px black'
    for(let i = 0 ; i<r ; i++ )
    {
        let tr = document.createElement('tr') ; 
        for(let j = 0 ;  j < c ; j++)
        {
            let col = document.createElement('td') ; 
            col.innerHTML = `Row ${i} , col ${j}` ;
            tr.appendChild(col) ;  
        }
        table.appendChild(tr) ;
    }
    div.appendChild(table) ; 

}

// Task 2 :
// Write​ ​ a ​ ​ JavaScript​ ​ program ​ that​ ​ displays​ ​ a list​ ​ of​ ​ 
// names​ ​ according​ ​ to​ ​ the sports​ group.

const array =  [{

                Name: 'Ravindra',

                Sports: ['Chess', 'Cricket'],

                },

                {

                Name:'Ravi',

                Sports: ['Cricket', 'Football'],

                },

                {

                Name:'Rishabh',

                Sports: ['Table-Tennis', 'Football'],

                },] ;

function find(array)
{
    const set = new Set() ; 
    for(let i of array )
    {
        for(let j = 0 ; j < i.Sports.length ; j++)
        {
            set.add(i.Sports[j]); 
        }
    }

    const Output= [] ; 

    for(let i of set)
    {
        const arr1 = [] ; 
        const name = i ; 
        const obj = {
        }
        obj[name] = arr1 ; 
        for(let j of array )
        {
            if(j.Sports.includes(i))
            {
                arr1.push(j.Name) ; 
            }
        }
        Output.push(obj) ; 
    }
    console.log(Output);
}

find(array) ; 