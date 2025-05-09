import '../../globals.css';

export default function page(){
    const posts = [
        {
            title: "The Power of a Morning Routine",
            description: "Learn how starting your day right can improve mental and physical well-being.",
            link: "/posts/morning-routine",
          },
          {
            title: "10 Superfoods You Should Be Eating",
            description: "Boost your health naturally with these nutrient-packed superfoods.",
            link: "/posts/superfoods-list",
          },
          {
            title: "Managing Stress in the Digital Age",
            description: "Practical strategies for reducing stress in a tech-saturated world.",
            link: "/posts/stress-digital-age",
          },
        ]
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
                  <td className="px-6 py-4 text-sm text-gray-600">{post.description}</td>
                  <td className="px-6 py-4 text-sm">
                    <a href={post.link} className="text-blue-600 hover:underline">
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