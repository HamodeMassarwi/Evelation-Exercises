
const check = function(){
    let phone = document.getElementById("phone").value;
    let fullname = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    let birth = document.getElementById("birth").value;
    let alerting = document.createElement("p");
    alerting.setAttribute("class","alerting");
    alerting.style.backgroundColor = "red";
    document.getElementById("container").appendChild(alerting)
    console.log(fullname)
    if(fullname.length<2 || fullname == undefined){
        alerting.innerHTML="Name must be longer than 2 characters"
    }
    else if(salary<10000 || salary>16000){
        alerting.innerHTML="Salary must be greater than 10,000 but less than 16,000"
    }
    else if(birth!=null){
        alerting.innerHTML="Birthday may not be null"
    }
    else if(phone.length != 10){
        alerting.innerHTML="Phone must be 10 digits long"
    }


}