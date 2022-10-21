import React, {useState} from 'react';
import ONU from './assets/onu.png';
import Ods2 from './assets/ods2.png';
import Ods3 from './assets/ods3.jpg';
import Ods15 from './assets/ods15.png';
import * as S from './style/styleMain.js';

export default function Main() {
    const [open2, setOpen2] = useState (false)
    const [open3, setOpen3] = useState (false)
    const [open15, setOpen15] = useState (false)

    const Hungry =() =>{
        setOpen2(!open2)
        setOpen3(false)
        setOpen15(false)

        return(
            <div>
                <p>Ampliação de ações sociais com entrega de alimento e cestas básicas em areas mais pobres. Além da criação de hortas comunitárias.</p>
                <p>Exemplo:https://prefeitura.rio/meio-ambiente/onu-inclui-programa-hortas-cariocas-da-prefeitura-do-rio-na-lista-de-acoes-essenciais-para-alcancar-os-objetivos-do-desenvolvimento-sustentavel/#:~:text=O%20Hortas%20Cariocas%2C%20da%20Secretaria,a%20Pandemia%20da%20Covid%2D19.</p>
            </div>
        )

    }

    const Health=()=>{
        setOpen2(false)
        setOpen3(!open3)
        setOpen15(false)

        return(
            <div>
                <p>Divulgação e campanhas de vacinação.</p>
                <p>Exemplo:https://prefeitura.rio/saude/rio-inicia-campanha-de-vacinacao-para-criancas-e-adolescentes-entre-elas-a-que-previne-poliomielite/</p>
            </div>
        )

    }

    const Wild = ()=>{
        setOpen2(false)
        setOpen3(false)
        setOpen15(!open15)

        return(
            <div>
                <p>Maior proteção e reintrodução de animais tirados de seus habitats.</p>
                <p>Exemplo:https://oglobo.globo.com/rio/bairros/bem-sucedido-projeto-reintroduzira-mais-32-jabutis-no-parque-da-tijuca-24325420</p>
            </div>
        )
        
    }

    return (
        <S.ContainerAll>
            <S.Onu src={ONU} alt="Logo da ONU com a frase 'objetivos de desenvolvimento sustentável'" />
            <S.Descricao>Os Objetivos de Desenvolvimento Sustentável (ODS) são tópicos de uma agenda mundial, adotada durante a Cúpula das Nações Unidas sobre o Desenvolvimento Sustentável em setembro de 2015, composta por 17 objetivos e 169 metas a serem atingidos até 2030.</S.Descricao>
            <S.Descricao>Os principais objetivos cossistem em ações mundiaisem prol da erradicação da pobreza, segurança alimentar, agricultura, saúde, educação, igualdade de gênero, redução das desigualdades, energia, água e saneamento, padrões sustentáveis de produção e de consumo, combate a mudança climática, cidades sustentáveis, proteção e uso sustentável dos oceanos e dos ecossistemas terrestres, crescimento econômico inclusivo, infraestrutura e industrialização.</S.Descricao>
            <S.Htwo>Os principais tópicos adotados pela cidade do Rio de Janeiro são:</S.Htwo>
            <S.ContainerTargets>
                <S.ContainerOds onClick={()=> Hungry()}><S.Ods src={Ods2} alt=""/></S.ContainerOds>        
                <S.ContainerOds onClick={()=>Health()}><S.Ods src={Ods3} alt=""/></S.ContainerOds>
                <S.ContainerOds onClick={()=>Wild()}><S.Ods src={Ods15} alt=""/></S.ContainerOds>
            </S.ContainerTargets>
            {open2 && Hungry()}
            {open3 && Health()}
            {open15 && Wild()}

        </S.ContainerAll>
    )
};       