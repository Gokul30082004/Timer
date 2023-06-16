let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let ampm=document.getElementById("ampm");

function updateclock()
{
  let h=new Date().getHours();
  let m=new Date().getMinutes();
  let s=new Date().getSeconds();
  let ampm="Am";
  if(h>12)
  {
    h=h-12;
    ampm="PM";
  }
  h=h<10 ? "0"+h:h;
  m=m<10 ? "0"+m:m;
  s=s<10 ? "0"+s:s;
  hour.innerText=h;
  minute.innerText=m;
  second.innerText=s;
  ampm.innerText=ampm;
  setTimeout(()=>{
            updateclock()
            },1000);
}
updateclock();
