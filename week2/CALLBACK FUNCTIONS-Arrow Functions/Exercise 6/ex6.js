const commentOnWeather = (temp) => "its " + determineWeather(temp)

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
commentOnWeather(20)