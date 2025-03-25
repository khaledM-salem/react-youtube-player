import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useVideoStore } from "../store/videoStore";

const VideoPlayer = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const navigate = useNavigate();
  const {
    videoUrl,
    playedSeconds,
    lastSavedTime,
    setVideoUrl,
    setPlayedSeconds,
    clearVideo,
    loadFromStorage,
  } = useVideoStore();

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (ReactPlayer.canPlay(inputUrl)) {
      setVideoUrl(inputUrl);
      navigate("/video");
    }
  };

  const handleEdit = (): void => {
    clearVideo();
    navigate("/");
  };

  const handleProgress = (state: { playedSeconds: number }): void => {
    setPlayedSeconds(state.playedSeconds);
  };

  const getStartTime = (): number => {
    if (!lastSavedTime) return playedSeconds;
    const currentTime = Date.now();
    const timeElapsed = (currentTime - lastSavedTime) / 1000;
    return playedSeconds + timeElapsed;
  };

  if (!videoUrl) {
    return (
      <div className="video-player-container">
        <form onSubmit={handleSubmit}>
          <label>
            YouTube Video URL:
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Enter YouTube URL"
              className="ml-2"
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }

  return (
    <div className="video-player-container">
      <ReactPlayer
        url={videoUrl}
        playing={true}
        controls={true}
        onProgress={handleProgress}
        config={{
          playerVars: { start: Math.floor(getStartTime()) },
        }}
      />
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default VideoPlayer;
