let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `RULES *MikAzuBOT-MD*

WEB : https://is.gd/4ZPpIt
YT : https://bit.ly/3c0WJz9

*RULESNYA DISINI DEK*
-Harus Subscribe YT Owner
-Harus Follow IG Owner
-Harus Donasi Dan Sewa MikAzu Bot
-No Call Owner & Bot
-No Spam Owner & Bot
-Harus Jadi Pcrnya Owner🗿

~ YT : MikAzu 929

Peraturan: 11/jul/22
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama MikAzu Bot", rowId:".menu"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan MikAzu Bot ke grup kamu", rowId:".sewaa"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: fkontak })
}

handler.alias = ['general']
handler.command = /^(rules|rule)$/i

export default handler
