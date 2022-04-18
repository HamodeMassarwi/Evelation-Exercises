const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  const checkReservation = function(){
    let typed = document.getElementById("stop").value;
    let lowerCase = typed.toLowerCase();
    const name = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    if(reservations[name] && !(reservations[name].claimed)){
      document.getElementById("header").innerHTML = "Welcome in ," + name ;
    }else if(reservations[name] && reservations[name].claimed){
      document.getElementById("header").innerHTML = name+ " Someone Already claimed this,! ";
    }else{
      document.getElementById("header").innerHTML = "You Have no reservations " + name ;
    }



  }
  