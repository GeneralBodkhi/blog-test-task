import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"

export default function CreateArticlePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()

    await api.post(`/articles`, {
      title,
      content
    })

    navigate("/")
  }

  return (
    <div>
      <h1>Create Article</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}