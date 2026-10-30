// creer un formulaire qui a a un champs de saisi ou on vas mettre l'url du site et un bouton generer et si on appui sur ce boutton on aura le qrcode de ce site. on cree aussi le readme.md pour expliquer les etapes qu'on a fait pour creer ce projet.
// j importe express et qrcode
const express = require('express');
const qrcode = require('qrcode');
// declaration de l application express
const app = express()
// route pour le formulaire
app.get('/formulaire' , (req , res)=> {
    res.send (`<h1>generer le code qr</h1>
    <form action="genererQr" method="Get">
        <input type="url" name="url" placeholder = "https://exemple.com" required>
        <button type="submit">genererQr</button>
        </form>
`);
});

//rout qrcode
app.get('/genererQr',async (req ,res) =>{
    const url = req.query.url ;
    let qrimage = await qrcode.toDataURL(url);
    res.send(`<img src="${qrimage}">`);

});
//demarage du server
app.listen(3000, () => {
    console.log('le serveur est demarré sur le port 3000');
});