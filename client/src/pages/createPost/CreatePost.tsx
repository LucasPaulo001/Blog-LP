import { useState, type FormEvent } from "react"
import BasicButtons from "../../components/Button/Button"
import BasicTextFields from "../../components/Input/Input"

export const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(title, content, tags)
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
                </div>

                <BasicButtons text="Postar" loading={false} type={"submit"} variant={"contained"} />
            </form>
        </div>
    )
}