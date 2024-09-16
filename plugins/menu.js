const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.postimg.cc/yxKfcqGQ/Anshad.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭─➤ 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎 »
│❖ *ᴀᴜᴛʜᴏʀ* : ᴀɴsʜᴀᴅ
 | ❖ *ʙᴏᴛ* : ʀᴏᴄᴋʏ
│❖ *ᴋᴇʀɴᴇʟ* : ʟɪɴᴜx
│❖ *ɪɴꜱᴛᴀɢʀᴀᴍ* : https://instagram.com/ans.had?utm_medium=copy_link
│❖ *ᴄᴏɴᴛᴀᴄᴛ* : wa.me/919995390942
╰────────────────❋ཻུ۪۪➹
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
          ©919995390942  
╭────────────────➤
│« *ᴀʟʟ ᴍᴇɴᴜ* »
╭────────────────╯
│
│[ *ᴍᴇᴅɪᴀ* ]
│
│ ❖ .sᴏɴɢ
│ ❖ .ᴠɪᴅᴇᴏ
│ ❖ .ɪɴsᴛᴀ
│ ❖ .ʏᴛ
│       
│[ *ᴄᴏɴᴠᴇʀᴛ* ]
│
│ ❖ .ɢɪғ
│ ❖ .ᴍᴘ3
│ ❖ .ᴛᴛs
│ ❖ .ɪᴍɢ
│ ❖ .sᴛɪᴄᴋᴇʀ
│ ❖ .ᴀᴛᴛᴘ
│ ❖ .ᴛᴛᴘ
│ ❖ .ᴘʜᴏᴛᴏ
│ ❖ .2ɪᴍɢ
│
│[ *ᴍᴀᴋᴇʀ* ]
│
│ ❖ .logo
│ ❖ .spack
│ ❖ .shpack
│ ❖ .makermenu
│ ❖ .txttoimg
│ ❖ .effectimge 
│ 
│[ *ғᴜɴ* ]
│
│ ❖ .ᴊᴏᴋᴇ
│ ❖ .ᴍᴇᴍᴇ
│ ❖ .ǫʀ
│ ❖ .ᴄʜᴀɴɢᴇsᴀʏ
│ ❖ .ᴛʀᴜᴍᴘsᴀʏ
│ ❖ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ *sᴇᴀʀᴄʜ* ]
│ 
│ ❖ .ᴡɪᴋɪ
│ ❖ .ʟʏʀɪᴄ
│ ❖ .sʜᴏᴡ
│ ❖ .ᴍᴏᴠɪᴇ
│ ❖ .ᴡᴇᴀᴛʜᴇʀ
│
│[ *ᴛᴀɢ* ]
│
│ ❖ .ᴛᴀɢᴀʟʟ
│ ❖ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ *ᴏᴛʜᴇʀ* ]
│ 
│ ❖ .ᴀɴɪᴍᴇ
│ ❖ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ❖ .ss
│ ❖ .ᴅɪᴄᴛ
│ ❖ .sʜᴏʀᴛ
│ ❖ .ᴛʀᴛ
│ ❖ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ *ᴏᴡɴᴇʀ ᴄᴍɴᴅs* ]
│
│ ❖ .ғᴜʟʟᴇᴠᴀ 
│ ❖ .ᴀᴜᴛᴏʙɪᴏ
│ ❖ .ʙᴀɴ
│ ❖ .ᴀᴅᴅ
│ ❖ .ᴘʀᴏᴍᴏᴛᴇ
│ ❖ .ᴅᴇᴍᴏᴛᴇ
│ ❖ .ᴍᴜᴛᴇ
│ ❖ .ᴜɴᴍᴜᴛᴇ
│ ❖ .ɪɴᴠɪᴛᴇ
│ ❖ .sᴇᴛᴠᴀʀ
│ 
│
│   ❏ *ᴄᴏᴅᴇᴅ ʙʏ ᴀɴsʜᴀᴅ* ❏
╰────────────────╯
`}) 

}));
