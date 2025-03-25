import VideoPlayer from "../components/VideoPlayer";

const VideoPage = () => {
  return (
    <div className="w-screen flex justify-center flex-col items-center gap-4">
      <h1>Video Playback</h1>
      <VideoPlayer />
    </div>
  );
};

export default VideoPage;
