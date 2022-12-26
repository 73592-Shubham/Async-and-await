console.log("person1:shows tickets")
console.log("person2:shows tickets")


const myWifeBringingTickets= new Promise((resolve,reject)=>{
    setTimeout(() => {

        resolve("ticket")
        
    }, 3000);
})

const popcorn=myWifeBringingTickets.then((t)=>{
    console.log('husband:we should go in')
    console.log('wife:im hungry')

    return new Promise((resolve,reject)=>{
    resolve(` ${t}`)
    })
})

const getbutter=popcorn.then((t)=>{
    console.log('wife:i need butter in my popcorn')
    return new Promise((resolve,reject)=>{
        resolve(`ok,will remember that now lets go with the ${t}`)
    })
})

const getcoldrink=getbutter.then((t)=>{console.log(`wife:please bring some colddrinks also`)
                 return new Promise((resolve,reject)=>{
                    resolve(`${t}`)
                 })
})

getcoldrink.then((t)=>{console.log(`${t}, finally, person3:shows tickets`)})

console.log("person4:shows tickets")
console.log("person5:shows tickets")
