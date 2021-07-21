let settime;
function delaytimer(){
    settime= setTimeout(timer,4000)

    function timer(){
    console.log("time is up");
   }
   timer();
}
delaytimer();
