// backup
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import {
  adicionarContato,
  removerContato,
  alterarContato
} from '../../store/reducers/contatosSlice'
import { BotaoNav } from '../../components/Botao/Botao'
import lixeira from '../../images/lixeira.png'
import editar from '../../images/pencil.png'
import * as C from './CadastroStyle'
import { Bk_Cadastro } from './CadastroStyle'

export const Cadastro = () => {
  const olRef = useRef<HTMLOListElement>(null)
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputTel, setInputTel] = useState('')
  const contatos = useSelector((state: RootState) => state.contatos.contatos)
  const [indexContato, setIndexContato] = useState(-1)
  const dispatch = useDispatch()

  function cadastrarContato() {
    if (inputName.trim() === '' || inputEmail.trim() === '') {
      return alert('Campos vazios')
    }
    dispatch(
      adicionarContato({
        nomeCompleto: inputName,
        email: inputEmail,
        telefone: inputTel
      })
    )
    setInputName('')
    setInputEmail('')
    setInputTel('')
  }

  function editarContato(e: React.MouseEvent<HTMLImageElement>, i: number) {
    setIndexContato(i)
    const liClick = e.currentTarget.parentElement
    if (liClick instanceof HTMLLIElement) {
      removerClassLiActive()
      liClick.classList.add('active')
    }
    setInputName(contatos[i].nomeCompleto)
    setInputEmail(contatos[i].email)
    setInputTel(contatos[i].telefone)
  }

  function removerClassLiActive() {
    const liList = olRef.current?.querySelectorAll('li')
    liList?.forEach((liItem) => liItem.classList.remove('active'))
  }

  function salvarContato() {
    if (indexContato >= 0 && indexContato < contatos.length) {
      const novoContato = {
        nomeCompleto: inputName,
        email: inputEmail,
        telefone: inputTel
      }
      dispatch(alterarContato({ index: indexContato, contato: novoContato }))
    }
  }

  function deletarContato(i: number) {
    dispatch(removerContato(i))
    removerClassLiActive()
  }

  return (
    <Bk_Cadastro>
      <C.Titulo>Cadastro Contatos</C.Titulo>
      <C.SecaoAgenda>
        <C.SecaoAgendaCabecalho>
          <span></span>
          <span>Nome Completo</span>
          <span>E-mail</span>
          <span>Telefone</span>
        </C.SecaoAgendaCabecalho>
        <hr />
        <C.SecaoAgendaInput>
          <span></span>
          <input
            type="text"
            placeholder="Nome"
            name="inputName"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          ></input>
          <input
            type="text"
            placeholder="@email"
            name="inputEmail"
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
          ></input>
          <input
            type="text"
            placeholder="00 0 0000-0000"
            name="inputTel"
            onChange={(e) => setInputTel(e.target.value)}
            value={inputTel}
          ></input>
          <C.BtnContato onClick={cadastrarContato}>Cadastrar</C.BtnContato>
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
                  alt="editar_img"
                  onClick={(e) => editarContato(e, i)}
                />
                <img
                  src={lixeira}
                  alt="deletar_img"
                  onClick={() => deletarContato(i)}
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
