import './Space.scss'

export default function Space(){
    return(
        <section className='Map'>
            <h1 className='Map__Title'>VENHA CONHECER</h1>
            <iframe className='Map__iframe' src="https://embed.waze.com/iframe?zoom=16&lat=-23.554430&lon=-46.655472&ct=livemap" width="90%" height="500" allowfullscreen></iframe>
        </section>
    )
}