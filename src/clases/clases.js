

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


// clase 9
//evento preventDefault

export default function App() {
  const click = (e) => {
    let codigo = [65, 69, 73, 79, 85];
    console.log(e.keyCode);
    if (codigo.includes(e.keyCode)) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input onKeyDown={click} type="text" />
    </div>
  );
}