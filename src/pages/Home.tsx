import VideoPlayer from "../components/VideoPlayer";

// Define the component as a functional component with React.FC if preferred, or just a function
const Home = () => {
  return (
    <div className="flex flex-col self-start w-screen justify-center items-center">
      <h1 className="font-bold">YouTube Video Player</h1>
      <VideoPlayer />
    </div>
  );
};

export default Home;
