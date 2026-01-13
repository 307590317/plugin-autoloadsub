const {
  event:IINAEvent,
  file,
  core,
  mpv,
} = iina;

let subTitles = []
const subDirPath = '/Users/mason/movies/subTitle'

IINAEvent.on('iina.window-loaded', ()=>{
  subTitles = file.list(subDirPath).map(item => ({name:item.filename.slice(0, -4),filename:item.filename}))
})

IINAEvent.on("iina.file-loaded", (url) => {
  if (!url) return;
  const title = url.split("&title=")[1];
  
  if (!title) return null;
  const decodeTitle = decodeURIComponent(title).toLowerCase();
  const subItem = subTitles.find(item =>item.name.toLowerCase() === decodeTitle)
  if(!subItem) return;
  // 加载字幕
  mpv.command('sub-add',[`${subDirPath}/${subItem.filename}`]);
});


