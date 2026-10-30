# Générateur de QR code

## Ce que fait mon projet

J'ai créé un formulaire avec un champ pour mettre l'URL d'un site et un bouton **Générer**. Quand j'appuie sur le bouton, le QR code du site s'affiche. Je peux le scanner avec mon téléphone pour aller sur le site.

## Ce que j'ai utilisé

- Node.js
- Express
- qrcode

## Les étapes que j'ai faites

1. J'ai créé le dossier `001` et je l'ai ouvert dans VS Code.
2. J'ai tapé `npm init -y` dans le terminal pour créer le fichier `package.json`.
3. J'ai installé les modules avec `npm install express qrcode`.
4. J'ai créé le fichier `server2.js` et j'ai importé express et qrcode avec `require`.
5. J'ai créé la route `/formulaire` qui affiche le champ de saisie et le bouton.
6. J'ai créé la route `/genererQr` qui prend l'URL tapée et fabrique le QR code.
7. J'ai démarré le serveur avec `app.listen` sur le port 3000.
8. J'ai testé dans le navigateur et j'ai scanné le QR code avec mon téléphone.

## Comment lancer

1. Ouvrir le terminal dans le dossier `001`
2. Taper `node server2.js`
3. Aller sur http://localhost:3000/formulaire
4. Mettre l'URL d'un site (avec `https://`) et cliquer sur **Générer**

## Ce que j'ai appris

- Importer des modules avec `require`
- Créer des routes avec Express
- Récupérer ce que l'utilisateur tape avec `req.query`
- Utiliser `async` et `await` pour générer le QR code

Aishatou NdaoL2DSBD