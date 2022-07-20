import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*「 MikAzuBOT-MD 」*
*❒WEB :* 
●https://is.gd/4ZPpIt
*❒YT :* 
●https://bit.ly/3c0WJz9
*◘IG :* 
●https://instagram.com/asyrafsixyouu`
conn.sendHydrated(m.chat, str, wm, './media/ayang.jpg', 'https://is.gd/4ZPpIt', 'WEBSITE OWNER', 'https://bit.ly/3ax9GjJ', 'GROUP BOT', [
['💰DONASI💰', '/donasi'], ['🌹OWNER😎', '/owner'], ['😱MENUNYA MANA😒', '/m']
], m)

}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
