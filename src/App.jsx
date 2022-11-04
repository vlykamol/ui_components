import Sidebar from "./components/Sidebar"
import Slider from "./components/Slider"
import Table from "./components/Table"
import Buttons from "./pages/Buttons"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/slider" element={<Slider />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  )
}

export default App
