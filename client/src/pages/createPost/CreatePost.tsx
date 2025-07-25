import { useState, type FormEvent } from "react"
import BasicButtons from "../../components/Button/Button"
import BasicTextFields from "../../components/Input/Input"
import { usePosts } from "../../contexts/postsContext";

export const CreatePost = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [banner, setBanner] = useState<string>("");

    const { createPost, loading } = usePosts();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const tagsList = tags.split(",")

        createPost(title, content, banner, tagsList)
        console.log(title, content, tags, banner);
    }


    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} 
            className="flex shadow-md h-3/4 w-1/2 flex-col gap-10 justify-center items-center">
                <div className="w-100 flex flex-col gap-5">
                    <h1 className="font-bold text-4xl">Criar Postagem</h1>
                    <div className="w-full">
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
                    <div className="w-full">
                        <BasicTextFields
                            fullWidth={true}
                            label="Conteúdo"
                            multiline={true}
                            maxRows={6}
                            variant="standard"
                            type="text"
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <BasicTextFields
                            fullWidth={true}
                            label="Tags"
                            multiline={true}
                            maxRows={4}
                            variant="standard"
                            type="text"
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
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

                <BasicButtons text="Postar" loading={loading ? true : false} type={"submit"} variant={"contained"} />
            </form>
        </div>
    )
}