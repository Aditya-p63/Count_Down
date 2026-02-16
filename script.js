const days = document.getElementById('days');
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const update = (deadline)=>{
    const currt = new Date();
    const timed = deadline-currt;

    let calsec =Math.floor(timed/1000)%60;
    let mins = Math.floor(timed/1000/60)%60;
    let hrs = Math.floor(timed/1000/60/60)%24;
    let day = Math.floor(timed/1000/60/60/24);
    const format = (time)=>
{
    return time < 10 ? `0${time}` : time;
}

    days.textContent = format(day);
    min.textContent = format(mins);
    hr.textContent = format(hrs);
    sec.textContent = format(calsec);

}
const countdown = (targetdate) =>{
    setInterval(()=>update(targetdate),1000);
}

const targetdate = new Date("june 01 2026 7:00");
countdown(targetdate);
