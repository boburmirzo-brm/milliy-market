import { Link } from "react-router-dom"



function NotFound() {
  return (
    <div className="not_found">
      <div className="txt">
        <strong>Home / 404 Error</strong>
      </div>
      <div className="found">
        <strong>404 Not Found</strong>
        <br />
        <br />
        <p>Your visited page not found. You may go home page.</p>
        <br />
        <br />
        <br />
        <Link className="link" to={"/"}><button>Back to home page</button></Link>
      </div>
    </div>
  )
}

export default NotFound