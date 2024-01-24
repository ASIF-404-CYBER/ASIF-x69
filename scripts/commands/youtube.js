const axios = require('axios');
const fs = require('fs-extra');
const yts = require('yt-search');
const path = require('path');
const ytdl = require('@distube/ytdl-core');

module.exports.config = {
  name: 'yt',
  version: '1.3.0',
  hasPermission: 0,
  credits: 'Kshitiz',
  description: 'Access YouTube',
  prefix: true,
  premium: false,
  category: 'Media',
  usages: 'youtube [video name]',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const input = event.body;
  const text = input.substring(12);
  const data = input.split(' ');

  if (data.length < 2) {
    return api.sendMessage('Please specify a video name.', event.threadID);
  }

  data.shift();
  const videoName = data.join(' ');

  try {
    api.sendMessage(`✅ | Searching video for "${videoName}".\n⏳ | Please wait...`, event.threadID);

    const searchResults = await yts(videoName);
    if (!searchResults.videos.length) {
      return api.sendMessage('No video found.', event.threadID, event.messageID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: 'audioandvideo' });

    const fileName = `${event.senderID}.mp4`;
    const filePath = path.join(__dirname, `/cache/${fileName}`);

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', () => {
      console.info('[DOWNLOADER]', 'Starting download now!');
    });

    stream.on('info', (info) => {
      console.info('[DOWNLOADER]', `Downloading video: ${info.videoDetails.title}`);
    });

    stream.on('end', () => {
      console.info('[DOWNLOADER] Downloaded');

      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('The file could not be sent because it is larger than 25MB.', event.threadID);
      }

      const message = {
        body: `📹 | Here's your video\n\n🔮 | Title: ${video.title}\n⏰ | Duration: ${video.duration.timestamp}`,
        attachment: fs.createReadStream(filePath),
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};