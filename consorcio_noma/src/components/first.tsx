import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import photo from '../img/photo_1.webp'

export default component$(() => {
    const data = useStore({
        name: '',
        email: '',
        tel: '',
        model: ''
    })

    useStylesScoped$(form)


    return(
        <div class="max-w-[90vw] mx-auto flex justify-center items-center bg-nomaRed h-[85vh] w-full flex-none gap-[6em] text-center overflow-y-hidden">
            <div class="left flex flex-col items-center justify-center flex-1 ">
                <h1 class="font-extrabold text-6xl text-white leading-[2em]"> Consórcio Noma </h1>
                <h2 class="text-5xl font-light text-white"> preencha nosso formulário e realize seu sonho!  </h2>

                <form action="/contact" method="POST" class="mt-[3em] pb-10">
                    <input required id="name" type="text" placeholder='Nome' maxLength={20} onInput$={(e) => (data.name = (e.target as HTMLInputElement).value)} />
                    <input required id="tel" type="tel" placeholder='Telefone' maxLength={20} onInput$={(e) => (data.tel = (e.target as HTMLInputElement).value)} />
                    <input required id="email" type="email" placeholder='Email' maxLength={60} onInput$={(e) => (data.email = (e.target as HTMLInputElement).value)} />
                    <input required id="model" type="text" placeholder='Qual modeo procura?' maxLength={240} onInput$={(e) => (data.model = (e.target as HTMLInputElement).value)} />
                    <button class="py-2 rounded-md w-full text-white bg-transparent border border-white hover:bg-nomaRedMinor hover:border-transparent transition text-xl font-bold"> Enviar </button>
                </form>
            </div>

            <div class="right hidden md:flex justify-center items-center h-full flex-1">
                <img src={photo} alt="Consiga sua carreta!" height="800px" width="auto" class="h-full img"/>
            </div>
        </div>
    )
})
export const form = `
    input {
        font-family: 'Raleway', sans-serif;
        width: 100%;
        padding: 5px 0px;
        text-indent: 15px;
        margin-bottom: 1.3em;
        border-radius: 5px;
    }
    button {
        font-family: 'Raleway', sans-serif;
    }
    img.img {
        box-shadow: 10px 20px 30px -3px rgba(0 0 0 / 0.3),
        -10px 15px 30px -3px rgba(0 0 0 / 0.2);
    }
`
