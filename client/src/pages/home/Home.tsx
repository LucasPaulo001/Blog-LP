import { Link } from "react-router-dom";
import { usePosts } from "../../contexts/postsContext";
import LinearIndeterminate from "../../components/Progress/Progress";

export const Home = () => {
  const { loading, posts } = usePosts();

  return (
    <div>
      <div className="h-screen flex flex-col gap-10">
        {loading ? (
            <LinearIndeterminate />
        ) : 
        posts?.map((post, index) => (
          <div
            key={index}
            className="mt-5! rounded-2xl shadow-md p-5! hover:shadow-xl transition-all"
          >
            
            <h2 className="text-xl font-semibold mb-2">
              {post.title}
            </h2>
            <p className="line-clamp-3">
              {post.content.slice(0, 100)}...
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              to={`/posts/${post.slug}`} // Substituir com ID se tiver
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
            >
              Ler mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
