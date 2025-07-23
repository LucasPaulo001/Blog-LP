import { Link } from "react-router-dom";
import { usePosts } from "../../contexts/postsContext";
import Variants from "../../components/Skeleton/Skeleton";

export const Home = () => {
  const { loading, posts } = usePosts();

  return (
    <div>
      <div className="h-screen mt-6! flex flex-col gap-10">
        {loading ? (
            <Variants />
        ) : 
        posts?.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5! hover:shadow-xl transition-all"
          >
            
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 line-clamp-3">
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
