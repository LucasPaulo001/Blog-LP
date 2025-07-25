import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts/postsContext";
import { useEffect } from "react";
import LinearIndeterminate from "../../components/Progress/Progress";
import ReactMarkdown from "react-markdown";

export const PostContent = () => {
  const { slug } = useParams() as { slug: string };

  const { postDetails, details, loading } = usePosts();

  useEffect(() => {
    if (slug) {
      postDetails(slug);
    }
  }, [slug]);

  const dateFormat = (date: string) => {
    const data = new Date(date);
    const formattedDate = data.toLocaleDateString('pt-br');
    return formattedDate;
  }

  return (
    <div className={loading ? "h-screen" : ""}>
      {loading ? (
        <LinearIndeterminate />
      ) : details ? (
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col w-full p-10! gap-5">
            {details.banner && (
              <div className="w-full">
                <img
                  className="w-full h-64 object-cover"
                  src={details.banner}
                  alt=""
                />
              </div>
            )}
            <h1 className="text-2xl font-bold">{details.title}</h1>
            <div className="flex flex-col sm:flex-row place-content-between">
              <span>Postado em: {dateFormat(details.createdAt)}</span>
              <span className="flex flex-row gap-2">
                Tags:{" "}
                {details.tags.map((t) => (
                  <span className="font-bold">#{t}</span>
                ))}
              </span>
            </div>
          </div>
          <div className="markdown w-full p-10!">
            <ReactMarkdown>{details.content}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <h1>Postagem não encontrada!</h1>
      )}
    </div>
  );
};
