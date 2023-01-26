import { component$, useStylesScoped$ } from '@builder.io/qwik';

export default component$(() => {
    useStylesScoped$(table)

    return (
        <div class="bg-white">
            <div class="flex flex-col justify-center items-center max-w-[90vw] mx-auto py-[2em] text-center">
                <h1 class="font-extrabold text-nomaRed text-2xl md:text-4xl pb-4">
                    Todos os planos de venda em até 90 meses! <br />Confira:
                </h1>

                <div class="w-full flex justify-center items-center">
                    <table class="tg">
                        <thead>
                            <tr>
                                <th class="tg-0zt2" colSpan={2}>CRÉDITO</th>
                                <th class="tg-0zt2" colSpan={2}>PLANO FÁCIL a partir de:<br/>(24 Primeiras ou Até a Contemplação)</th>
                                <th class="tg-pxnt"><span style="font-weight:bold;color:#8B0000">PLANO NORMAL a partir de:</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="tg-hpag" colSpan={2}>R$ 122.549,36</td>
                                <td class="tg-hpag">R$ 824,74</td>
                                <td class="tg-hpag">R$ 1.901,17</td>
                                <td class="tg-hpag">R$ 1615,18</td>
                            </tr>
                            <tr>
                                <td class="tg-sudl" colSpan={2}>R$ 130.197,55</td>
                                <td class="tg-sudl">R$ 880,46</td>
                                <td class="tg-sudl">R$ 2.019,82</td>
                                <td class="tg-sudl">R$ 1.715,98</td>
                            </tr>
                            <tr>
                                <td class="tg-hpag" colSpan={2}>R$ 149.450,44</td>
                                <td class="tg-hpag">R$ 1.010,66</td>
                                <td class="tg-hpag">R$ 2.318,50</td>
                                <td class="tg-hpag">R$ 1.969,73</td>
                            </tr>
                            <tr>
                                <td class="tg-sudl" colSpan={2}>R$ 153.193,10</td>
                                <td class="tg-sudl">R$ 1.035,97</td>
                                <td class="tg-sudl">R$ 2.376,56</td>
                                <td class="tg-sudl">R$ 2.019,06</td>
                            </tr>
                            <tr>
                                <td class="tg-hpag" colSpan={2}>R$ 159.426,42</td>
                                <td class="tg-hpag">R$ 1.078,12</td>
                                <td class="tg-hpag">R$ 2.473,26</td>
                                <td class="tg-hpag">R$ 2.101,21</td>
                            </tr>
                            <tr>
                                <td class="tg-sudl" colSpan={2}>R$ 172.661,27</td>
                                <td class="tg-sudl">R$ 1.167,62</td>
                                <td class="tg-sudl">R$ 2.678,68</td>
                                <td class="tg-sudl">R$ 2.275,65</td>
                            </tr>
                            <tr>
                                <td class="tg-hpag" colSpan={2}>R$ 174.548,78</td>
                                <td class="tg-hpag">R$ 1.180,39</td>
                                <td class="tg-hpag">R$ 2.707,86</td>
                                <td class="tg-hpag">R$ 2.300,52</td>
                            </tr>
                            <tr>
                                <td class="tg-sudl" colSpan={2}>R$ 187.193,17</td>
                                <td class="tg-sudl">R$ 1.265,89</td>
                                <td class="tg-sudl">R$ 2.904,02</td>
                                <td class="tg-sudl">R$ 2.467,17</td>
                            </tr>
                            <tr>
                                <td class="tg-hpag" colSpan={2}>R$ 198.910,00</td>
                                <td class="tg-hpag">R$ 1.345,13</td>
                                <td class="tg-hpag">R$ 3.085,79</td>
                                <td class="tg-hpag">R$ 2.621,60</td>
                            </tr>
                            <tr>
                                <td class="tg-sudl" colSpan={2}>R$ 199.879,39</td>
                                <td class="tg-sudl">R$ 1.351,68</td>
                                <td class="tg-sudl">R$ 3.100,83</td>
                                <td class="tg-sudl">R$ 2.634,38</td>
                            </tr>
                            <tr>
                                <td class="tg-hpag" colSpan={2}>R$ 203.958,56</td>
                                <td class="tg-hpag">R$ 1.379,27</td>
                                <td class="tg-hpag">R$ 3.164,11</td>
                                <td class="tg-hpag">R$ 2.688,14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button class="font-bold bg-nomaRed text-white text-xl my-[2em] min-w-[300px] w-full max-w-[400px] py-3 rounded-md border border-white hover:border-transparent hover:bg-nomaRedMinor transition"
                    onClick$={() => { window.scrollTo(0, 0); }}>
                    Fale conosco!
                </button>
            </div>
        </div>
    )
})

export const table = `
    .tg  {border-collapse:collapse;border-spacing:0;}

    .tg td {border-color:black;border-style:solid;border-width:1px;font-family:'Montserrat', sans-serif;font-size:16px;
    overflow:hidden;padding:7px 17px;word-break:normal;}

    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:'Montserrat', sans-serif;font-size:16px;
    font-weight:normal;overflow:hidden;padding:7px 17px;word-break:normal;}
    
    .tg .tg-sudl{background-color:#8b0000;border-color:#000000;color:#ffffff;text-align:center;vertical-align:top}
    
    .tg .tg-0zt2{background-color:#e8e8e8;border-color:#000000;color:#8b0000;font-family:'Montserrat';font-size:18px;font-weight:bold;
    text-align:center;vertical-align:top}
    
    .tg .tg-pxnt{background-color:#e8e8e8;border-color:#000000;font-family:'Montserrat';font-size:18px;text-align:left;vertical-align:top}
    
    .tg .tg-hpag{background-color:#e8e8e8;border-color:#000000;color:#000000;text-align:center;vertical-align:top}
`