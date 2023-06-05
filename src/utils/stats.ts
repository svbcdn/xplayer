import mixpanel from "mixpanel-browser";
import EventEmitter from "eventemitter3";

mixpanel.init("de04a1db9db1b457329a27c4d9faf6d4", { debug: false, ip: true, ignore_dnt: true });
export type Event = {
  ready: (info: any) => void;
};
const Info = new URL(location.href);
let ID = Info.searchParams.get("id") || "";
ID = decodeURIComponent(ID);
const Host = /^https?:/i.test(ID) ? new URL(ID).hostname : "";
class Stats extends EventEmitter<Event> {
  constructor() {
    super();
  }
  /*    identify(deviceId: string) {
      mixpanel.identify(deviceId);
   } */

  /**
   * 暂停
   * @param data
   */
  next() {
    this.track("next");
  }
  prev() {
    this.track("prev");
  }
  open() {
    this.track("open", { id: ID, host: Host });
  }
  /**
   * 播放
   * @param data
   */
  play() {
    this.track("play");
  }
  /**
   * 暂停
   * @param data
   */
  pause() {
    this.track("pause");
  }
  end() {
    this.track("end");
  }
  error(err: Error) {
    this.track("error", { message: err.message });
  }
  track(name: string, data?: { [key: string]: any }) {
    data = Object.assign({}, data, { id: ID, host: Host });
    mixpanel.track(name, data);
  }
}
const stats = new Stats();
stats.open();
export default stats;
