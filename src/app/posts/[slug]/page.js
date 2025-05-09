import '../../globals.css';
export default function posts({params }) {
    const posts = [
        {
          title: "Exploring Japan's Hidden Gems",
          description: "Discover lesser-known destinations in Japan that offer unique cultural insights.",
          link: "/posts/japan-hidden-gems",
        },
        {
          title: "5 Budget-Friendly European Cities",
          description: "Travel Europe without breaking the bank — top cities for budget travelers.",
          link: "/posts/budget-europe",
        },
        {
          title: "Solo Travel Safety Tips",
          description: "Essential tips to stay safe while exploring the world alone.",
          link: "/posts/solo-travel-safety",
        },
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
      ];
      const post = posts.find((p) => p.link === "/posts/"+params.slug);
      console.log(post)

    // if (!post) {
    //   throw new Error(`Post with slug "${params.slug}" not found`);
    // }
    
  
    return (
      <div className="p-6 max-w-2xl mx-auto my-20">
        <h1 className="text-3xl font-bold mb-4">title : {post.title}</h1>
        <p className="text-lg text-gray-700">content : {post.description}</p>
      </div>
    );
}
