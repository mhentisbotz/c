import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `FULL GC BOT & ALL SOSMED OWNER :\nhttps://is.gd/4ZPpIt`
conn.sendButtonDoc(m.chat, str, wm, 'OWNER GANZ','.owner', ftextt, m)
}
handler.command = handler.help = ['gcbott']
handler.tags = ['info']

export default handler
