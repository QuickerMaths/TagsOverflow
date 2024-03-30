import { Route, Routes } from "react-router"
import Tags from "./pages/tags"
import Layout from "./components/layout"
import NotFound from "./pages/not-found"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Tags />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App