const shineLight = setTimeout(() => {
    document.getElementById("box").style.backgroundColor = "yellow"},
    5000);
    
    const makeSound = sound => console.log(sound)
    
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
  
  
      
  
      
  explode(shineLight, makeSound, "BOOM")