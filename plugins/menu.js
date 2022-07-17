import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `Woy ${conn.getName(m.sender)} Mau main bot?
*BACA DULU*
•Lu Kalo Main Bot Main Aja
•Gosah Spam
•Kalo Ada Yang Error, Cepet Hubung Owner Biar Di Perbaiki
•Dan Satu Lagi Gosah Call Benci Gw
JOIN JUGA NIH 
https://chat.whatsapp.com/ED7th5Ie38eBayZEbDPxwY
BIAR RAME
*Langsung Pencet List Menu!*`
conn.sendHydrated(m.chat, str, wm, './media/ayang.jpg', 'https://Instagram.com/nan_sakrn', 'Follow Gblk', '085785694474', 'Nomor Owner', [
['Donasi', '/donasi'], ['Owner', '/owner'], ['List Menu', '/m']
], m)

}
handler.help = ['menu']
handler.tags = ['info']
handler.command = /^(menu)$/i

export default handler
