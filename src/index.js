// On importe la librairie "fastify"
import fastify from "fastify"
import fastifyMongo from 'fastify-mongodb'

// On créé une application fastify en utilisant l'import de notre librairie
// On configure fastify pour afficher des logs
const app = fastify({ logger: true })

// On connecte la base de donnée MongoDB
app.register(fastifyMongo, {
    url: 'mongodb+srv://MyTodoApp:MyTodoApp@cluster0.obacx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
})

// On créé une route fastify sur l'URL "/"
app.get("/bienvenue", async () => {
    return "Bienvenue sur notre librairie en ligne ! Nous apprenons pour le moment à faire des API."
})

// Création de la route qui retourne tous les livres
app.get("/books", async () => {
    return []
})

// Cette fonction démare notre serveur d'API
const start = async () => {

    console.log("Lancement du serveur")

    await app.listen(3000)

    console.log("Le serveur est lancé, vous pouvez visiter: http://localhost:3000")

}

// Lancement de la fonction de démarrage
start();