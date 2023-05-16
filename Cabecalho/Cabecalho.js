import './Cabecalho.css'
import logo from '../imagens/Corpora.png'
import { BiUser, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Pesquisa } from '../Pesquisa/Pesquisa';
import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import BasicMenu from '../Botao/Botao';


Modal.setAppElement('#root');


const Cabecalho = (props) => {


    const Button = styled.button`  
      background-color: transparent;
      color: #e4c8c5;
      cursor: pointer;
      border: none;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 25px;
      padding: 1em;
   `
    const Botao = styled.button`
    background-color: transparent;
      color: #e4c8c5;
      cursor: pointer;
      border: none;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 15px;
      padding: 1em;
   `

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const passwordIcon = showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />;

    const [seta, setSeta] = useState(false)

    const toggleSeta = () => {
        setSeta(!seta)
    }

    const setaIcon = seta ? <BsChevronUp /> : <BsChevronDown />;


    const submit = (evento) => {
        evento.preventDefault();
        console.log('Nome:', nome)
        console.log('Email:', email)
        console.log('Senha:', senha)
    }

    const [modalOpen, setModalOpen] = useState(false)

    function openModal() {
        setModalOpen(true)
    }
    function closeModal() {
        setModalOpen(false)
        console.log('Fechou')
    }

    useEffect(() => {
        console.log(modalOpen)
    }, [modalOpen])



    return (
        <div className='cabecalho'>

            <div className='cabecalho_logo'>
                <img src={logo} className='logo' />
                <p className='logo_text'>Stylish Men</p>
            </div>

            <div className='nav'>

                <Botao>Home</Botao>
                <BasicMenu onClick={toggleSeta}>{setaIcon}</BasicMenu>
                <Botao>Sobre</Botao>
                <Botao>Contato</Botao>
            </div>

            <div className='pesquisa'>
                <BiSearchAlt2 className='botao_pesquisa' />
                <Pesquisa placeholder='Pesquise aqui!' />
            </div>

            <div className='botao_lojas'>
                <div className='modal'>
                    <Button onClick={openModal}>
                        <BiUser />
                    </Button>
                    <Modal
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        contentLabel='Exemple Modal'
                        overlayClassName='modal_user'
                        className='modal_box'
                    >
                        <button className='x' onClick={closeModal}><b>X</b></button>

                        <p className='titulo_modal'>Faça seu cadastro</p>
                        <hr />
                        <form className='formulario' onSubmit={submit}>
                            <label className='label'>
                                Nome:
                                <input className='input_label' type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} required />
                            </label>
                            <label className='label'>
                                Email:
                                <input className='input_label' type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required />
                            </label >
                            <label className='label'>
                                Senha:
                                <input className='input_label' type={showPassword ? 'text' : 'password'} value={senha} onChange={(evento) => setSenha(evento.target.value)} minLength="6" required />
                            </label>
                            <Button onClick={toggleShowPassword}>{passwordIcon}</Button>
                            <Button onClick={submit} >Cadastrar</Button>
                        </form>



                    </Modal>

                    <Button>
                        <BiShoppingBag className='botao_loja' />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export { Cabecalho }