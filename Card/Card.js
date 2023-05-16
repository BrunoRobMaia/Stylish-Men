import './Card.css'
import CardLogo from '../imagens/Card.jpg'

const Card = () => {
    return (
        <div className='card'>
            <img src={CardLogo} className='card_image' />
            <div className='card_texto'>
                <p>"Vista sua confiança. Seja impecável. Seja você. Na nossa loja de roupas masculinas, estilo é atitude."</p>
               
            </div>
            <p className='destaques'>Destaques da Semana</p>
        </div>
    )
}

export { Card }