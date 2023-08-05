import React, { useState, useEffect, useRef } from 'react'
import { BotaoNav } from '../../components/Botao/Botao'
import lixeira from '../../images/lixeira.png'
import editar from '../../images/pencil.png'
import * as C from './CadastroStyle'
import { Bk_Cadastro } from './CadastroStyle'
import { Contatos } from './Contatos'

export const Cadastro = () => {
  const [contatosOriginais, setContatosOriginais] = useState(Contatos)
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
    const ContatosFiltrados = Contatos.filter(
      (contato) =>
        contato.nomeCompleto
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        contato.email.toLowerCase().includes(event.target.value.toLowerCase())
    )

    // Atualizar o estado dos contatos filtrados
    setContatos(ContatosFiltrados)
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

  const cadastrarNovoContato = () => {
    // Adicionar novo contato aos contatos originais
    const novoContato = {
      nomeCompleto: inputName,
      email: inputEmail,
      telefone: inputTel
    }
    setContatosOriginais([...contatosOriginais, novoContato])

    // Atualizar os contatos filtrados
    const ContatosFiltrados = contatosOriginais.filter(
      (contato) =>
        contato.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contato.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setContatos(ContatosFiltrados)

    // Limpar os campos do formulário após cadastrar
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

  useEffect(() => {
    // Atualizar os contatos filtrados sempre que houver uma alteração no searchTerm ou contatosOriginais
    const ContatosFiltrados = contatosOriginais.filter(
      (contato) =>
        contato.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contato.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setContatos(ContatosFiltrados)
  }, [searchTerm, contatosOriginais])

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
