const timer=document.querySelectorAll('.timer');
const futureDate=new Date('2024-10-17T08:00:00').getTime();

function formateDate(value){
    return value<10 ?`0${value}`: value
}
const countdown=setInterval(updateSale,1000)
function updateSale(){
    const now=new Date().getTime()
    const timeLeft=futureDate-now;

    if(timeLeft<=0){
        clearInterval(countdown)
        document.querySelector('.countdown-msg').textContent="Sorry the sale is ended";
        items.forEach(item=>(item.textContent='00'))
        return;
    }

const timeUnits={
    day:24*60*60*1000,
    hour:60*60*1000,
    minute:60*1000,
    second:1000,
}
const days=Math.floor(timeLeft/timeUnits.day)
const hours=Math.floor((timeLeft%timeUnits.day)/timeUnits.hour)
const minutes=Math.floor((timeLeft%timeUnits.hour)/timeUnits.minute)
const seconds=Math.floor((timeLeft%timeUnits.minute)/timeUnits.second)

timeValues=[days,hours,minutes,seconds]

items.forEach((item,index)=>{
    item.textContent=formateDate(timeValues[index])
})

}
updateSale()

