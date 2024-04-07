import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    setLibraryStatus,
    libraryStatus,
    darkMode,
}) => {
    return (
        <div className={`library ${libraryStatus ? "active" : ""} ${darkMode ? "dark-mode" : ""}`}>
            <h2 className={darkMode ? "black-text" : ""}>Your Music Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                        setSongs={setSongs}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        songs={songs}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
