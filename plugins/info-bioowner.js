let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*✉️ Nama* : Jaka
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 20.Juni.2006
*🎨 Umur* : 16
*🧮 Kelas* : 1 Sma
*🧩 Hobby* : Chatting, Recode script bbot
*🗺️ Tinggal* : Gresik, jawa timur, Indonesia

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @nan_sakrn
*🇫  Facebook* : @Jaka nation
*🏮 Chanel Youtube* : I AM NITSU
*🐈 Github:* JakaV1

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], fkontak)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
