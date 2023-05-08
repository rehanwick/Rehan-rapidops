// 1. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​ 'n'
// ​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.
// static_array = [0,1,2,3,4,5,6,7,8,9]
// Input = 3
// Output = First 3 element : [0,1,2,] , Last 3 element : [7,8,9]


function find(arr, n  ) { 
   let arr1 = arr.slice(0,n) ; 
   let  arr2 = arr.slice(arr.length-n , arr.length) ; 
    console.log(`first n ${arr1} , last n ${arr2}`); 
}
// let arr = [0,1,2,3,4,5,6,7,8,9] ; 
// let n = 3 ; 
// find(arr,n) ; 

// 2. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​​ as​ 
// ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.
// Input = 02544168
// Output = 0-254-416-8

function find(n) {

    n = n.toString() ; 
    for(let i = 1 ; i < n.length ; i++)
    {
        if(n[i]%2 == 0 && n[i-1]%2 ==0 )
        {
            n = n.substring(0,i) + '-' + n.substring(i,n.length) ; 
        }
    }
    console.log(n);
}
// find(`02544168`) ; 


// 3. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​frequent​ ​ item​ ​ of​ ​ an​ ​ array.
// static_array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9]
// Output = 5

function find(arr) {
    let n = arr.length ; 
    let max ; 
    let maxfreq = 1 ; 
    for(let i = 0 ;i < n ; i++ )
    {
        let count = 1 ; 
        for(let j = 0 ; j < i ; j++)
        {
            if(arr[i] == arr[j])
            {
                count++ ; 
            }
        }

        if(count > maxfreq)
        {
            maxfreq = count ; 
            max = arr[i] ; 
        }
    }
    console.log(max);
}
// let max = [0,1,1,2,3,4,5,5,5,6,7,7,8,9] ; 
// find(max)

// 4. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​array.
// static_array = [0,1,2,3,4,5,6,7,8,9]
// Output = [4,1,5,2,3,0,6,8,9,7]
Math.random() 

function find(arr ) {

    for(let i = arr.length -1 ; i > 0 ; i--)
    {
        let rndomindx = Math.floor(Math.random() * (i+1) ) ; 
        let swap = arr[rndomindx] ; 
        arr[rndomindx] = arr[i] ; 
        arr[i] = swap ; 
    }
    console.log(arr);
}

// let array = [1,2,3,4,5,6,7] ; 
// find(array) ; 


// 5. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.\
// array_a = [0,1,2,3] , array_b = [3,4,5]
// Output = union_array : [0,1,2,3,4,5] , a-b_array = [0,1,2], b-a_array = [4,5], intersection_array = [3]


function find_union(arr1 , arr2) { 
    const set = new Set() ; 
    for(let i =0 ; i <arr1.length ; i++)
    {
        set.add(arr1[i]) ; 
    }
    for(let i = 0 ; i < arr2.length ; i++ )
    {
        set.add(arr2[i]) ;
    }
    let arr = [] ; 
    for(i of set)
    {
        arr.push(i) ; 
    }
    console.log(arr);
}

// let a = [0,1,2,3] , b = [3,4,5] ; 
// find_union(a,b) ; 

// a-b
function find_diff(a,b)
{
    let arr =[] ; 
    for(let i = 0 ;i <a.length; i++)
    {
        if(!b.includes(a[i]))
        {
            arr.push(a[i]) ; 
        }
    }
    console.log(arr);
}
//  let a = [0,1,2,3] , b = [3,4,5] ; 
// find_diff(a,b) ;

//interaction
function find_inter(a,b)
{
    let arr =[] ; 
    for(let i = 0 ; i<a.length ;i++)
    {
        if(!b.includes(a[i]))
        {
            arr.push(a[i]) ; 
        }   
    }

    for( let i of b )
    {
        if(!a.includes(b[i]) && b[i])
        {
            arr.push(b[i]) ; 
        }
    }
    console.log(arr);
}
// let a = [0,1,2,3] , b = [3,4,5] ; 
// find_inter(a,b) ; 

// 6. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​with​ ​ values​ ​ (either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.

