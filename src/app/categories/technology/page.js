import '../../globals.css';

export default function page(){
    const posts = [
        {
            title: "How AI Is Transforming Healthcare",
            description: "A deep dive into how artificial intelligence is reshaping medical care.",
            link: "/posts/ai-in-healthcare",
          },
          {
            title: "Top 5 Gadgets of 2025",
            description: "Explore the most innovative and useful tech gadgets released this year.",
            link: "/posts/top-gadgets-2025",
          },
          {
            title: "Is Quantum Computing the Future?",
            description: "Understand what quantum computing is and why it matters for tomorrow’s tech.",
            link: "/posts/quantum-future",
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