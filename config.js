//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2349071796376,2349076810086,2349163621557,2349012640680";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUUxMzRjSnFvZm93QkdKM2hXZVBuMU9yK1o5a1FybjBEOHdYYXAzU09FUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEhuRG01S0sxb29hNjZCd01vOUhFYk5lT0cxOEFzZzhCaFRtMisvMDRoaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTWhJemFWRmxDZ1ljblVoejVwcGc3NFRKK1ZBc3FxcU8rRVpnb21kRjFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxL1JMNEVKSk1lUVYyUno4WjRPQ1pkTmxNaEJsQ1dlR0djSUhXS2lkR2xNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNVXdjWElsbC9zV2pXdXNCSFFkeVFkU2tGS2dGU1BSNWpFQllYYTRxRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHTjZ3TmxUclZNZVY1d1N4VnlNbXFWbDRrMFRkVExVWlFmNzZFaGFrVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpVaSs5NVpad1B4TlNES2tNV3p2UUkzaTBQSUxzRU5QUGdEQzVQTU9YTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUY4Mi83Y3NjdVE2UjJiWGt2UlJiMkx0dE5vdEtuUlVvVFVTYlk0SDFrRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJCT2VYMUR6RVNqakIxMEF0OFJUTUJwTm5JVGNiQnVOSWdjeTg1REQ1ZEZhZWpKckVDa2xmOXFBa21iZ1RCU0dMVUt3c2IwUEtMNHUwNUxRbHhTSEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJDUXdURXRrSlBNcDlDUiswZWttWVhjQUwzV2wxRjJzS1UxTC9NNk1iZ05vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhZ0VZSWllQVJCV0kzYWRBLUhSN0ZRIiwicGhvbmVJZCI6IjRiZmVhMzc2LWJkMzEtNGRiMC05MDZiLTBlZmM2NGU3MzIzYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUM2VZL0VKMDZycSt0d0lQeFM0dFdtUU5DeGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExiS002VGJJZlNmb1FkUmVxQkpMNmh6VzJzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc2TUhRV1pDIiwibWUiOnsiaWQiOiIyMzQ4MTA5MjQzNjE4OjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xINCtxMERFUHVwaTd3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxQSW12Ylp3c1RPVkJHSXFqanpjSmJ6L1pMNlhiaGlsWkNnS2JWNnNHMXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkoxMkY2eWUwVGRjSTNtcHdEcGZKTStxbXBmem52NzdYZ1piZDBaa0lublpjQzhmNHlhbmtWUHFiWFdXZW1yeFIzUWI0RHcwSTE5RGowT0ZjRGN6RkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2Z2V4QVpLbDZ5ZUoxOE5hQVJYcnc0am5YQzFLTHdvYU1KOHB3T2pvdlU4K3htUFJabm0yWEhhdlF3QlVRR2dJeHdyMnA4aGJGWFNzN0UrRHNjVW5Ddz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDkyNDM2MTg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaVHlKcjIyY0xFemxRUmlLbzQ4M0NXOC8yUytsMjRZcFdRb0NtMWVyQnRjIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NjI3NDY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVaSCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
