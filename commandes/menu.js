const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏━━ 🥳𝘼𝙇𝙊𝙉𝙀- 𝙈𝘿❤️━━┓
┃   Mode: ${mode}
┃   User : ${s.OWNER_NAME}
┃   
┣━🫣🤗𝙷𝚎𝚕𝚕𝚘 𝚖𝚢 𝚏𝚛𝚒𝚎𝚗𝚍 𝙸 𝚊𝚖 𝚑𝚊𝚙𝚙𝚢 𝚝𝚘 𝚜𝚎𝚎 𝚢𝚘𝚞 𝚊𝚐𝚊𝚒𝚗 ❣️❣️𒈒━➠
┗━━━𒈒❣️❣️❣️❣️❣️𒈒━━┛\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣༆ 🫠🫠
┣༆😊T𝚑𝚒𝚜 𝚒𝚜 𝚝𝚑𝚎 𝙼𝙴𝙽𝚄 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚊𝚜𝚔𝚒𝚗𝚐 𝚏𝚘𝚛❣️
┗━━━━━━━━━━━━━━┛\n




Alone md cmds𒈒
`;



    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃༆ ${cmd}`;

        }

        menuMsg += `
┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏✓𝘼𝙇𝙊𝙉𝙀 𝙈𝘿•
┣❏by Topu Tech 
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃❣️𝙴𝚗𝚓𝚘𝚢 𝚢𝚘𝚞𝚛 𝚝𝚒𝚖𝚎 🥹 
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *BONIPHACE-MD*, déveloper Fredie" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
          
