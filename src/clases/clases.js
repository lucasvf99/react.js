

//PROMESAS

const promesa1 = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        const productos =[
            {
                name:"collar",
                id:3,
                price: 3000,
            },
            
            {
                name:"collar",
                id:3,
                price: 3000,
            },
            {
                name:"collar",
                id:3,
                price: 3000,
            },
            
        ]
        resolve(productos)
    },5000)
})

promesa1.then( (data)=>{
    //console.log('Lista de productos:' , data)
})