import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalEditar from "../components/ModalEditar";


export default function EditarProduto() {
  const { id } = useParams(); // Obtém o ID do produto a ser editado
  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    nome: "",
    desc: "",
    preco: "",
    img: "",
  });

  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal

  useEffect(() => {
    // Faça uma solicitação GET à API para obter os detalhes do produto pelo ID
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProduto(data); // Define os detalhes do produto no estado
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Faça uma solicitação PUT à API para atualizar o produto
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "PUT",
      body: JSON.stringify(produto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // A resposta da API após a atualização
        navigate("/produtos"); // Redireciona para a página de produtos após a edição
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Renderize o formulário de edição aqui */}
        <div>
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Descrição</label>
          <input
            type="text"
            name="desc"
            id="desc"
            value={produto.desc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="text"
            name="preco"
            id="preco"
            value={produto.preco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img">Imagem</label>
          <input
            type="url"
            name="img"
            id="img"
            value={produto.img}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={() => setModalOpen(true)}>Editar</button>
        </div>
      </form>

      {/* Adicione o modal de edição aqui */}
      <ModalEditar
        open={modalOpen}
        produto={produto}
        setOpen={setModalOpen}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
}
