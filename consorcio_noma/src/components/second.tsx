import { component$ } from '@builder.io/qwik';
import price from '../img/low-price.png'
import global from '../img/global.png'
import task from '../img/task.png'
import safe from '../img/guarantee.png'

export default component$(() => {
    return (
        <div class="flex flex-col w-full bg-white">
            <div class="max-w-[90vw] mx-auto text-center py-[2em]">
                <h2 class="font-extrabold text-[2.4em] text-nomaRed">Conseguir sua carreta nunca foi tão fácil.</h2>
                <p class="font-normal text-[1.6em]"> As condições dos planos do Consórcio Nacional Noma são especiais e trazem as melhores alternativas do mercado. </p>
            </div>
            <div class="bg-nomaRed flex flex-col justify-center items-center py-[3em]">
                <div class="flex flex-col md:flex-row justify-around items-center w-full text-center max-w-[90vw] mx-auto py-[2em]">
                    
                    <div class="flex flex-col text-white justify-start items-center flex-1 basis-0 min-h-[500px] max-w-[400px]">
                        <img src={price} alt="Menor custo do mercado" height="aut'o" width="160px" loading="lazy" class="mb-4"/>
                        <h3 class="font-bold text-xl mb-4"> Menor custo do mercado </h3>
                        <ul class="text-lg font-normal text-left w-full">
                            <li> sem juros;</li>
                            <li> sem taxa de adesão;</li>
                            <li> sem taxa de expediente;</li>
                            <li> sem seguro prestamista;</li>
                            <li> maior economia na renovação e ampliação da sua de frota.</li>
                        </ul>
                    </div>

                    <div class="flex flex-col text-white justify-start items-center flex-1 basis-0 min-h-[500px] max-w-[400px]">
                        <img src={global} alt="Atuação efetivamente nacional" height="auto" width="160px" loading="lazy" class="mb-4" />
                        <h3 class="font-bold text-xl mb-4">Atuação efetivamente nacional</h3>
                        <ul class="text-lg font-normal text-left w-full">
                            <li>rapidez na formação de grupos</li>
                            <li>assembleias imediatas</li>
                            <li>lances facilitados</li>
                        </ul>
                    </div>

                    <div class="flex flex-col text-white justify-start items-center flex-1 basis-0 min-h-[500px] max-w-[400px]">
                        <img src={task} alt="Planos diferenciados" height="auto" width="160px" loading="lazy" class="mb-4" />
                        <h3 class="font-bold text-xl mb-4">Planos diferenciados</h3>
                        <ul class="text-lg font-normal text-left w-full">
                            <li>parcelas lineares</li>
                            <li>prazos especiais</li>
                        </ul>
                    </div>

                    <div class="flex flex-col text-white justify-start items-center flex-1 basis-0 min-h-[500px] max-w-[400px]">
                        <img src={safe} alt="Planos diferenciados" height="auto" width="160px" loading="lazy" class="mb-4" />
                        <h3 class="font-bold text-xl mb-4">Transparência, segurança e credibilidade</h3>
                        <ul class="text-lg font-normal text-left w-full">
                            <li>assembleias transmitidas ao vivo, via internet</li>
                        </ul>
                    </div>
                </div>

                <button class="font-bold text-white text-xl min-w-[300px] w-full max-w-[400px] py-3 rounded-md border border-white hover:border-transparent hover:bg-nomaRedMinor transition">
                    Quero saber mais!
                </button>
            </div>
        </div>
    )
})
