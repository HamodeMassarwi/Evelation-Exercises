const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  const logData = (data) => console.log("Im hamode And " + data)
  
  displayData(alert, logData, "I like to party")