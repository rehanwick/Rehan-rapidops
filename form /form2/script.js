const div =document.getElementById('table') ; 
const form = document.getElementById('form') ; 
const form1 = document.forms.form ; 

// console.log(form.name);



  
let date = new Date(Date.now()) ; 

date = date.toLocaleDateString('en-US' ) ; //yy-mm-dd // mm/dd/yy
const arr = date.split('/') ; 
console.log(arr);
if(arr[0] < 10)
{
    arr[0] = '0' + arr[0] ;
}
date = `${arr[2]}-${arr[0]}-${arr[1]}`
// console.log(date);

document.getElementById('birthDay').setAttribute("max",`${date}`) ; 

function display() {
        
        const firstName = form1.firstName.value ; 
        const lastName = form1.lastName.value ; 
        const email = form1.email.value ; 
        const age = form1.age.value ; 
        const car = form1.cars.value ; 
        const birthDate = form1.birthDay.value ; 
        const place = form1.city.value ; 
        const payment = [];
        for(i of  form1.payment)
        {
            if(i.checked)
            {
                payment.push(i) ; 
            }
        }
        let b = true ; 
        if(firstName == '')
            {
                b = false ; 
                document.getElementById('firstNameL').innerText = `name cant be empty` ; 
            }
        else if (firstName.length < 6 )
            {
                b= false
                document.getElementById('firstNameL').innerText = 'Name should be more than 5 charater'
            }
        else {
                document.getElementById('firstNameL').innerText = `` ; 
        }

        // lastname 
        if(lastName == '')
        {
            b = false ; 
            document.getElementById('lastNameL').innerText = `Last Name cant be empty` ; 
        }
        else if (lastName.length < 6 )
        {
            b =false ; 
            document.getElementById('lastNameL').innerText = 'Last Name should be more than 5 charater'
        }
        else {
            document.getElementById('lastNameL').innerText = `` ; 
        }
        
        //email 
        if(email == '')
        {
            b =false ; 
            document.getElementById('emailL').innerText = `email Name cant be empty` ; 
        }
       else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        {
            b =false ; 
            document.getElementById('emailL').innerText = 'Invalid Email' ; 
        }
        else {
            document.getElementById('emailL').innerText = '' ;  
        }
        
        //Age validation 
        if(age == '')
        {
            b = false ; 
            document.getElementById('ageL').innerText = 'age cant be empty' ; 
        }
        else if(age < 13 || age > 26 )
        {
            b = false ; 
            document.getElementById('ageL').innerText = 'Age should be in range 13-26' ; 
        }
        else {
            document.getElementById('ageL').innerText = '' ;
        }

        //birthdate 
        if(birthDate == '')
        {
            b = false ; 
            document.getElementById('birthdateL').innerText = 'Birth Date is required' ; 
        }
        else if (birthDate  > date)
        {
            // console.log(birthDate , date);
            b = false ; 
            document.getElementById('birthdateL').innerText = 'invalid date' ; 
        }
        else {
        
            document.getElementById('birthdateL').innerText = '' ; 
        }

        if(place == '')
        {
            b =false ; 
            document.getElementById('placeL').innerText = 'place cant be empty' ; 
        }
        else {
            document.getElementById('placeL').innerText = '' ; 
        }

        if(payment.length == 0)
        {
            b = false ; 
            document.getElementById('paymentL').innerText = 'payment cant be empty' ; 
        }
        else {
            console.log(payment.length);
            document.getElementById('paymentL').innerText = '' ; 
        }

        if(car =='')
        {
            b = false ; 
            document.getElementById('carL').innerText = 'plz select one car' ; 
        }
        else {
            document.getElementById('carL').innerText ='' ; 
        }






        for (let i of  form1.payment ) 
        {
            if(i.checked)
            {
                payment.push(i.value) ; 
            }
        }
        










        if( !form1.checkValidity() || !b )
        {
            alert('Invalid Form') ; 
            return ; 
        }

        const table = document.createElement('table') ;  
        const trPayment = document.createElement('tr') ;
        const tdpay = document.createElement('td') ;  
        tdpay.append('payment') ;
        trPayment.append(tdpay) ; 
    
        for(let i of form )
        {
            const tr = document.createElement('tr') ; 
            const td1 = document.createElement('td') ; 
            const td2 = document.createElement('td') ; 
            tr.style.margin = "10px" ; 
             if(i.name == 'city')
             {
                if(i.checked)
                {   
                    td1.append(i.name) ; 
                    tr.append(td1) ; 
                    td2.append(i.value) ; 
                    tr.append(td2) ; 
                    table.append(tr) ; 
                }   
             }
             else if(i.name == 'payment')
             {
                
                if(i.checked)
                 { trPayment.append(i.value) ; }
             }
             else { 
                 td1.append(i.name) ; 
                 tr.append(td1) ; 
                 td2.append(i.value) ; 
                 tr.append(td2) ; 
                 table.append(tr) ; 
             }
        }
        table.append(trPayment) ; 
        div.append(table) ; 
        
    
   
}

const td = document.querySelectorAll('td') ; 
// td.style.margin = '3px'