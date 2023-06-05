import { initScript } from "./loadres";
import stats from "./stats";
let player;
let isDestroy = false;
initScript(() => {
  let info = new URL(location.href);
  let id = info.searchParams.get("id") || "";
  id = decodeURIComponent(id);
  if (/^https?:/i.test(id)) {
    init([id]);
  }
});
const destroy = () => {
  if (!player) return;
  isDestroy = true;
  player.destroy();
  player = undefined;
};
const getLang = () => {
  let lang = navigator.language;
  if (/(cn|zh)/i.test(lang)) return "zh";
  return "cn";
};
async function init(urls: string[]) {
  if (!urls || urls.length < 1) return;
  let url = urls[0];
  const Key = "playTime-" + url;
  let lastPlayTime = parseInt(sessionStorage.getItem(Key) || "") || 1;

  console.info("==== play ", url, lastPlayTime);
  let ele = document.querySelector("#xplayer") as HTMLElement;
  if (!!player) destroy();
  //let url = "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4";
  //url =
  //  "https://m3u.haiwaikan.com/xm3u8/9df98f18a3f5614ef85b0e5369de07a316877bb3ee411965cb32065413c5dae79921f11e97d0da21.m3u8";
  const width = 700;
  player = new globalThis.Player({
    el: ele,
    url: url,
    currentTime: lastPlayTime,
    //autoplay: true,
    //playsinline: true,
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    width: width,
    height: (width * 9) / 16,
    fluid: true,
    volume: 0.4,
    progressDot: [],
    //screenShot: {name: "图"},
    //download: true,
    pip: true,
    keyShortcut: true,
    playsinline: true,
    enableContextmenu: true,
    lang: getLang(),
    crossOrigin: true,
    plugins: [globalThis.HlsJsPlugin],
  });
  /* if (props.urls.length > 0) {
    //_player.emit("resourceReady", [{ name: "default", url: url }, { name: "720", url: url }]);
    console.info("urls", props.urls);
    _player.emit("resourceReady", props.urls.map((v) => {
      if (typeof (v) === "string") {
        return {
          name: v.replace(/.*\//g, ""),
          url: v
        }
      }
      return v
    }));
  } */
  function notifyResize() {
    if (ele && window.parent && window.parent != window) {
      console.info("=== video height", ele?.offsetHeight);
      window.parent.postMessage(
        {
          event: "video_resize",
          data: {
            width: ele.offsetWidth,
            height: ele.offsetHeight,
          },
        },
        "*",
      );
    }
  }
  player.once("ready", () => {
    notifyResize();
    setTimeout(() => {
      player.currentTime = lastPlayTime;
      player.play();
    }, 200);
  });
  player.once("complete", () => {
    player.pause();
  });
  player.on("play", () => {
    stats.play();
  });
  player.on("pause", () => {
    stats.pause();
  });
  player.on("ended", () => {
    stats.end();
  });
  player.on("error", (err) => {
    stats.error(err);
  });
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem(Key, player.currentTime);
  });

  notifyResize();
  window.addEventListener("resize", () => {
    notifyResize();
  });
  //player.value = _player;
}
