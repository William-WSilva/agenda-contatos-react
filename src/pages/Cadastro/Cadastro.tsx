import React, { useState, useEffect, useRef, useCallback } from 'react'
import { BotaoNav } from '../../components/Botao/Botao'
import lixeira from '../../images/lixeira.png'
import editar from '../../images/pencil.png'
import * as C from './CadastroStyle'
import { Bk_Cadastro } from './CadastroStyle'
import { Contatos } from './Contatos'

export const Cadastro = () => {
  const [contatos, setContatos] = useState(Contatos)
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputTel, setInputTel] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [key, setKey] = useState(-1)
  const olRef = useRef<HTMLOListElement>(null)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputName(event.target.value)
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputEmail(event.target.value)
  }

  function handleTelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputTel(event.target.value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)

    // Filtrar os contatos com base no searchTerm
    const filteredContatos = Contatos.filter(
      (contato) =>
        contato.nomeCompleto
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        contato.email.toLowerCase().includes(event.target.value.toLowerCase())
    )

    // Atualizar o estado dos contatos filtrados
    setContatos(filteredContatos)
  }

  function editarContato(event: React.MouseEvent<HTMLImageElement>) {
    const index = Number(event.currentTarget.getAttribute('data-key'))
    setKey(index)
    const liElements = olRef.current?.querySelectorAll('li')
    const liElement = event.currentTarget.parentElement
    setInputName(contatos[index]?.nomeCompleto || '')
    setInputEmail(contatos[index]?.email || '')
    setInputTel(contatos[index]?.telefone || '')
    liElements?.forEach((liItem) => liItem.classList.remove('active'))
    liElement?.classList.add('active')
  }

  function deletarContato(event: React.MouseEvent<HTMLImageElement>) {
    const index = Number(event.currentTarget.getAttribute('data-key'))
    setKey(index)
    const liElements = olRef.current?.querySelectorAll('li')
    if (index >= 0 && index < contatos.length) {
      const novoContatos = contatos.slice()
      novoContatos.splice(index, 1)
      setContatos(novoContatos)
    }
    liElements?.forEach((liItem) => liItem.classList.remove('active'))
  }

  function salvarContato() {
    const novoContatos = contatos.slice()
    novoContatos[key].nomeCompleto = inputName
    novoContatos[key].email = inputEmail
    novoContatos[key].telefone = inputTel
    setContatos(novoContatos)
  }

  function cadastrarNovoContato() {
    // Verifica se o novo contato já existe na lista pelo nome ou email
    const contatoExistente = contatos.find(
      (contato) =>
        contato.nomeCompleto.toLowerCase() === inputName.toLowerCase() ||
        contato.email.toLowerCase() === inputEmail.toLowerCase()
    )
    if (contatoExistente) {
      alert('Contato já existente!')
      return
    }

    // Caso o contato não exista, adiciona o novo contato ao array de contatos
    const novoContato = {
      nomeCompleto: inputName,
      email: inputEmail,
      telefone: inputTel
    }
    setContatos([...contatos, novoContato])

    // limpar os campos do formulário:
    setInputName('')
    setInputEmail('')
    setInputTel('')
  }

  useEffect(() => {
    // Monitorar o estado key
    const liElements = olRef.current?.querySelectorAll('li')
    const liElement = liElements?.[key]
    setInputName(contatos[key]?.nomeCompleto || '')
    setInputEmail(contatos[key]?.email || '')
    setInputTel(contatos[key]?.telefone || '')
    liElements?.forEach((liItem) => liItem.classList.remove('active'))
    liElement?.classList.add('active')
  }, [key, contatos])

  return (
    <Bk_Cadastro>
      <C.Titulo>Cadastro Contatos</C.Titulo>
      <C.SecaoAgenda>
        <C.SecaoAgendaCabecalho>
          <span></span>
          <span>Nome Completo</span>
          <span>E-mail</span>
          <span>Telefone</span>
          <label>Buscar</label>
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </C.SecaoAgendaCabecalho>
        <hr />
        <C.SecaoAgendaInput>
          <span>{key >= 0 ? key + 1 : '#'}</span>
          <input
            type="text"
            placeholder="Nome"
            onChange={handleInputChange}
            value={inputName}
          ></input>
          <input
            type="text"
            placeholder="@email"
            onChange={handleEmailChange}
            value={inputEmail}
          ></input>
          <input
            type="text"
            placeholder="00 0 0000-0000"
            onChange={handleTelChange}
            value={inputTel}
          ></input>
          <C.BtnContato onClick={cadastrarNovoContato}>Cadastrar</C.BtnContato>
          <C.BtnContato onClick={salvarContato}>Salvar</C.BtnContato>
        </C.SecaoAgendaInput>
        <hr />
        <C.SecaoAgendaContatos>
          <C.SecaoAgendaContatosLista ref={olRef}>
            {contatos.map((contato, i) => (
              <li key={i}>
                <span>{`${i + 1}.`}</span>
                <span>{contato.nomeCompleto}</span>
                <span>{contato.email}</span>
                <span>{contato.telefone}</span>
                <img
                  src={editar}
                  alt="editat_img"
                  data-key={i}
                  onClick={editarContato}
                />
                <img
                  src={lixeira}
                  alt="deletar_img"
                  data-key={i}
                  onClick={deletarContato}
                />
              </li>
            ))}
          </C.SecaoAgendaContatosLista>
        </C.SecaoAgendaContatos>
      </C.SecaoAgenda>
      <C.SectionButton>
        <BotaoNav Children={'Home'}></BotaoNav>
      </C.SectionButton>
    </Bk_Cadastro>
  )
}
