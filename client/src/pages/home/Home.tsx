import { Link } from "react-router-dom";
import { usePosts } from "../../contexts/postsContext";
import LinearIndeterminate from "../../components/Progress/Progress";
import BasicMenu from "../../components/Button/ButtonMenu";
import { useAuth } from "../../contexts/authContext";

export const Home = () => {
  const { loading, posts } = usePosts();
  const { token } = useAuth();

  return (
    <div>
      <div className="h-screen mb-50! flex flex-col gap-10">
        {loading ? (
            <LinearIndeterminate />
        ) : 
        posts?.map((post, index) => (
          <div
            key={index}
            className="mt-5! rounded-2xl shadow-md p-5! hover:shadow-xl transition-all"
          >
            
            <div className="flex flex-row place-content-between">
              <h2 className="text-xl font-semibold mb-2">
                {post.title}
              </h2>

              {/* Botão de menu de ferramentas para postagens */}
              {
                token && (
                  <BasicMenu loading={loading ? true : false} text="Menu" postId={post._id} />
                ) 
              }
            </div>
            <div className="flex flex-col gap-5 items-start place-content-between">
              <p className="line-clamp-3">
                {post.content.slice(0, 100)}...
              </p>
              {post.banner && 
                <img className="h-35 rounded" src={post.banner} alt="" />
              }
            </div>

            <div className="flex mt-5! flex-wrap gap-2 mt-3">
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
