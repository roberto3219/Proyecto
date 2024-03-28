//Librerias
const express = require("express")
const app = express();
const methodOverride = require("method-override")
const session = require("express-session")
const cookieParser = require("cookie-parser")

//Router

let mainRouter = require("./src/routes/mainRouter") ;
let productRouter;
let cartRoutes;
let userRoutes;

//Router API
let productoRouter;
let usuarioRouter;
//Servidor

let port = 3009;

app.listen(port, ()=> console.log(`[server] Corriendo en el puerto ${port}`))

//Configuracion HTTP

app.use(methodOverride("_method"))

//Configuracion de carpeta

app.use(express.static("public"))
app.set("views", "./src/views")

//Configuracion de motor de plantilla

app.set("view engine", "ejs")

//Rutas

app.use("/",mainRouter);
/* app.use("/product",productRouter);
app.use("/cart", cartRoutes);
app.use("/users", userRoutes); */

//Ruta Apis

/* app.use(productoRouter)
app.use(usuarioRouter) */

//Error 404

app.use((req,res,next) => {
    res.status(404).render("error404")
})