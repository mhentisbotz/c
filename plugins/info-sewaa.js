import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `Hai ${conn.getName(m.sender)} Mau Sewa?
*SEWA BOT*
┏━━〔 ıll LIST HARGA llı 〕━
┃⌬ 15K PERMANEN (Dana/gopay)
┃⌬ 20K (Pulsa•Telkomsel)
┗━━━━━━━━━━━━━㉿
┏━━〔 ıll KELEBIHAN llı 〕━
◎ BOT ON 24 JAM NONSTOP
◎ FITUR BANYAK
◎ FAST RESPON
◎ DAN LAIN LAIN
◎ MINAT? HUBUNGI OWNER
┗━━━━━━━━━━━━━`
conn.sendHydrated(m.chat, str, wm, pepe, urlnya, 'IG OWNER', null, null, [
['OWNER', '/owner']
], m)

}
handler.help = ['sewaa']
handler.tags = ['info']
handler.command = /^sewa(a|bot)$/i

export default handler
