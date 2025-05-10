import '../../globals.css';
import axios from 'axios';

export default async  function posts({params }) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = res.data;

  const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.slug}/comments`);
  const comments = commentsRes.data;
  
    return (<>
        <div className="max-w-2xl mx-auto my-20 p-6">
      {/* Post Content */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <p className="text-lg text-gray-700">{post.body}</p>
      </div>

      {/* Comments Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comments</h2>
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="mb-2">
                <span className="font-semibold text-gray-800">{comment.name}</span>
                <span className="text-sm text-gray-500 ml-2">{comment.email}</span>
              </div>
              <p className="text-gray-700">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </>
    );
}
