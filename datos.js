Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            title:"Facu Smash",
            userId:1,
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        }
       })
       .then(res=>res.json())
       .then(data => agregarProductos(data.title, '../imagenes/facu-smash.jpg')),
    

        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            title:"Entraña",
            userId:2,
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        }
       })
       .then(res=>res.json())
       .then(data=>agregarProductos(data.title, '../imagenes/entrana.jpg')),


        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            title:"Ñoquis",
            userId:3,
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        }
       })
       .then(res=>res.json())
       .then(data=>agregarProductos(data.title, '../imagenes/noquis.jpg')),

        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            title:"Wrap de Ternera",
            userId:2,
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
        }
       })
       .then(res=>res.json())
       .then(data=>agregarProductos(data.title, '../imagenes/wrap-ternera.jpg'))
    ])
    .then(()=>{
        mostrarProducto(0)
    })
    .catch(error=> console.error('Error', error));





