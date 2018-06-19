

const express = require("express"); //importa la librería express
const app = express(); //crea una instancia de express que se asigna a la variable app

app.set("view engine", "ejs");

app.get("/productos", (req, res,next) => {
const productosArr=[{nombre:"Publicaciones",descripcion:"Son publicaciones técnicas de editorial Errepar"},{nombre:"Seguros",descripcion:"Abarcamos ramas de seguros personales"}];

    res.render(`productos`,{productos:productosArr});    

});


app.get("/perfil", (req, res,next) => {
  
      res.render(`2_perfil`,{});    
  
  });
  


app.get("/", (req, res) => {
  //let html = "<h1>Hola</h1>";
  res.render(`index`,{nombre:"Juan",materias:["Algoritmo","Diseño"]});     //  reemplazamos res.send(html);
});

app.use (express.static("public")); //nos da acceso a la carpeta publica

app.listen(5000, () => console.info("Iniciando en puerto 5000"));  //entra en un bucle y se queda escuchando


