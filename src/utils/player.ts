import { initScript } from "./loaders";
import stats from "./stats";
let player;
initScript(() => {
  let url = getUrl(location.href);
  if (/^https?:/i.test(url)) init([url]);
});
function getUrl(url: string) {
  let info = new URL(location.href);
  let hashs = queryObject(info.hash);
  let id = hashs.id || info.searchParams.get("id") || "";
  id = decodeURIComponent(id);
  return id;
}
function queryObject(val: string): { [key: string]: any } {
  val = val.replace(/^#/, "");
  let sp = val.split(/(&|&amp;)/);
  let map = {};
  sp.forEach((v) => {
    if (!v) return;
    let kv = v.split("=").map((v) => v.trim());
    if (kv.length != 2) return;
    map[kv[0]] = kv[1];
  });
  return map;
}
const destroy = () => {
  if (!player) return;
  player.destroy();
  player = undefined;
};
const getLang = () => {
  let lang = navigator.language;
  if (/(cn|zh)/i.test(lang)) return "zh";
  return "cn";
};
let playerURL = "";
async function init(urls: string[]) {
  if (!urls || urls.length < 1) return;

  let url = urls[0];
  if (url == playerURL) return;
  playerURL = url;
  const Key = "playTime-" + url;
  let lastPlayTime = parseInt(sessionStorage.getItem(Key) || "") || 1;
  console.info("==== play", url, lastPlayTime);
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
    controls: {
      initShow: true,
    },
    //autoplay: true,
    //playsinline: true,
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    width: width,
    height: (width * 9) / 16,
    fluid: true,
    volume: 0.3,
    videoInit: true,
    cssFullscreen: false,
    progressDot: [],
    //screenShot: {name: "图"},
    //download: true,
    pip: true,
    keyShortcut: true,

    keyboard: {
      seekStep: 5, //快进/快退快捷键每次操作的时间，单位为s,默认值为10
      disableBodyTrigger: false, //禁用全局监听,
      keyCodeMap: {
        right: {
          keyCode: 39,
          disable: false,
          action: () => {
            let time = player.currentTime + 5;
            console.info("前进", time);
            //快捷键触发的时候执行该函数
            player.seek(time);
            player.currentTime = time;
            player.emit("playing");
          },
        },
      },
    },
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
  async function notifyResize() {
    await wait(10);
    if (ele) {
      let isShu = screen.availHeight > screen.availWidth;
      let height = ele.offsetHeight;
      let width = ele.offsetWidth;
      if (isShu) {
        if (height > screen.availHeight) {
          await wait(5);
          height = ele.offsetHeight;
        }
      }
      height = height + 12;
      //console.info("v_resize=", { width, height });
      postMessage2Parent({
        event: "v_resize",
        data: {
          width: width,
          height: height,
        },
      });
    }
  }
  player.once("ready", () => {
    notifyResize();
    setTimeout(() => {
      player.currentTime = lastPlayTime;
      player.play();
    }, 200);
  });
  player.on("error", (err) => {
    stats.error(err);
  });
  [
    "complete",
    "play",
    "playing",
    "pause",
    "ended",
    "error",
    "seeking",
    "seeked",
    "waiting",
    "canplay",
    "canplaythrough",
    "durationchange",
    "volumechange",
    "bufferedChange",
    "definitionChange",
    "playbackrateChange",
    "screenShot",
    "requestFullscreen",
    "exitFullscreen",
    "requestCssFullscreen",
    "exitCssFullscreen",
    "getRotateFullscreen",
    "exitRotateFullscreen",
    "controlShow",
    "controlHide",
  ].forEach((eventName) => {
    let nevent = "v_" + eventName;
    player.on(eventName, () => {
      postMessage2Parent({
        event: nevent,
      });
    });
  });
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem(Key, player.currentTime);
  });
  window.addEventListener("close", () => {
    sessionStorage.setItem(Key, player.currentTime);
  });
  window.addEventListener("message", (ev) => {
    let { event, data } = ev.data;
    if (event == "close") {
      try {
        window["_ivtorrent"]?.close();
      } catch (err) {}
    }
    if (event == "new" && data) {
      let url = data.url;
      if (/^https?:/i.test(url)) {
        history.pushState({}, "", "#id=" + encodeURIComponent(url));
      }
    }
  });
  window.addEventListener("hashchange", (ev) => {
    let url = getUrl(location.href);
    if (/^https?:/i.test(url)) {
      console.info("hashchange", url);
      init([url]);
    }
  });

  notifyResize();
  setTimeout(() => notifyResize(), 500);
  window.addEventListener("resize", () => {
    notifyResize();
  });
  window.onorientationchange = function () {
    notifyResize();
  };
  //player.value = _player;
}
function postMessage2Parent(data) {
  if (window != window.parent) {
    window.parent.postMessage(data, "*");
  }
}
async function wait(ttl = 1): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), ttl));
}
