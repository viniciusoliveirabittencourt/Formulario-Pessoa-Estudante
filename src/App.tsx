import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [experience, setExperience] = useState('');

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio')
    setExperience('')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      `Nome: ${name}\nE-mail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${experience}`
    )
    resetForm();
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Nome:
          <input value={name} onChange={({ target }) => setName(target.value)} type='text' />
        </label>
        <label>
          E-mail:
          <input value={email} onChange={({ target }) => setEmail(target.value)} type='text' />
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
        <button>Enviar!</button>
      </form>
    </>
  )
}

export default App
