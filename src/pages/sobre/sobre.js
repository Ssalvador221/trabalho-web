import {useNavigate} from "react-router-dom";

function Sobre() {
    const navigate = useNavigate();

    return (
        <div className="relative mt-20 text-lg text-black text-center w-full h-auto flex flex-col">
            <img src={"../contatoFundo.webp"} alt="imagem fundo pousada" className="w-full"/>
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h1 className="font-bold text-4xl text-white">Bem Vindo a Pousada Ipua - 10 anos de Tradição</h1>
                <br/>
                <div className="flex flex-row items-center w-full max-w-4xl">
                    <p className="w-1/2 p-4 text-left text-2xl text-white">
                        A Pousada Ipua abre suas portas para oferecer uma experiência inesquecível aos seus hóspedes.
                        <br/>
                        Situada na charmosa cidade de Laguna, um dos tesouros do litoral catarinense, nossa pousada é o
                        refúgio perfeito para quem busca tranquilidade, conforto e contato com a natureza.
                    </p>
                </div>
                <div className="flex-row">
                    <button className="bg-[#ff9c06] font-bold rounded p-2 m-4 text-white"
                            onClick={() => navigate("/contato")}>Fale Conosco
                    </button>
                    <button className="bg-[#ff9c06] font-bold rounded p-2 text-white" onClick={() => navigate("/")}>
                        Conheça os Quartos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sobre;