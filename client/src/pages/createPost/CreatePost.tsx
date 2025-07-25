import { useState, type FormEvent } from "react";
import BasicButtons from "../../components/Button/Button";
import BasicTextFields from "../../components/Input/Input";
import { usePosts } from "../../contexts/postsContext";

export const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [banner, setBanner] = useState<string>("");

  const { createPost, loading } = usePosts();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tagsList = tags.split(",");

    createPost(title, content, banner, tagsList);
    console.log(title, content, tags, banner);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 flex flex-col gap-8"
      >
        <div className="w-full flex lg:p-5! items-center flex-col gap-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Criar Postagem
          </h1>

          <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-full">
              <BasicTextFields
                fullWidth={true}
                label="Título"
                variant="standard"
                type="email"
                maxRows={1}
                multiline={false}
                onChange={(e) => setTitle(e.target.value)}
              />
          </div>

          <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-full">
              <BasicTextFields
                fullWidth={true}
                label="Conteúdo"
                multiline={true}
                maxRows={4}
                variant="standard"
                type="text"
                onChange={(e) => setContent(e.target.value)}
              />
          </div>

          <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-full">
              <BasicTextFields
                fullWidth={true}
                label="Tags"
                multiline={true}
                maxRows={1}
                variant="standard"
                type="text"
                onChange={(e) => setTags(e.target.value)}
              />
          </div>

          <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-full">
              <BasicTextFields
                fullWidth={true}
                label="Banner"
                multiline={false}
                maxRows={1}
                variant="standard"
                type="text"
                onChange={(e) => setBanner(e.target.value)}
              />
          </div>
        </div>

        <BasicButtons
          text="Postar"
          loading={loading ? true : false}
          type={"submit"}
          variant={"contained"}
          className="w-full m-5! sm:w-auto"
        />
      </form>
    </div>
  );
};
