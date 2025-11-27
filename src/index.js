const {
  console,
  event,
  mpv,
} = iina;


event.on("iina.file-loaded", (url) => {
  if (!url) return;

  // 只处理 http/https 视频
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return;
  }

  // 获取 subtitle 参数
  const subPath = url.split("&subPath=")[1];
  if (!subPath) return null;
  const decodeSubPath= decodeURIComponent(subPath);
  console.log('subPath', { subPath, decodeSubPath });

  // 加载字幕
  try {
    mpv.command('sub-add',[decodeSubPath]);
  } catch (error) {
    console.log('Not found subTitle');
  }
});


