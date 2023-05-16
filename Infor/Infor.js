import './Infor.css'
import { TbShirt, TbBooks } from "react-icons/tb";
import { RiSuitcase2Line } from 'react-icons/ri'
import { GiSunglasses } from 'react-icons/gi'
import { BsLaptop } from 'react-icons/bs'

const Infor = () => {
    return (
        <div className='infor'>

            <div className='infor_texto'>
                <h3>Aqui você encontra tudo o que precisa!</h3>
            </div>

            <div className='roupas'>
                <button className='botao_roupas'>
                    <TbShirt />
                    <p>Roupas</p>
                </button>

                <button className='botao_roupas'>
                    <RiSuitcase2Line />
                    <p>Itens de Viagem</p>
                </button>

                <button className='botao_roupas'>
                    <GiSunglasses />
                    <p>Acessórios</p>
                </button>

                <button className='botao_roupas'>
                    <TbBooks />
                    <p>Leitura</p>
                </button>

                <button className='botao_roupas'>
                    <BsLaptop />
                    <p>Tecnologia</p>
                </button>
            </div>
        </div>
    )
}

export { Infor }