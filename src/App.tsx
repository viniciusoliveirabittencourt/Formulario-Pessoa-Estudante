import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [experience, setExperience] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio')
    setExperience('')
    setTerms(false);
    setError(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (terms) {
      alert(
        `Nome: ${name}\nE-mail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${experience}`
      )
      resetForm();
    } else {
      setError(true)
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Nome:
          <input required value={name} onChange={({ target }) => setName(target.value)} type='text' />
        </label>
        <label>
          E-mail:
          <input required value={email} onChange={({ target }) => setEmail(target.value)} type='text' />
        </label>
        <label>
          Escolaridade:
          <select value={schooling} onChange={({ target }) => setSchooling(target.value)}>
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências:
          <textarea value={experience} onChange={({ target }) => setExperience(target.value)} />
        </label>
        <label>
          Aceito os termos e condições
          <input type='checkbox' checked={terms} onChange={() => setTerms((prevTerms) => !prevTerms)} />
        </label>
        <button>Enviar!</button>
      </form>
      {
        error && <h4>Você precisa aceitar os termos de uso!</h4>
      }
    </>
  )
}

export default App
