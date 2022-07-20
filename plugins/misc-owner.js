function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                「 YT : MikAzu 929 」            `, orderTitle: 'MikAzuBOT-MD', sellerJid: '0@s.whatsapp.net'}}}
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), ftroli)
}
handler.alias = ['owner']
handler.command = /^(owner)$/i

export default handler
