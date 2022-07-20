import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ XL : 081946945315
├ Dana : 085646606905
├ Gopay : 081946945315
├ Telkomsel : 085646606905
└────
Berapapun donasi kalian akan sangat berarti 👍
*Contact person Owner:*
wa.me/628 (Jaka)`
conn.sendHydrated(m.chat, str, wm, './media/IMG-20220706-WA0063.jpg', 'https://is.gd/4ZPpIt', 'WEBSITE', null, null, [
['MENU MIKAZU', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
