import './Carrossel.css'
import Sueter from '../imagens/sueter.jpeg'
import Casaco from '../imagens/casaco.jpeg'
import Bota from '../imagens/item 3.jpg'
import Calca from '../imagens/calça.jpeg'
import Blusa from '../imagens/blusa.jpeg'
import { BiShoppingBag, BiStar } from "react-icons/bi";


const Carrossel = () => {


    return (
        <div className='carrossel'>

            <div className='carrossel_itens'>

                <img
                    src={Sueter}
                    className='item1'
                />

                <p>Suéter Marrom Stylish Men 15<br />
                    R$ 00,00
                </p>
                <div className='avalia'>
                    <div className='star'>
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                    </div>
                    <BiShoppingBag />


                </div>

            </div>

            <div className='carrossel_itens'>
                <img
                    src={Casaco}
                    className='item1'
                />

                <p>Casaco Jeans Inverno Stylish Men 12<br />
                    R$ 00,00
                </p>
                <div className='avalia'>
                    <div className='star'>
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                    </div>
                    <BiShoppingBag />


                </div>

            </div>

            <div className='carrossel_itens'>
                <img
                    src={Bota}
                    className='item1'
                />
                <p>Botas de Couro Nature Danger Stylish Men 3<br />
                    R$ 00,00
                </p>
                <div className='avalia'>
                    <div className='star'>
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                    </div>

                    <BiShoppingBag />

                </div>

            </div>

            <div className='carrossel'>
                <div className='carrossel_itens'>
                    <img
                        src={Calca}
                        className='item1'
                    />
                    <p>Calça de Alfaiataria Carmago Stylish Men 7<br />
                        R$ 00,00
                    </p>
                    <div className='avalia'>
                        <div className='star'>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </div>
                        <BiShoppingBag />


                    </div>

                </div>

                <div className='carrossel_itens'>
                    <img
                        src={Blusa}
                        className='item1'
                    />
                    <p>Blusa Preta Stylish Men <b>Premium</b><br />
                        R$ 00,00
                    </p>
                    <div className='avalia'>
                        <div className='star'>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />

                        </div>
                        <BiShoppingBag />
                    </div>


                </div>

            </div>
        </div>



    )
}


export { Carrossel }