import './Services.scss'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

export default function Services (){

    useEffect(() => {
        ScrollReveal().reveal('.Services__DivServices__Service', {
            delay: 200, // opcional, para adicionar um atraso
            distance: '500px', // opcional, para definir a distância do movimento
            origin: 'left', // Define de onde o movimento deve iniciar (top, bottom, left, right)
            reset: false // opcional, para permitir que o efeito se repita ao rolar para cima e para baixo
        });
    }, []);

    return(
        <section className='Services'>
            <h1 className='Services__title'>SERVIÇOS</h1>
            <p className='Services__text'>"Descubra uma experiência completa de cuidado e estilo na [Nome da Barbearia]. Nossos serviços vão além do corte de cabelo, incluindo cortes clássicos e modernos, tratamentos de barba e capilares. Nossa equipe experiente garante que você saia com um visual renovado e confiante."</p>
            <div className='Services__DivServices'>
                <div className='Services__DivServices__Service'>
                    <img src="Service1.jpg" />
                    <div className='Services__DivServices__Service__DivText'>
                        <p className='Services__DivServices__Service__DivText__title'>Corte de cabelo</p>
                        <p className='Services__DivServices__Service__DivText__valor'>R$ 45,00</p>
                    </div>
                </div>

                <div className='Services__DivServices__Service'>
                    <img src="Service2.jpg" />
                    <div className='Services__DivServices__Service__DivText'>
                        <p className='Services__DivServices__Service__DivText__title'>Barba completa</p>
                        <p className='Services__DivServices__Service__DivText__valor'>R$ 35,00</p>
                    </div>
                </div>

                <div className='Services__DivServices__Service'>
                    <img src="Service3.jpg"/>
                    <div className='Services__DivServices__Service__DivText'>
                        <p className='Services__DivServices__Service__DivText__title'>Barba e cabelo</p>
                        <p className='Services__DivServices__Service__DivText__valor'>R$ 70,00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}