import util from 'util'
import fetch from 'node-fetch'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/AUD-20220708-WA0325.mp3'
conn.sendFile(m.chat, vn, 'Gaboleh-gitu.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: true , contextInfo: { showAdAttribution: true,
         externalAdReply: { 
             title: 'Recode Sendiri Kapan Bisa Nya Kalo Pakai Sc Orang',  
             body: 'https://is.gd/4ZPpIt', 
             description: '', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/a9a6907db67ca1a0c0877.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
