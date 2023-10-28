import Post from "./Post"


const Body = ({posts, fetchError, isLoading}) => {
  return (
    <div className="flex flex-col gap-5 p-10">

      {isLoading && <p>Loading...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError &&
      (
        <>
          {posts.length !== 0 ? 
            (posts.map(post => (
              <Post key={post.id} id={post.id} title={post.title} datetime={post.datetime} body={post.body}/>
            ))) : (
            <div className="h-screen">
              <h2>No Posts to Display</h2>
            </div>
            )}
          </>
      )}
  
   </div>
  )
}

export default Body