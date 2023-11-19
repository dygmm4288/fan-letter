import LetterContext from "contexts/letter.context";
import Router from "pages/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LetterContext>
        <Router />
      </LetterContext>
    </BrowserRouter>
  );
}

export default App;
