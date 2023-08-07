import './App.css'

function App() {

  return (
    <>
      <form>
        <label>
          Nome:
          <input type='text' />
        </label>
        <label>
          E-mail:
          <input type='text' />
        </label>
        <label>
          Escolaridade:
          <select>
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências:
          <textarea />
        </label>
        <button>Enviar!</button>
      </form>
    </>
  )
}

export default App
