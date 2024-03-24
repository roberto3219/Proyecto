//Librerias
const express = require("express")
const app = express();


//Servidor

let port = 3009;

app.listen(port, ()=> console.log(`[server] Corriendo en el puerto ${port}`))

//Rutas

app.use("/",mainRouter);
app.use("/product",productRouter);
app.use("/cart", cartRoutes);
app.use("/users", userRoutes);

//Ruta Apis

app.use(productoRouter)
app.use(usuarioRouter)

//Error 404

app.use((req,res,next) => {
    res.status(404).render("error404")
})