// static_array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" ,
//  "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ]
// Input = 2
// console.log(num_string_range('a',​ ​ "z",​ ​ 2));
// Output = ["a",​ ​ "c",​ ​ "e",​ ​ "g",​ ​ "i",​ ​ "k",​ ​ "m",​ ​ "o",​ ​ "q",​ ​ "s",​ ​ "u",​ ​ "w",​ ​ "y"]


static_array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" ,
  "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ]

function find_supplied(array , n)
{
    let arr = [] ; 
    for(let i = 0 ;i < array.length ;i += n)
    {
        arr.push(array[i]) ;
    }
    console.log(arr);
}

// find_supplied(static_array,2) ; 

// 7. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​name​ ​ from​ ​ a ​ ​ particular​ ​ date.
// Input = 01-07-2020 or 01/07/2020
// Output = July 

function find_month(date){
    date = date +''; 
    let arr = date.split('/') ; 
    date = arr[1]+'/' + arr[0] +'/'+ arr[2] ; 
    let num = new Date(date) ; 
    let months = num.getMonth() ;
    switch(months)
    {
        case 00 : console.log('jan');
        break ;
        case 01 : console.log('feb');
        break ;
        case 02 : console.log('mar');
        break ;
        case 03 : console.log('april');
        break ;
        case 04 : console.log('may');
        break ;
        case 05 : console.log('june');
        break ;
        case 06 : console.log('july');
        break ;
        case 07 : console.log('aug');
        break ;
        case 08 : console.log('sep');
        break ;
        case 09 : console.log('oct');
        break ;
        case 10 : console.log('nov');
        break ;
        case 11 : console.log('dec');
    }
}
//  find_month('01/07/2020') ; 

// 8. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.
// Input = 01/07/2018 & 03/05/2020
// Output = 1 year 10 months 2 days
// yy/mm/dd
function solve_date(date1 , date2)
{
   let arr1 = date1.split('/') ; 
   let arr2 = date2.split('/') ; 
   let date1Format = `${arr1[2]}/${arr1[1]}/${arr1[0]}` ;
   let date2Format= `${arr2[2]}/${arr2[1]}/${arr2[0]}` ; 
   let dateOBj1 = new Date(date1Format) ; 
   let dateOBj2 = new Date(date2Format) ; 
   let final = dateOBj2 - dateOBj1 ; 
   console.log(dateOBj1,dateOBj2);
   let year = Math.floor(final/(1000*60*60*24*365)) ; 
   let months = Math.floor((final/(1000*60*60*24*365) - Math.floor(final/(1000*60*60*24*365)) )*12)  ; 
   let days = Math.floor((((final/(1000*60*60*24*365) - Math.floor(final/(1000*60*60*24*365)) )*12) - months)*30) ; 
   console.log(`${year} year ${months} months ${days} days`);
}
// solve_date('01/07/2018' , "03/05/2020") ; 

// 9. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​timestamp​ ​ to​ ​ time.
// Input = 1607518718
// Output = Wednesday, December 9, 2020 6:28:38 PM GMT+05:30

function solve_unix(n)
{
    let date = new Date(n*1000) ; 
    console.log(date.toString());
}
// solve_unix(1607518718) ; 

// 10. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.
// Input = 01-07-2018 & 03/05/2020
// Output : 
// 1 years 10 months 2 days
// or 22 months 2 days
// or 96 weeks 0 days
// or 672 days
// or 16,128 hours
// or 967,680 minutes--

function solve_java(date1,date2) {
    let arr1 = date1.split('/') ; 
   let arr2 = date2.split('/') ; 
   let date1Format = `${arr1[2]}/${arr1[1]}/${arr1[0]}` ;
   let date2Format= `${arr2[2]}/${arr2[1]}/${arr2[0]}` ; 
   let dateOBj1 = new Date(date1Format) ; 
   let dateOBj2 = new Date(date2Format) ; 
   let final = dateOBj2 - dateOBj1 ; 
   console.log(dateOBj1,dateOBj2);
   console.log(final);
   let year = Math.floor(final/(1000*60*60*24*365)) ; 
   let months = Math.floor((final/(1000*60*60*24*365) - Math.floor(final/(1000*60*60*24*365)) )*12)  ; 
   let days = Math.floor((((final/(1000*60*60*24*365) - Math.floor(final/(1000*60*60*24*365)) )*12) - months)*30) ; 
   console.log(`${year} year ${months} months ${days} days`);
   console.log(`or ${year*12} months , ${days} days`);
   console.log(`or ${year*12*4} weeks , ${days} days`);
   console.log(`or ${year*12*4*7} days `);
   console.log(`or ${year*12*4*7*24} hours`);
   console.log(`or ${year*12*4*7*24*60} hours`);
}
 //solve_java('03/05/2020','03/05/2021'); 

