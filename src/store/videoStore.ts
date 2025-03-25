import { create } from "zustand";

interface VideoState {
  videoUrl: string;
  playedSeconds: number;
  lastSavedTime: number | null;
  setVideoUrl: (url: string) => void;
  setPlayedSeconds: (seconds: number) => void;
  clearVideo: () => void;
  loadFromStorage: () => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  videoUrl: "",
  playedSeconds: 0,
  lastSavedTime: null,
  setVideoUrl: (url) => {
    set({
      videoUrl: url,
      lastSavedTime: Date.now(),
      playedSeconds: 0,
    });
    localStorage.setItem("videoUrl", url);
    localStorage.setItem("lastSavedTime", Date.now().toString());
    localStorage.setItem("playedSeconds", "0");
  },
  setPlayedSeconds: (seconds) => {
    set({ playedSeconds: seconds });
    localStorage.setItem("playedSeconds", seconds.toString());
  },
  clearVideo: () => {
    set({ videoUrl: "", playedSeconds: 0, lastSavedTime: null });
    localStorage.removeItem("videoUrl");
    localStorage.removeItem("lastSavedTime");
    localStorage.removeItem("playedSeconds");
  },
  loadFromStorage: () => {
    const url = localStorage.getItem("videoUrl");
    const time = localStorage.getItem("lastSavedTime");
    const seconds = localStorage.getItem("playedSeconds");
    if (url) {
      set({
        videoUrl: url,
        lastSavedTime: time ? parseInt(time) : null,
        playedSeconds: seconds ? parseFloat(seconds) : 0,
      });
    }
  },
}));
