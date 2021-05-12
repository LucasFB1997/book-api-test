// On importe la librairie "fastify"
import fastify from "fastify"
import fastifyMongo from 'fastify-mongodb'


// On créé une application fastify en utilisant l'import de notre librairie
// On configure fastify pour afficher des logs
const app = fastify({ logger: true })


// On connecte la base de donnée MongoDB grâce à un plugin
app.register(fastifyMongo, {

    url: 'mongodb+srv://MyTodoApp:MyTodoApp@cluster0.obacx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

})


// On créé une route fastify sur l'URL "/bienvenue"
app.get("/bienvenue", async () => {

    return "Bienvenue sur notre librairie en ligne ! Nous apprenons pour le moment à faire des API."

})


// Création de la route qui retourne tous les livres de notre base de donnée (MongoDB)
app.get("/books", async () => {

    // Mongo est une base de donnée qui contient des collections (Un peu comme des tables en SQL)

    // Ici on récupère la collection "books"
    const collection = app.mongo.db.collection('books')

    // Sur cette collection nous pouvons utiliser plusieurs fonctions. Ici, nous allons récupérer TOUS les livres
    const books = await collection.find().toArray()

    // On retourne les livres de notre base de donnée, dans la constante sous forme de tableau "books"
    return books

})


// On créé une route qui retourne qu'un livre par son identifiant
app.get('/books/:id', async (request) => {
    // On récupère l'identifiant rentré dans notre URL
    const id = request.params.id

    // On récupère notre collection mongodb
    const collection = app.mongo.db.collection('books')
    
    // On va chercher un seul livre par son ID
    try {

        // Nous récupérons le livre avec l'id spécifié dans la route
        const book = await collection.findOne({ _id: new app.mongo.ObjectId(id) })

        // Si il n'y a pas de livre, nous levons une erreur
        if (!book) {

            throw new Error('This books does not exists')

        }

        // Si tout c'est bien passé, on retourne le livre
        return book

    } catch(error) {
     // Si la moindre erreur est survenue lors du "try" nous exécutons le code suivant :

        // On change le status code par 404 (Not Found)
        reply.status(404)

        // On retourne le message de l'erreur
        return { error: error.message }

    }

})


// Création d'une route pour mettre à jour un livre
app.patch('/books/:id', async (request) => {
    // Pour mettre à jour un livre sur MongoDB, il faut utiliser : await collection.updateOne({ _id: new app.mongo.objectId(id) }, nouveauLivre)

    // Récupération de l'identifiant
    const id = request.params.id

    // Récupérer le contenu du body
    const book = request.body

    // Récupération de la collection mongodb
    const collection = app.mongo.db.collection('books')

    // Chercher le livre à modifier
    await collection.updateOne(
        { _id: new app.mongo.ObjectId(id) }, 
        { $set: book }
    )

    const updateBook = await collection.findOne(
        { _id: new app.mongo.ObjectId(id) }
    )

    // On retourne notre livre
    return updateBook

})


// Suppression d'un livre
app.delete('/books/:id', async (request) => {

    // Récupération de l'identifiant
    const id = request.params.id

    // Récupération de la collection mongodb
    const collection = app.mongo.db.collection('books')

    // Chercher le livre à modifier
    await collection.deleteOne({
        _id: new app.mongo.ObjectId(id)
    })

    reply.status(204)

    return null

})


// On déclare un schéma qui nous permettra de valider les données envoyées dans les requêtes POST / GET
const createBookSchema = {
    type: 'object',
    // On définie les propriétés
    properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' },
        author: { type: 'string' },
        price: { type: 'number' },
        stars: { type: 'number' }
    },
    // Les propiétés obligatoire pour la validation
    required: [
        'title',
        'description',
        'image',
        'author',
        'price',
        'stars'
    ]
}


// on créé une route qui nous permettra d'ajouter (de créer) un nouveau livre
app.post('/books', {
    schema: { // On ajoute notre schema sur notre fonction de création
        body: createBookSchema
    }
}, async (request) => {

    // Nous récupérons toutes les données qu'il y a dans le corps d'une requête. Cela correspond à notre livre
    const book = request.body

    // Pour enregistrer le livre dans ma BDD (mongodb)
    // J'ai besoin de la collection
    const collection = app.mongo.db.collection('books')

    // On enregistre le livre dans la base de donnée
    const result = await collection.insertOne(book)

    console.log(result)

    // On retourne le livre qui a été enregistrer dans la BDD
    return result.ops[0]

})


// Cette fonction démare notre serveur d'API
const start = async () => {

    console.log("Lancement du serveur")

    await app.listen(3000)

    console.log("Le serveur est lancé, vous pouvez visiter: http://localhost:3000")

}
// Lancement de la fonction de démarrage
start();