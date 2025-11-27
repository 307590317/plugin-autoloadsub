const {
  console,
  menu,
  event,
  utils
} = iina;

console.log("Plugin is running:Auto LoadSub");
// ln -s /Users/mason/my/autoloadsub ~/Library/Application\ Support/com.colliderli.iina/plugins/com.mason.autoloadsub.iinaplugin-dev
// 插件加载
// event.on("iina.file-loaded", (url) => {
//   console.log('fileLoad:', url);
  
//   if (!url) return;

//   // 只处理 http/https 视频
//   if (!url.startsWith("http://") && !url.startsWith("https://")) {
//     return;
//   }

//   // 获取 subtitle 参数
//   const subPath = getSubtitlePath(url);
//   if (!subPath) return;

//   // 加载字幕
//   plugin.player.addSubtitles(subPath);
// });

// const prefix = '/Users/mason/115挂载/学习/字幕';
// const suffixes = ['srt', 'ass', 'vtt', 'pgs'];

// // 从 URL 中解析 subTitle
// function getSubtitlePath(url) {
//   const query = url.split("?")[1];
//   if (!query) return null;

//   const params = new URLSearchParams(query);
//   const subName = params.get("name");
//   if (!subName) return null;

//   const decodeSubName = decodeURIComponent(subName);
//   const suffix = suffixes.find(item =>
//     fs.existsSync(`${prefix}/${decodeSubName}.${item}`)
//   );

//   return suffix && `${prefix}/${decodeSubName}.${suffix}`;
// }



