import { Routes, Route } from 'react-router-dom'
import ArticlesPage from "./pages/ArticlesPage"
import ArticlePage from "./pages/ArticlePage"
import CreateArticlePage from "./pages/CreateArticlePage"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="/create" element={<CreateArticlePage />} />
    </Routes>
  )
}

export default App
