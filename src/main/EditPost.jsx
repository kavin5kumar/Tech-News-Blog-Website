import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const EditPost = ({
    posts,
    editTitle,
    editBody,
    setEditTitle,
    setEditBody,
    edit
}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

  return (
    
    <main className='form h-screen py-10 flex flex-col items-center'>
        {editTitle &&
            <>
                <h1 className='text-center mb-10 font-bold text-2xl'>Edit Post</h1>
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
                    <section className="title flex gap-5 mb-10">
                        <label htmlFor="postTitle">Title  </label>
                        <input type="text" required value={editTitle} onChange={e => setEditTitle(e.target.value)} className='w-full'/>
                    </section>
                    <section className="body flex gap-5 mb-10">
                        <label htmlFor="postTitle">Body</label>
                        <textarea type="text" required value={editBody} onChange={e => setEditBody(e.target.value)} className='w-96 h-64'/>
                    </section>
                
                    <button type="submit" className='p-3 border border-black bg-blue-400 text-xl font-bold hover:bg-blue-400/80' onClick={() => edit(post.id)}>Submit</button>
                </form>
            </>
        }
    </main>
  )
}

export default EditPost