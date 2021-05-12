## Commandes du terminal ##


pwd => Affiche dans quel répertoire on se trouve

ls => List == liste le répertoire dans lequel on est.

cd => Change Directory == Change de répertoire.

mkdir NomDuRepertoire => Make Repertory

touch => Créer un fichier.

rm => Remove == Supprimer un fichier.

rmdir => Permet de supprimer un répertoire



## Commande terminal GIT ##


git init => Initialise un repository git dans le repertoire de notre projet

git status => Liste toutes création/modifs etc que nous réalisons

git add nomDuFichier => permet de passer un fichier en mode "suivi"

git commit -m "Création de README.md" => Commit notre fichier suivi

git log => affiche tous les commits depuis le début du projet

git remote add origin URL => Permet de configurer un serveur distant

git remote => Permet de lister tous mes serveurs créés

git push NomDuServeur NomDeBranch
    => Permet d'envoyer le code déjà commité vers le serveur voulu

git add . => enregistre tous les fichiers en même temps


-- Partie sur les branchs --

git branch 
    => Liste toutes les branchs du projet (branch == espace de travail)

git branch NomDeBranch => Création de nouvelle branch

git checkout NomDeBranch (où l'on veut aller) 
    => bascule sur la branch souhaitée

git clone URL NomDuRepertoire => copie projet github sur notre ordi



## Notes sur le cours ##
**Partie sur la configuration de notre page web**

- Dans le `package.json` on peut créer autant de script que l'on veut pour tester le bon fonctionnement de notre code
- La commande `yarn` fonctionne de la même manière que la commande `npm`


**Partie sur l'installation de l'API fastify et son utilisation**

- Fastify == Permet de faire des API de façon très simple ("https://www.fastify.io/docs/latest/Getting-Started/")
- `npm i fastify --save` ou `yarn add fastify` pour installer fastify
- Pour ne pas versionner le "node_modules", il faut gréer un fichier ".gitignore" et écrire les fichiers/dossiers que l'on ne veut pas versionner
- Pour arrêter un server démarré, il faut dans le terminal taper "ctrl + c"
- Il faut installer le package mongodb avec la commande `yarn add fastify-mongodb`


**Partie sur l'installation de `nodemon`**

- Dans le terminal entrer la commande `yarn add nodemon`, cela permettra de ne pas avoir à redémarrer le server à chaque modification


**Partie sur les messages d'erreurs**

- Pour les fonctions DELETE on utilise la grande majorité du temps le code 204
- Pour les fonctions UPDATE on utilise le code 200(pour le développeur mobile) ou 206(pour l'efficacité)
- Pour la fonctionnalité pour trouver un livre, on utilise le code 404 pour signaler que l'on ne trouve pas

**Comment installer l'application**

1. Cloner le projet
```
git clone https://github.com/LucasFB1997/book-api-test
```

2. Installer les dépendances
```
yarn install
```

3. Configurer l'application
```

```

######



## Exercice N°1 GIT ##

- Créer un répertoire "MonProjet" sur votre bureau
- Initialiser un "Repository" git dans ce répertoire
- Créer un fichier README.md dans ce répertoire
- On suit le fichier via git
- On commit le fichier avec le message "Création de README.md"

## Exercice N°2 GIT ##

- Retoucher le fichier README.md (avec VSCODE) en ajoutant "Bonjour"
- On suis le fichier via git
- On commit le fichier avec le message "Ajout de bonjour dans README.md"

## Exercice N°3 GIT ##

- Créez un repository sur github, vous pouvez l'appeler comme vous le souhaitez
- Ajouter le remote "origin" sur votre terminal avec git
- Pousser tout votre code sur github

## Exercice N°4 GIT ##

1. Cloner le repository suivant: https://github.com/Djeg/TestGitGithub dans le dossier de votre choix
2. Ouvrir ou se déplacer dans un terminal dans ce dossier (avec la commande cd)
3. Créer votre propre branche (attention, minuscule et pas d'espace ni de caratères spéciaux !!)
4. Vous vous déplacez sur la branche que vous venez de créer
5. Vous ajoutez ce que vous voulez dans le fichier README.md
6. Faire un commit avec vos modifications
7. Poussez le code sur github
8. Faire une "pull request" sur github

## Exercice N°5 GIT/API ##

1. Cloner le repository que vous venez de créer dans le répertoire
2. On créé un fichier README.md à l'intérieur
3. On rajoute une petite ligne dans le fichier README.md (ex:"API qui liste des livres)
4. On fait un commit
5. On push sur github

## Exercice N°6 : API initialisation ##

1. Lancer la commande `npm init`
2. Renseigner dans "entry point" le chemin `src/index.js`
3. Ajouter la ligne "type": "module", après la clefs `main` dans le `package.json`
4. Faire un commit et pousser sur github

## Exercice N°7 : Création fichier index.js ##

1. Créer le fichier `src/index.js` avec un console.log
2. Ajouter un script dans `package.json` avec la configuration suivante :
```js
"script": {
    "start":"node src/index.js"
}
```

3. Vous pouvez tester en lancant la commande `yarn start` ou bien `npm start`
4. Faire un commit et "push" sur github

## Exercice N°8 : Installer Fastify ##

1. On lance l'installation avec la commande `yarn add fastify` (vous pouvez vérifier l'installation en regardant `package.json`)
2. On ignore le versionning du répertoire `node_modules` :
    1. Créer un fichier `.gitignore` à la racine du projet
    2. Ajouter la ligne `node_modules` dans le fichier `.gitignore`
3. On commit et push sur github

## Exercice N°9 : Lancer un server fastify ##

1. Dans `index.js` ajouter le code permettant de démarrer un server sur le port 3000
2. Vous pouvez lancer la commande `yarn start` pour tester votre server (vous pouvez appuyer sur Ctrl-C afin de quitter le server)
3. On commit et on push

## Exercice N°10 : Afficher un text de bienvenue sur la route "`/`" ##

1. Dans `src/index.js` ajouter une route get avec le chemin `/` et retourner un objet json de votre choix
2. Vous pouvez tester en démarrant votre server (si déjà lancé vous pouvez l'arrêter avec la touche Ctrl-C dans votre terminal, pour lancer le server faire `yarn start`).
3. On commit et on push

## Exercice N°11 : Installer fastify mongodb extension ##

1. Installer le paquet : `fastify-mongodb` avec la commande `yarn add fastify-mongodb`
2. Configurer fastify mongo dans le fichier `index.js` (Vous pouvez utiliser l'url: `mongodb+srv://MyTodoApp:MyTodoApp@cluster0.obacx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
3. Vous pouvez tester en lancant votre server (faire Ctrl-C pour stopper le server si il est en route, pour lancer le server la commande est `yarn start`)
4. On commit et on push sur github

## Exercice N°12 : Retourner tous les livres d'une BDD ##

1. Créer la route `/books`
2. On récupère la collection "books" depuis mongodb
3. On récupère tous les livres de notre collection
4. On retourne les livres
5. On commit et on push

## Exercice N°13 : Installer et mettre en place nodemon ##

1. Installer nodemon avec la commande `yarn add nodemon`
2. Modifier le script `start` dans le `package.json` pour utiliser nodemon
3. On commit et on push

## Exercice N°14 : Installer l'extension "Rest Client" ##

1. Installer l'extension VSCode "Rest Client"
2. Créer un fichier `api.http` à la racine du projet
3. Ecrire une requête GET sur `http://localhost/bienvenue`
4. Ecrire une requête GET sur `http://localhost/books` (Requêtes séparer par 3 hashtag "###")
5. Vous pouvez tester en appuyant sur "Send Request" au dessus de votre requête.
6. On commit et on push sur github

## Exercice N°15 : Création d'un livre ##

1. On créé une route fastify `POST /books`
2. On récupère les données de la requête en utilisant `request.body`
3. On récupère la collection `books` depuis mongodb
4. On insère le livre dans la base de donnée
5. On retourne le livre qui a été enregistré dans la base de donnée
6. On commit et on push

## Exercice N°16 : Attacher un schéma de validation ##

1. Dans le fichier `src/index.js` ajouter le schéma `createBookShema`
2. Attacher le schéma à la route `POST /books`
3. On commit et on push sur github

## Exercice N°17 : Récupérer un seul livre ##

1. Dans le fichier `src/index.js` ajouter une route `GET /book/:id`
2. Récupérer le paramètre id depuis la route
3. Récupérer le livre avec l'id depuis MongDB
4. Retourner le livre
5. On commit et on push

## Exercice N°18 : Mettre à jour et supprimer ##

1. Dans le `src/index.js` écrire le code pour ces deux routes:
    1. `PATCH /books/:id`
    2. `DELETE /books/:id`
2. Vous pouvez tester avec le fichier `api.http`
3. On commit et on push

## Exercice N°19 : Mettre de la configuration ##

1. Créer un fichier `.env.dist` avec l'url MONGO_DB
2. Ignorer le fichier `.env` dans le fichier `.gitignore`
3. On commit et on push