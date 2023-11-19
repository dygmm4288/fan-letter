import { RootProvider } from "contexts/root.context";
import Router from "pages/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Router />
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
