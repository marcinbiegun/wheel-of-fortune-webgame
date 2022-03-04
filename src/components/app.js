import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Game from "./game";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const puzzles = [
  "Apetyt rośnie w miarę jedzenia",
  "Bez pracy nie ma kołaczy",
  "Co nagle to po diable",
  "Darowanemu koniowi w zęby się nie zagląda",
  "Fortuna kołem się toczy",
  "Gdy kota nie ma myszy harcują",
  "Kto mieczem wojuje ten od miecza ginie",
  "Kto pod kim dołki kopie sam w nie wpada",
  "Lepszy wróbel w garści niż gołąb na dachu",
  "Modli się pod figurą a diabła ma za skórą",
  "Niedaleko pada jabłko od jabłoni",
  "Zapomniał wół jak cielęciem był",
  "Patrzy jak cielę na malowane wrota",
  "Indyk myślał o niedzieli a w sobotę mu łeb ścieli",
  "Kto pod kim dołki kopie ten sam w nie wpada",
  "Bogatemu to i byk się ocieli",
  "Cierp ciało skoroś chciało",
  "Czym skorupka za młodu nasiąknie tym na starość trąci",
  "Ni z gruszki ni z pietruszki",
  "Mądrej głowie dość dwie słowie",
  "Gdzie diabeł nie może tam babę pośle",
  "Kto rano wstaje temu Pan Bóg daje",
  "Potrzeba jest matką wynalazków",
  "Słowo się rzekło kobyłka u płota",
];

const App = () => (
  <div id="app">
    <Game puzzles={puzzles} />
  </div>
);

export default App;
