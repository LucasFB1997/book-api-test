// On importe la librairie "fastify"
import fastify from "fastify"

// On créé une application fastify en utilisant l'import de notre librairie
// On configure fastify pour afficher des logs
const app = fastify({ logger: true })

// On créé une route fastify sur l'URI "/"
const route = app.get("/", async () => {
    return "Bienvenue sur notre librairie en ligne ! Nous apprenons pour le moment à faire des API."
})

// Cette fonction démare notre serveur d'API
const start = async () => {

    console.log("Lancement du serveur")

    await app.listen(3000)

    console.log("Le serveur est lancé, vous pouvez visiter: http://localhost:3000")

}

// Lancement de la fonction de démarrage
start();