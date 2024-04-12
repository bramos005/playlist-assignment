import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/playlist", );
      const data = await response.json();
      setSongs(data);
    }
    fetchData();
  }, []);

  const addSong = async () => {
    const response = await fetch("http://localhost:8080/playlist", {
      method: "POST",
     
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setSongs(data);
  };

  const removeSong = async (song) => {
    const response = await fetch(`http://localhost:8080/playlist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({song: song.title}),
    });
    const data = await response.json();
    setSongs(data);
  };

  return (
    <div>
      <div className="w-screen h-screen justify-center flex flex-col items-center">
        <form action="" className=" mb-5 items-center flex w-fit flex-col gap-2">
          <h1>Add Song</h1>
          <input
            type="text"
            className="p-2"
            name="title"
            id="title"
            placeholder="Title"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <input
            type="text"
            className="p-2"
            name="artist"
            id="artist"
            placeholder="Artist"
            onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          />
          <input
            type="text"
            className="p-2"
            name="genre"
            id="genre"
            placeholder="Genre"
            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          />
          <button
            className="text-white p-2 rounded-md bg-gray-600"
            onClick={addSong}>
            Add Song
          </button>
        </form>

        <div className="flex flex-col w-[30rem] mt-5 items-center ">
          <h1 className="text-xl font-bold">Playlist</h1>
          <div className="flex flex-wrap gap-2 items-center">
            {songs.map((song, index) => (
              <div key={index} className="flex gap-2 items-center">
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.genre}</p>
                <button
                  className="text-white p-2 rounded-md bg-gray-600"
                  onClick={() => removeSong(song)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
