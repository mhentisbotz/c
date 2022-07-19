import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*Ready nokos all apk & all Negara*
Nokos indo _5k_ buat WhatsApp 
Sekarang cuma *4k*
Promo terbatas!
Negara lain?
Chat saja di nomor ini
https://wa.me/message/MKYNWO66LFYPL1
//Yang tidak tau apa itu nokos
Nokos adalah nomor kosong yang di jual untuk di daftarkan ke apk seperti WhatsApp, telegram, nanti jika kamu beli nokos di saya, saya akan kasih nomor, dan kamu harus daftarin/verifikasi ke WhatsApp/apk lain, dan nanti saya kasih code nya buat Verifikasi!
_*Jadi tidak perlu beli kartu untuk mendapatkan nomor baru*_
*Kurang paham?, Jika masih tidak paham tanya saja langsung ke saya*
Klik https://wa.me/message/MKYNWO66LFYPL1`
conn.sendHydrated(m.chat, str, wm, './media/ayang.jpg', 'https://Instagram.com/nan_sakrn', 'IG Owner', '085785694474', 'Nomor Owner', [
['Donasi', '/donasi'], ['Owner', '/owner'], ['List Menu', '/m']
], m)

}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
