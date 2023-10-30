import { UserTimeSheet } from "./components/userTimeSheet/UserTimeSheet";

import { TableData } from "./components/tableData/TableData";
import { Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./components/context/context";


function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<TableData />} />
        <Route path='/user-timesheet/:id' element={<UserTimeSheet />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
