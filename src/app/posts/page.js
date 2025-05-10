
import axios from 'axios';
import '../globals.css';

export default async function posts() {
   
    // const [posts, setPosts] = useState([]);
    // useEffect(()=>{
    //   const fetchPosts =async ()=>{
    //   try{
    //           await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setPosts(res.data))
    //   } catch(err){
    //     console.error('Error fetching posts:', err);
    //   }
    // }
    //   fetchPosts();
    // },[])
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const posts = res.data;

      // await new Promise((resolve)=> setTimeout(resolve,3000)) 
  return(
    <>
 <div className="overflow-x-auto mx-20 my-10">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Link</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {posts.map((post, idx) => (
            <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.title}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{post.body}</td>
              <td className="px-6 py-4 text-sm">
                <a href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                  View Post
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
  )
}
