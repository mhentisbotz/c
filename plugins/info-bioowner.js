let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*✉️ Nama* : Asyraf
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 30.September.2006
*🎨 Umur* : 17
*🧮 Kelas* : 1 Sma
*🧩 Hobby* : Chatting, Recode script BOT, Main Game
*🗺️ Tinggal* : Gresik, jawa timur, Indonesia

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : https://is.gd/4ZPpIt
*🏮 Chanel Youtube* : I AM NITSUhttps://is.gd/4ZPpIt
*🐈 Github:* https://is.gd/4ZPpIt

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], fkontak)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
