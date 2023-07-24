import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPosts } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        dispatch(setPosts(response.data))
      } catch (error) {
        console.log(error)
      }
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <div className="container bg-white rounded shadow my-4">
        <h1 className="text-center fw-bold my-4">List of Posts</h1>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6 col-12 my-3 d-flex align-items-stretch" key={post.id}>
              <div  className="card text-center">
                <div className="card-header">
                  ID : {post.id}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
                <div className="card-footer text-body-secondary">
                  User ID : {post.userId}
                </div>
              </div>
            </div>
          ))}
            
        </div>
      </div>
    </>
  )
}

export default App
