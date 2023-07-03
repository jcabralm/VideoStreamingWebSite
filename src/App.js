
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to my video streaming site</h2>
      <video width="700px" height="400" controls>
        <source src="https://demzo1khuliea.cloudfront.net/gym_video.mp4" type="video/mp4">
          
        </source>
      </video>
    </div>
  );
}

export default App;
