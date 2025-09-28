import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';

function App() {
  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={(e) => handleResetClick(e)} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App;
