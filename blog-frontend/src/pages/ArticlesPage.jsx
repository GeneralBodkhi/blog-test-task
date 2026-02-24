import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios"

export default function ArticlesPage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        api.get(`/articles?page=${page}`)
        .then(res => setArticles(res.data))
        .finally(() => setLoading(false))
    }, [page])

    if (loading) return <h3>Loading...</h3>

    return (
        <div className="container">
            <h1>Articles</h1>
            <button><Link to = "/create">Create Article</Link></button>

            <ul>
                {articles.data?.map(article => (
                    <li key={article.id}>
                        <Link to={`/articles/${article.id}`}>
                            <h3>{article.title}</h3>
                        </Link>
                        <p>{article.content.slice(0, 100)}...</p>
                        <small>{article.created_at}</small>
                    </li>
                ))}
            </ul>

            <button 
                disabled={!articles.prev_page_url}
                onClick={() => setPage(page - 1)}
            >
                Previous
            </button>

            <button 
                disabled={!articles.next_page_url}
                onClick={() => setPage(page + 1)}
            >
                Next
            </button>

        </div>


    )
}