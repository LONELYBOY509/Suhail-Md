const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_39_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1MW5CTnZhTHBPVHRnd1c5UzRFNVZLWEZKRUV2UkR2MXF0Z2s1Sjg3TmwwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpTk5DSXczeVJkNjg0Q2N4UGtRdWhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxZmY1ODFlLTk4YWItNDM2NC1iNWNjLTNiZjk4ZWY3OWQ3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA0NixcbiAgICAgIDQ4LFxuICAgICAgODIsXG4gICAgICAxMDEsXG4gICAgICAxNTksXG4gICAgICAxMSxcbiAgICAgIDQyLFxuICAgICAgMTI4LFxuICAgICAgOTgsXG4gICAgICAyMTUsXG4gICAgICAxNzgsXG4gICAgICAxMjcsXG4gICAgICAyMzIsXG4gICAgICAyNDUsXG4gICAgICAxNDgsXG4gICAgICAxMDksXG4gICAgICAxMjMsXG4gICAgICAyMDcsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTUyLFxuICAgICAgNTIsXG4gICAgICAxMzMsXG4gICAgICAxNzAsXG4gICAgICA5NSxcbiAgICAgIDU3LFxuICAgICAgMjMzLFxuICAgICAgMTc4LFxuICAgICAgMTk3LFxuICAgICAgMzUsXG4gICAgICA1LFxuICAgICAgMTE0LFxuICAgICAgMTM1LFxuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICA1OCxcbiAgICAgIDgxLFxuICAgICAgNTQsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZXR4UDBKRVB1NjlMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5mcHBOeS9qOTArMFVGK0U4YnhUMytYVTY4Qm1JQ2lPN25UOWVjUHQyREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN1FHdnlzMnp0d04zcGRBWCt2c2VWTUdGVzJHbTdGWW9OT1k0eHpyYk92Ri9XV0lwYTFzOENlUmV6ZFpJN1FuOEtLdDhsYTJXQ0lYcjNJOGlSYW1VQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZnJRaXN3ZlE2enk2aEE0RlJKTFRiQzdyNDdDeXRTNFVLQ1V3eXVxbGk4dzlvNzZmNGVoZkg2MnhCZEo0bE9USzdoUGVidVFYZi8wUlUzOW9aWG5Uamc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzNjcxMTM5OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzExMjU3ODc3OTk3NzE6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM2NzExMzk5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTcyNzM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzczXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLNzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYOFBPR3RjU2ZsQ08rTFdkems4aXc5MFpKQWVacjkrdXFydzNMVlJLZG1ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NzkxODI5OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE3NjM3NDQ5MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs3Mi5qc29uIjogIntcImtleURhdGFcIjpcInBpM3djbU5oMmtiZHlXQ3BET0lsYWVJUm9iNk5JTkFtTXhoTHZhcnEvK289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY3OTE4Mjk5OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NzI0NTc0MjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLNzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyWkloekFmTVFKcVY2OWZSbzJaQ0ZYZ1drUzRwQ0drQW5qMjQxTlJjZ2c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NzkxODI5OTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU3MjQ1ODc2MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
