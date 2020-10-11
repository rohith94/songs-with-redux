import { combineReducers } from "redux";

export const songReducer = () => {
  return [
    { title: "song one", duration: "4:05" },
    { title: "two song", duration: "3.33" },
    { title: "three song", duration: "2.59" },
    { title: "new One", duration: "3:50" },
    { title: "Back Street Boys", duration: "4:45" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
