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
- Dans le `package.json` on peut créer autant de script que l'on veut pour tester le bon fonctionnement de notre code
- La commande `yarn` fonctionne de la même manière que la commande `npm`



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

## Exercice N°5 ##

1. Cloner le repository que vous venez de créer dans le répertoire
2. On créé un fichier README.md à l'intérieur
3. On rajoute une petite ligne dans le fichier README.md (ex:"API qui liste des livres)
4. On fait un commit
5. On push sur github

## Exercice N°6 ##

1. Lancer la commande `npm init`
2. Renseigner dans "entry point" le chemin `src/index.js`
3. Ajouter la ligne "type": "module", après la clefs `main` dans le `package.json`
4. Faire un commit et pousser sur github

## Exercice N°7 ##

1. Créer le fichier `src/index.js` avec un console.log
2. Ajouter un script dans `package.json` avec la configuration suivante :
```js
"script": {
    "start":"node src/index.js"
}
```

3. Vous pouvez tester en lancant la commande `yarn start` ou bien `npm start`
4. Faire un commit et "push" sur github