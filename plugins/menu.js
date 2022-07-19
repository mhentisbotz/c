import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `◆▬▬❴ *Hai kak ${conn.getName(m.sender)}* ❵▬▬◆
[❗️] Sebelum main bot, baca dulu ya
║➸ Dilarang spam bot
║➸ Dilarang call bot
║➸ Ownerku ganteng loh:v
║➸ Sewa bot 10k manen
║➸ Hubungi nomor owner
║➸ No owner [Wa.me/6285785694474]
║➸ Satu lagi
║➸ jan semangat, tetaplah putus asa
◆▬▬❴ *Mohon di mengerti* ❵▬▬◆`
conn.sendHydrated(m.chat, str, wm, './media/ayang.jpg', 'https://Instagram.com/nan_sakrn', 'IG Owner', '085785694474', 'Nomor Owner', [
['Donasi', '/donasi'], ['Owner', '/owner'], ['List Menu', '/m']
], m)

}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
