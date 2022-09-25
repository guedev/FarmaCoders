import "./formCadastro.css";


export const FormCadastro = () => {
    return (
        <div>
            <form>
          <div className="form-cadastro">
            <label htmlFor="NomeRemedio">Nome Remédio:</label>
            <input type="text" name="Nome" placeholder="Remédio"></input>
            <label htmlFor="url">Url (imagem)</label>
            <input type="text" name="url" placeholder="Link"></input>
            <label htmlFor="Farmacia">Farmácia:</label>
            <input type="text" name="Farmacia" placeholder="Farmácia"></input>
            <label htmlFor="Valor">Preço</label>
            <input type="number" name="Valor" placeholder="Valor (R$)"></input>
            <label htmlFor="Codigo">Código</label>
            <input type="number" name="Codigo" placeholder="Código"></input>
            <label htmlFor="Descricao">Descrição</label>
            <textarea></textarea>
            
          </div>
        </form>
        </div>
    );
};

