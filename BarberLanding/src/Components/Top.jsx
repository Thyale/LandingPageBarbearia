import '../Components/Top.scss'

export default function Top (){

    var data = new Date()
    var Atual = data.getHours()
    var funcionamento = "Loja fechada"

    if(Atual >= 9 && Atual <=19){
        funcionamento = "Loja aberta"
    }

    return(
        <div className='BgImgStart'>
            <header className='BgImgStart__Header'>
                <div className='BgImgStart__Header__Icons'>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                </div>
                <div className='BgImgStart__Header__Logo'>
                    <img src="Icon.png" alt="Ícone da barbearia" />
                </div>
                <div className='BgImgStart__Header__btn'>
                    <button>Agendar Horário</button>
                </div>
            </header>
            <section className='BgImgStart__CapaInicial'>
                <div className='BgImgStart__CapaInicial__Texts'>
                    <h1 className='BgImgStart__CapaInicial__Texts__title'>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE</h1>
                    <p className='BgImgStart__CapaInicial__Texts__Subtitle'>Horário de funcionamento: 09:00 ás 19:00</p>
                    <button className='BgImgStart__CapaInicial__Texts__btn'>{funcionamento}</button>
                </div>
            </section>
        </div>
    )
}