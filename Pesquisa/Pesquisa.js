import './Pesquisa.css'

const Pesquisa = (props) => {
    return (
        <div className="pesquisa">
            <label>{props.label}</label>
            <input type='seach' placeholder={`${props.placeholder}...`} />
        </div>
    )
}

export { Pesquisa }
