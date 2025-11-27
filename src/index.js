const {
  console,
  event,
  file,
  mpv,
} = iina;

const prefix = '/Users/mason/115挂载/学习/字幕';
const suffixes = ['srt', 'ass', 'vtt', 'pgs'];

event.on("iina.file-loaded", (url) => {
  if (!url) return;

  // 只处理 http/https 视频
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return;
  }

  // 获取 subtitle 参数
  const subPath = getSubtitlePath(url);
  console.log('subPath', subPath);
  
  if (!subPath) return;

  // 加载字幕
  mpv.command('sub-add',[subPath]);
});



// 从 URL 中解析 subTitle
function getSubtitlePath(url) {
  const name = url.split("&name=")[1];
  if (!name) return null;
  const decodeSubName = decodeURIComponent(name);
  const suffix = suffixes.find(item =>
    file.exists(`${prefix}/${decodeSubName}.${item}`)
  );

  return suffix && `${prefix}/${decodeSubName}.${suffix}`;
}



