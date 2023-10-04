import React from "react";
import styles from "./ModalEditar.scss";

export default function ModalEditar({ open, produto, onClose, onSubmit, onChange }) {
  if (!open) {
    return null; // Retorna null quando o modal não está aberto
  }

  return (
    <div className={styles.modalEditar}>
      <div className={styles.modalEditarContent}>
        <span className={styles.modalEditarClose} onClick={onClose}>
          &times;
        </span>
        <form onSubmit={onSubmit}>
          <fieldset>
            <legend className={styles.modalEditarLegend}>Editar Produto</legend>
            <div>
              <label htmlFor="idNome" className={styles.modalEditarLabel}>Nome do Produto</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                onChange={onChange}
                value={produto.nome}
                className={styles.modalEditarInput}
              />
            </div>
            <div>
              <label htmlFor="idDesc" className={styles.modalEditarLabel}>Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                onChange={onChange}
                value={produto.desc}
                className={styles.modalEditarInput}
              />
            </div>
            <div>
              <label htmlFor="idPreco" className={styles.modalEditarLabel}>Preço</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                onChange={onChange}
                value={produto.preco}
                className={styles.modalEditarInput}
              />
            </div>
            <div>
              <label htmlFor="idImg" className={styles.modalEditarLabel}>Imagem</label>
              <input
                type="url"
                name="img"
                id="idImg"
                onChange={onChange}
                value={produto.img}
                className={styles.modalEditarInput}
              />
            </div>
            <div>
              <button type="submit" className={styles.modalEditarSubmit}>Atualizar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
