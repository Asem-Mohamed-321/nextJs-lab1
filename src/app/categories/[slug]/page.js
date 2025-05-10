import '../../globals.css';
import axios from 'axios';
export default async function page({params}){
    console.log(params)
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/"+params.slug+"/posts");
    const userPosts = res.data
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
              {userPosts.map((post, idx) => (
                <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.body}</td>
                  <td className="px-6 py-4 text-sm">
                    <a href={"/posts/"+post.id} className="text-blue-600 hover:underline">
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