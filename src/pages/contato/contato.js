import React, {useState} from 'react';
import InputMask from 'react-input-mask';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let formData = {
            nome: nome,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        };

        let savedData = JSON.parse(localStorage.getItem('contatoData')) || [];

        savedData.push(formData);
        localStorage.setItem('contatoData', JSON.stringify(savedData));

        setNome('');
        setEmail('');
        setTelefone('');
        setMensagem('');
    };

    return (
        <>
            <img className="w-full mt-20" src={"../contatoFundo.webp"} alt={"Imagem de fundo da pousada"}/>
            <div
                className="max-w-md mx-auto h-auto mt-10 p-6 bg-white rounded shadow-md dark:bg-slate-800 absolute top-40 left-28 w-2/4">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Entre em Contato</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="telefone">
                            Telefone
                        </label>
                        <InputMask
                            type="text"
                            mask="+55 (99) 99999-9999"
                            id="telefone"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700  dark:text-white text-sm font-bold mb-2" htmlFor="mensagem">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#ff9c06] text-white rounded hover:bg-[#e88500] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#ff9c06]">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
}

export default Contato;