// 11. Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​
//  string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).
// static_string = "This is a sample string"
// input_string = "Insert me"
// input_position = 3
// Output : "ThInsert meis a sample string"

function solve_insert(str, str1 , i ) {
 if(i <=1 )
    {
        i = 1 ; 
    }
str = str.substring(0,i) + str1 + str.substring(i,str.length) ;
console.log(str);
}
let static_string = "This is a sample string" ; 
let input_string = "Insert me" ; 
let pos = 3 ; 
 // solve_insert(static_string , input_string , pos ) ; 

//  12. Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.
// input_length = 2
// input_string = "RapidOpsSolution"
// console.log(string_chop('RapidOpsSolution’',2));
// Output = ["Ra",​ ​ "pi",​ ​ "dO",​ ​ "ps",​ ​ "So",​ ​ ”lu”,​ ​ “ti”,​ ​ “on”]

function shope_array(str, indx)
{
    let arr = [] ; 
    let str1 = '' ; 
    let pos = indx-1 ; 
    for(let i = 0; i < str.length ; i++)
    {
        if(pos == i )
        {
            str1 += str[i] ; 
            arr.push(str1)  ; 
            str1 ='' ; 
            pos += indx ; 
        }
        else {
            str1 += str[i] ; 
        }
    }
    console.log(arr);
}

// shope_array('jgrshnvk' ,2 ) ; 

// 13. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.
// input_number = 1023165454197
// Output = 1,023,165,454,197

function find(inp) 
{
    let out = Intl.NumberFormat("en-US").format(inp) ; 
    console.log(out);
}
// find(1023165454197)

// 14. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ 
//​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​​:

// 1.​ ​ Id,​ ​
// 2.​ ​ Name,​ ​
// 3.  Age

// NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects.

obj = [
    {name : 'rehan' , age : 21 , id : 01 } ,
    {name : 'sam' , age : 23 , id : 03} ,
    {name : 'sid' , age : 24 , id : 02 } ,
    {name : 'omi' , age : 26 , id : 05 } ,
    {name : 'nitin' , age : 41 , id : 04 } ,
    {name : 'pawan' , age : 61 , id : 06 } ,
    {name : 'sagar' , age : 71 , id : 07 } ,
    {name : 'rishi' , age : 31 , id : 08 } ,
    {name : 'nilesh' , age : 22 , id : 09 } ,
    {name : 'naman' , age : 41 , id : 10 } ,
    {name : 'prabal' , age : 61 , id : 11 } ,
]

obj.sort( (a,b) => a.age < b.age ? a.name > b.name ? -1:-1:1)

// console.log(obj);


// 15. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position. Also if the position does not exist then error message should be shown to the user.

// static_array = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  
// {name:  "Max" , age : 20} ]
// Input : ask user to delete or insert
// delete_element_position = 2  OR insert_element_position = 3
// insert_name = "Daniel"
// insert_age = "56"
// Output : if deleted [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12}]
// if inserted [  {name:  "Jack" , age : 23} , {name:  "Sam" , age : 12} , 
// {name:  "Max" , age : 20} , {name:  "Daniel" , age : 56} ]


static_array = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},{name:  "Max" , age : 20} ] ; 

function deleteFromArray(array , pos)
{
    if(pos < obj.length)
    {
        array.splice(pos-1,1) ; 
        console.log(array) ; 
    }
    else {
        console.log('incorrect');
    }
}

function insertObJ(array , pos )
{
    array.splice(pos,0,{name:'rehan' , age : 21}) ; 
    console.log(array);
}

// deleteFromArray(static_array , 1) ;

