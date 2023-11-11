import { KARINA } from "lib/member";
import Router from "pages/Router";
import { createContext, useState } from "react";

export const MemberLetterListContext = createContext(null);
export const SelectedMemberContext = createContext(null);

function App() {
  const [selectedMember, setSelectedMember] = useState(KARINA);

  return (
    <SelectedMemberContext.Provider
      value={{ selectedMember, setSelectedMember }}>
      <Router />
    </SelectedMemberContext.Provider>
  );
}

export default App;
