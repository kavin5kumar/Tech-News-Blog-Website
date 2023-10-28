import { useParams } from "react-router"
import { Link } from "react-router-dom";

const DisplayPost = ({
    posts,
    deletepost
}) => {
    const {id}=useParams();
    const post = posts.find(post => (post.id).toString() === id);

  return (
    <div className="p-10 flex flex-col h-screen">
        <article className="flex flex-col gap-5">
            {post && 
                <>
                    <h1 className="text-center text-4xl font-bold">{post.title}</h1>
                    <p className="text-center font-semibold">{post.datetime}</p>
                    <p>{post.body}</p>
                    <button onClick={() => deletepost(post.id)} className="p-4 border border-black bg-red-600 hover:bg-red-400">Delete Post</button>
                    <Link to={`/post/${id}/edit`}><button className="p-4 border border-black bg-green-600 hover:bg-green-400 w-full">Edit Post</button></Link>
                </>
            }
            {!post && 
                <>
                    <h2 className="text-center text-4xl font-bold">No Posts Found</h2>
                    <p>Check if the Post is really Present or Deleted</p>
                    <p>
                        <Link to="/"><button className="p-4 border border-black bg-blue-400 hover:bg-blue-400/80 w-full">Go Back</button></Link>
                    </p>
                </>
            }
        </article>
    </div>
  )
}

export default DisplayPost