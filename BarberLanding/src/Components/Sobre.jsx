import '../Components/Sobre.scss';

export default function Sobre (){
    return(
        <section className='Sobre'>
            <div className='Sobre__Img'>
                <img src="ImgSobre.png" alt="Img Ilustrativa Sobre a empresa" />
            </div>
            <div className='Sobre__Text'>
                <h1>SOBRE</h1>
                <p className='Sobre__Text__Subtitle'>Barber é onde o clássico encontra o contemporâneo. Nossa equipe, com vasta experiência, dedica-se a criar cortes que realçam a personalidade de cada cliente, misturando técnicas tradicionais com as últimas tendências. Experimente a verdadeira arte do cuidado masculino em um ambiente acolhedor e sofisticado.</p>
                <p><strong>Horário de funcionamento:</strong> 09:00 às 19:00</p>
            </div>
        </section>
    )
}