interface ThirdPartyYouTubeLib {
  listVideos(): void;
  getVideoInfo(id: number): void;
  downloadVideo(id: number): void;
}

class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  public listVideos(): void {
    console.log('ThirdPartyYouTubeClass: Listing all the videos.');
  }

  public getVideoInfo(id: number): void {
    console.log(`ThirdPartyYouTubeClass: Getting info for video ${id}.`);
  }

  public downloadVideo(id: number): void {
    console.log(`ThirdPartyYouTubeClass: Downloading video ${id}.`);
  }
}

class CachedYouTubeClass implements ThirdPartyYouTubeLib {
  private service: ThirdPartyYouTubeClass;
  private cache: any;

  constructor(service: ThirdPartyYouTubeClass) {
    this.service = service;
    this.cache = {};
  }

  public listVideos(): void {
    this.service.listVideos();
  }

  public getVideoInfo(id: number): void {
    if (this.cache[id]) {
      console.log(
        `CachedYouTubeClass: Returning cached result for video ${id}.`
      );
    } else {
      this.cache[id] = this.service.getVideoInfo(id);
      console.log(`CachedYouTubeClass: Returning result for video ${id}.`);
    }
  }

  public downloadVideo(id: number): void {
    if (this.cache[id]) {
      console.log(
        `CachedYouTubeClass: Returning cached result for video ${id}.`
      );
    } else {
      this.cache[id] = this.service.downloadVideo(id);
      console.log(`CachedYouTubeClass: Returning result for video ${id}.`);
    }
  }
}

class YouTubeManager {
  private service: ThirdPartyYouTubeLib;

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  public renderVideoPage(id: number): void {
    this.service.getVideoInfo(id);
    this.service.downloadVideo(id);
  }

  public renderListPanel(): void {
    this.service.listVideos();
  }
}

const service = new ThirdPartyYouTubeClass();
const proxy = new CachedYouTubeClass(service);
const manager = new YouTubeManager(proxy);
manager.renderVideoPage(1);
manager.renderListPanel();
