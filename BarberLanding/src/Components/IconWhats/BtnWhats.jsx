import '../IconWhats/BtnWhats.scss'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export default function BtnWhats(){

    useEffect(() => {
        ScrollReveal().reveal('.IconDiv', {
            delay: 600, // opcional, para adicionar um atraso
            distance: '500px', // opcional, para definir a distância do movimento
            origin: 'bottom', // Define de onde o movimento deve iniciar (top, bottom, left, right)
            reset: false // opcional, para permitir que o efeito se repita ao rolar para cima e para baixo
        });
    }, []);

    return(
        <div className='IconDiv'>
            <a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20marcar%20um%20horário." target="_blank"><i class="fab fa-whatsapp"></i></a>
        </div>
    )
}