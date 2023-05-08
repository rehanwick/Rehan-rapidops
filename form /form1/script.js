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
console.log(date);

document.getElementById('birthDay').setAttribute("max",`${date}`) ; 

function display() {
   
        if( !form1.checkValidity())
        {
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