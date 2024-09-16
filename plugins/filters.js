/* Copyright (C) 2020 farhan-dqz.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '9199995390942@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/I.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
const array = ['alive','Ayin','aliya','am','Aktf','Aa','Alone','Ah','Alo','Aliya','Aliyo','Anshu','alone','ano','athan','ara','Ardra','ayilla','ayn','annan','anshad','Anshad','aysheri','Ayyo','Ara','bilal','Bilal','bye','Broken','Black','baby','Bgm','Bro','Back','bad boy','Bad','Bot','bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','broken','brokenlove','Bye','Cr7','Chunke','chunk','chaya','comrade','chota mumbai','care','Chathi','chatho','Chathy','chechi','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cristiano','Cry','Daa','Dude sir','Darling','da','Dai','DD','die','Da','Dora','enthada','eda','Eee','Enne','en','ellarum','En','enne','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Feel','fvrt','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Good mrng','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Haa','Happy','Hallo','Hai','help','Hm','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i','Ikka','i am back','ijathi','jd','Kycho','Kollam','Kozhi','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kunju','kunna','Kurup','Kutty','Life','Leo','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','love','Myre','Mm','Mamooka','Missing','Mine','maari','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','Messi','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Njn','nokk','n','Nalla','N','Nanban','nanba','Nanba','Nee','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymer','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','Oo','onam','Onam','Ooi','Oh no','Oh','ok bei','Ok bye','ok da','ok','oombi','oompi','over','Para','poyo','pm','Pm','palaji','Poda','Paat','poda','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','uyr','Uyir','Uyr','Umma','Rockyser','Rip','rip','rocky','Ramos','rascal','Rashmika','rashmika','rasool','return','Rocky','Rose','Single','Sett','Show','Scn','Song','song','Sad','Sed','sad','Sahva','saji','Sayip','scene','Sed aayi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','sorry','Sry','Subscribe','sulthan','Super','thalapathy','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Vathi','Vaathi','Va','Vaa','vada','Vava','Veeran','venda','Vijay','verithanam','Vidhi','welcome','Wait','waiting','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919995390942@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/I.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID,contextInfo: { forwardingScore: 0x3e8, isForwarded: true }, quoted : message.data, ptt: true})
        }
const array = ['alive','andi','audio','Ayin','aliya','am','Aktf','Aa','Alone','Ah','Alo','Aliya','Aliyo','Anshu','alone','ano','athan','ara','Ardra','ayilla','Anshad vfc','ayn','annan','Amma','anshad','Anshad','aysheri','Ayyo','Ara','bilal','Bilal','bye','Broken','Black','baby','Bgm','Bro','Back','bad boy','Bad','Bot','bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','broken','brokenlove','Bye','Cr7','Chunke','chunk','chaya','omrade','chota mumbai','care','Chathi','chatho','Chathy','chechi','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cristiano','Cry','Doctor','Daa','Dude sir','Darling','da','Dai','DD','die','Da','Dora','enthada','Eee','Enthuva','Enne','eda','en','ellarum','En','enne','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Feel','fvrt','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Gd mrng','Good mrng','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Hey','Hunais','Haii','Hii','Hlooi','Haa','Happy','Hallo','Hai','help','Hm','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','I','i','ikka','Ikka','i am back','ijathi','jd','Kycho','Kollam','Kozhi','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kunju','kunna','Kurup','Kutty','Life','Leo','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','love','My','Music','Myre','mathiyo','Mm','Mamooka','Missing','mp3','Mine','maari','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','Messi','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Njn','nokk','n','Nalla','N','Nanban','nanba','Nanba','Nee','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','No','neymar','Neymer','New','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','on','Ok','Oo','onam','Onam','Ooi','Oh no','Oh','ok bei','Ok bye','ok da','ok','oombi','oompi','over','Para','poyo','pm','Pm','palaji','Poda','Paat','poda','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','uyr','Uyir','Uyr','Umma','Rockyser','Rip','rip','rocky','Ramos','rascal','Rashmika','rashmika','rasool','return','Rocky','Rocky ser','Rose','Scene','sticker','Single','Sett','Show','Scn','Song','song','Sad','Sed','sad','Sahva','saji','Sayip','scene','Sed aayi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','sorry','Sry','Subscribe','sulthan','Super','tagall','thalapathy','T','Thalaiva','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Vathi','Vaathi','Va','Vaa','vada','Vava','Veeran','venda','Vijay','verithanam','Vidhi','Welcome','welcome','Wait','waiting','why','wow','Xxx tentacion','you','Yaar','Z aayi','2','aara','Aarulle','adi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID,contextInfo: { forwardingScore: 0x3e8, isForwarded: true }, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919995390942@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/Anshad.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Pikachu','Msd','Vijay','rocky','Rashmika','Sry','Da','Line','Aarulle','achodaa','ayin','Aysheri','Ayye','Mm','vijay','onam','thalapathy','Ok','Aktf','Anshad','Sed','Samantha','poda','chaya','Poda','Ayyo','broken','bye','chattho','cute','Eee','engane und','Entha','Enthada','Girls','Good morning','Good night','Hi','Hy','ithokke enth','ivan','Kurippe','Kurumb','Love','naanam','nadakkatte','paavam','Pattumo','pikachu','Pm','Pova','Save','setth','sho','Shoo','Smile','tag','Udayipp','umma','Vaa','Vannu','yo','ys' ]
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
