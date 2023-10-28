import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
 
const Post = ({title, datetime, body,id}) => {
  return (
    <div className={`flex flex-col mb-10 py-5 px-1 gap-2 ${ id === 1 ? '' : 'border-b-2 border-gray-300'}`}>
      
        <Link to={`/post/${id}`}><h1 className='font-bold text-2xl'>{title}</h1></Link>
        <p>{datetime}</p>
        {body.length > 26 ? (
            <p>{`${body.substring(0,27)}...`}</p>
        ) : (
            <p>{body}</p>
        )}
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  datetime:PropTypes.string,
  body:PropTypes.string,
  length:PropTypes.number,
  id:PropTypes.number,
}

export default Post