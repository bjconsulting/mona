import { component$ } from '@builder.io/qwik';
import ancora from '../img/ancora.png'
import abac from '../img/abac.png'
import banco from '../img/banco_central.png'
import reclame from '../img/reclame.png'

export default component$(() => {
    return (
        <div class="bg-nomaRed">
            <div class="max-w-[90vw] mx-auto flex flex-col justify-center items-center py-[3em] gap-[3em]">
                
                <div class="flex justify-center items-center">
                    <img src={ancora} alt="Âncora Consórcios" width="250px" height="auto" loading="lazy" />
                </div>

                <div class="flex flex-col md:flex-row  items-center justify-around w-full max-w-[60vw]">
                    <img src={abac} alt="Associação Brasileira de Administradora de Consórcios" width="200px" height="auto" loading="lazy" />
                    <img src={banco} alt="Banco Central do Brasil" width="200px" height="auto" loading="lazy" />
                    <img src={reclame} alt="Reclame Aqui" width="200px" height="auto" loading="lazy" />
                </div>

                <div class="flex justify-center items-center">
                    <p class="text-white font-light text-[16px] max-w-[600px]">Âncora Administradora de Consórcios S.A / CNPJ: 60.375.243/0001-36 / AV . Dr. Antônio Barbosa Filho, 1260 Jd. Consolação - Franca/SP CEP: 14400-005<br/>
                        Banco Central do Brasil - Atendimento: 145 (custo de ligação local) - www.bcb.gov.br - Aut. Bacen 03/00/188/89</p>
                </div>

            </div>
            
        </div>
    )
})