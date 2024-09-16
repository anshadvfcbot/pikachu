const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.postimg.cc/yxKfcqGQ/Anshad.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Github* *(setup)* : *https://github.com/anshadat/Rocky*

*Audio comnds* : *https://github.com/anshadat/Rocky/tree/master/uploads*

*Sticker cmnds* : *https://github.com/anshadat/Rocky/tree/master/uploads*
`}) 

}));
