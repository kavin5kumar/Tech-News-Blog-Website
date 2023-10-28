import { Link } from "react-router-dom"

const Top = () => {
  return (
    <div className="bg-blue-400 flex items-center">
        <Link to="/"><h1 className="font-semibold text-5xl px-5">React JS Blog</h1></Link>
    </div>
  )
}

export default Top