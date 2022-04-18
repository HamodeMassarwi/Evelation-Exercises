const StringFormatter = function(){

    const capitalizeFirst = name => console.log(name.charAt(0).toUpperCase() + name.substr(1).toLowerCase())

    const skewerCase = name => console.log(name.replace(/\s+/g, ''))

    return{
    cf:capitalizeFirst,
    sc:skewerCase
        
    }
}
const stringFormatter = StringFormatter()


stringFormatter.cf("dorothy") //should print Dorothy
stringFormatter.sc("blue box") //should print blue-box