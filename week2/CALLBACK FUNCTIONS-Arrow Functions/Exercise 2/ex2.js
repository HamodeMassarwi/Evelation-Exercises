const returnTime = function (time) {
    alert('The current time is: ' + time)
    console.log(time)
  }
  const getTime = function(returnTime) {
     const datenow = new Date();
     returnTime(datenow)
  }
  getTime(returnTime)