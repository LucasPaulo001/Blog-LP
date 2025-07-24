import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts/postsContext";
import { useEffect } from "react";
import LinearIndeterminate from "../../components/Progress/Progress";

export const PostContent = () => {
  const { slug } = useParams() as { slug: string };

  const { postDetails, details, loading } = usePosts();

  useEffect(() => {
    if (slug) {
      postDetails(slug);
    }
  }, [slug]);

  return (
    <div className={loading ? "h-screen" : ""}>
      {loading ? (
        <LinearIndeterminate />
      ) : details ? (
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col w-full p-10! gap-5">
              {details.banner && (
                <div className="w-full">
                  <img className="w-full h-64 object-cover" src={details.banner} alt="" />
                </div>
                )
              }
              <h1 className="text-2xl font-bold">{details.title}</h1>
              <div className="flex flex-row place-content-between">
                  <span>Data: xx/xx/xxxx</span>
                  <span className="flex flex-row gap-2">Tags: {details.tags.map((t) => (<span className="font-bold">#{t}</span>))}</span>
              </div>
          </div>
          <p className="mt-4 p-5!">{details.content}</p>
        </div>
      ) : (
        <h1>Postagem não encontrada!</h1>
      )}
    </div>
  );
};
