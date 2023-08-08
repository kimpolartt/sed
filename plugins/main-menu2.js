let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/7a52c6729d9b36969d00c.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah Yeroze MD, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n\n*言 mainmenu*\n*言 aimenu*\n*言 groupmenu*\n*言 gamemenu*\n*言 rpgmenu*\n*言 stikermenu*\n*言 makermenu*\n*言 animanga*\n*言 nsfwmenu*\n*言 internet*\n*言 downloadmenu*\n*言 toolsmenu*\n*言 islamic*\n*言 quotesmenu*\n*言 random*\n*言 ownermenu*\n\n_2023 © YerozeMD_
`
conn.sendMessage(m.chat, {
      text: sewa,
      contextInfo: {
      externalAdReply: {
      title: `Yeroze - MD`,
      body: ` Created by Kimpol`,
      thumbnailUrl: fotonya,
      sourceUrl: `https://chat.whatsapp.com/BEc1we1qUCK2XJowOutY5O`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
