const {google}=require("googleapis");
const path = require("path")
const fs = require("fs")

const CLIENT_ID = '323324841346-f4ki29s8ueijndvc1dhe79svqmuo5djr.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

const REFRESH_TOKEN = '1//04aTGkZxPla0qCgYIARAAGAQSNgF-L9IrEpoDAzs5qVZfkDfM9LlATyJTS8177bq0CbSrwQiObjEHc_X5v14fUHSqdW_EA8b5_A'

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: "v3",
    auth: oauth2Client
})

const videoPath = path.join(__dirname,'C:\Users\hp\Desktop\PW Assign\proveway-assignment\WhatsApp Video 2023-10-06 at 12.50.16_bf831296.mp4')


async function uploadVideo(){
    try {
        const response = await drive.videos.create({
            requestBody:{
                name:'morya.mp4',
                mimeType:'video/mp4'
            },
            media:{
                mimeType:'video/mp4',
                body: fs.createReadStream(videoPath)
            }
        })
        
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}

uploadVideo();

