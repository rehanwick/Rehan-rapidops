let hour =0   , min =0  , sec =0  , minsec = 0 ; 
let timerInterval = [] ; 
const time = document.getElementById('time'); 
const date = document.getElementById('date') ; 
const timer = document.getElementById('timer') ; 
const startbtn = document.getElementById('startbtn') ; 
const stopbtn = document.getElementById('stopbtn') ; 
const resumebtn = document.getElementById('resumebtn') ; 
const resetbtn = document.getElementById('resetbtn') ; 
function start() {

    timerInterval = setInterval(
                function () {
                    minsec++ ; 
                    if(minsec >= 100)
                    {
                        sec++ ; 
                        minsec =0 ; 
                    }
                    if(sec >= 60)
                    {
                        min++ ;
                        sec = 0 ;  
                    }
                    if(min >= 60)
                    {
                        hour++  ; 
                        min =0 ; 
                    }
                    timer.innerText = `${hour} : ${min} : ${sec} : ${minsec}` ; 
                } , 10
    ) 

  startbtn.disabled = true ; 
  resumebtn.disabled = true ; 
  stopbtn.disabled = false ; 
  resetbtn.disabled = false ; 

}

function stop() {
    clearInterval(timerInterval) ; 
    startbtn.disabled = false ;  
    resumebtn.disabled = false ; 
}
function resume() {
    clearInterval(timerInterval) ; 
    start() ; 
}
function reset() {
    hour = 0 ; 
    min = 0 ; 
    sec =0  ; 
    minsec = 0 ; 
    timer.innerText = `${hour} : ${min} : ${sec} : ${minsec}` ; 
}

setInterval(
    function () {
        const time1 = moment().format('LTS') ; 
        time.innerText = `Time - ${time1}` ; 
    } ,1000
) 

setInterval(
    function () {
        const date1 = moment().format("MMM Do YY");
        date.innerText = `Date - ${date1}`
    } , 1000
)


