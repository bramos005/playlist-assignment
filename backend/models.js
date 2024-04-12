class Song {
  constructor(title, artist, genre) {
    this.title = title;
    this.artist = artist;
    this.genre = genre;
  }
}

class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  getSongs() {
    return this.songs;
  }

  addSong(title, artist, genre) {
    const song = new Song(title, artist, genre);
    this.songs.push(song);
  }

  removeSong(title) {
    console.log(song);
    console.log(this.songs);
    console.log(typeof song);
    this.songs = this.songs.filter((s) => s.title !== title);
    console.log(this.songs);
  }
}

module.exports = {
  Song,
  Playlist,
};
