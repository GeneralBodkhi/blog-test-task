import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../api/axios"

export default function ArticlePage() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [authorName, setAuthorName] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    api.get(`/articles/${id}`)
      .then(res => setArticle(res.data))
  }, [id])

  const submitComment = async (e) => {
    e.preventDefault()

    await api.post(`/articles/${id}/comments`, {
      author_name: authorName,
      content
    })

    const res = await api.get(`/articles/${id}`)
    setArticle(res.data)

    setAuthorName("")
    setContent("")
  }

  if (!article) return <p>Loading...</p>

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <p>{article.content}</p>

      <h2>Comments</h2>
      <ul>
        {article.comments?.map(comment => (
          <li key={comment.id}>
            <b>{comment.author_name}</b>: {comment.content}
          </li>
        ))}
      </ul>

      <form onSubmit={submitComment}>
        <input
          placeholder="Your name"
          value={authorName}
          onChange={e => setAuthorName(e.target.value)}
          required
        />
        <textarea
          placeholder="Comment"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}