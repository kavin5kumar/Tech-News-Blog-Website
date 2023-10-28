import PropTypes from 'prop-types';

const NewPost = ({submit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <main className='form h-screen py-10 flex flex-col items-center '>
        <h1 className='text-center mb-10 font-bold text-2xl'>New Post</h1>
        <form onSubmit={submit} className='flex flex-col'>
            <section className="title flex gap-5 mb-10">
                <label htmlFor="postTitle">Title  </label>
                <input type="text" required value={postTitle} onChange={e => setPostTitle(e.target.value)} />
            </section>
            <section className="body flex gap-5 mb-10">
                <label htmlFor="postTitle">Body</label>
                <textarea type="text" required value={postBody} onChange={e => setPostBody(e.target.value)} />
            </section>
           
            <button type="submit" className='p-3 border border-black bg-blue-400 text-xl font-bold hover:bg-blue-400/80'>Submit</button>
        </form>

    </main>
  )
}

NewPost.propTypes = {  
    submit: PropTypes.func,
    postTitle: PropTypes.string,
    setPostTitle: PropTypes.func,
    postBody: PropTypes.string,
    setPostBody: PropTypes.func   
  }  

export default NewPost