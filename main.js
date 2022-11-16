
const pizzas = [
    {
    id: 1 ,
    nombre:"Muzzarella",
    ingredientes:["salta de tomate","aceitunas","jamon"],
    precio: 900 , 
    },

    {
    id: 2 ,
    nombre:"Panceta",
    ingredientes:["salsa de tomate","muzzarella","panceta ahumada","aceitunas"],
    precio: 1850,
    },

    {
    id: 3 ,
    nombre:"Morrones",
    ingredientes:["morrones","salsa de tomate","muzzarella","jamon"],
    precio: 1700,
    },

    {
    id: 4 ,
    nombre:"Palmitos",
    ingredientes:["salsa de tomate","muzzarella","palmitos","salsa golf"],
    precio: 1300 ,
    },

    {
    id: 5 ,
    nombre:"3 Quesos",
    ingredientes:["Muzzarella","sardo","roquefort"],
    precio: 1900,
    },

    {
    id: 6 ,
    nombre:"Agridulce",
    ingredientes:["muzzarella","anana","cerezas"],
    precio: 1450,
    },

    {
    id: 7 ,
    nombre:"Descontrolada",
    ingredientes:["muzzarella","panceta","pimientos rojos y verdes","carne trozada","champignones"],
    precio: 1980,
    },

    {
    id: 8 ,
    nombre:"Siciliana",
    ingredientes:["muzzarella","tomate en rodajas","albahaca","aceitunas negras","aceite de oliva"],
    precio: 2100,
    },
];


// a)  Las pizzas que tengan un id impar.


const idImpares = pizzas.filter( (pizza) => {
    return pizza.id % 2 !== 0;
});


idImpares.forEach((pizza) =>{
    console.log(`La Pizza ${pizza.nombre} tiene id Impar`);
})

// b) ¿Hay alguna pizza que valga menos de $600?


const hayPizzasConPrecioMenor600 =() => {
    return pizzas.some((pizza)=>{
        return pizza.precio < 600;
    })
    ? console.log(`Hay pizzas con precio menor a $ 600`)
    : console.log(`No hay pizzas con precio menor a $ 600`)
};

hayPizzasConPrecioMenor600();


// c) El nombre de cada pizza con su respectivo precio.


pizzas.forEach((pizza)=>{
    console.log(`La Pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`);
});


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).


const mostrarIngredientes=() =>{

    for(let i=0;i< pizzas.length;i++){

        console.log ( `La pizza ${pizzas[i].nombre} tiene como ingrediente:` )

        for(let j=0;j< pizzas[i].ingredientes.length;j++){
            // console.log(`La pizza ${pizzas[i].nombre} tiene de ingrediente: ${pizzas[i].ingredientes[j]}`)
            console.log ( ` - ${pizzas[i].ingredientes[j]}` )
        }
    }

};

mostrarIngredientes();