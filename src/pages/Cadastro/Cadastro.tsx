import React from 'react'
import { BotaoNav } from '../../components/Botao/Botao'
import {
  SecaoAgenda,
  SecaoAgendaCabecalho,
  Titulo,
  SectionButton,
  SecaoAgendaContatos,
  SecaoAgendaContatosLista
} from './CadastroStyle'
import { Bk_Cadastro } from './CadastroStyle'

export const Cadastro = () => {
  const Contatos = [
    {
      nomeCompleto: 'William',
      email: 'william@gmail.com',
      telefone: '34 0 0000-0000'
    },
    {
      nomeCompleto: 'Rose',
      email: 'Rose@gmail.com',
      telefone: '34 0 0000-0000'
    }
  ]

  return (
    <Bk_Cadastro>
      <Titulo>Cadastrar Contatos</Titulo>
      <SecaoAgenda>
        <SecaoAgendaCabecalho>
          <span>Nome Completo</span>
          <span>E-mail</span>
          <span>Telefone</span>
        </SecaoAgendaCabecalho>
        <hr />
        <SecaoAgendaContatos>
          <SecaoAgendaContatosLista>
            {Contatos.map((contato, i) => (
              <li key={i}>
                <span>{contato.nomeCompleto}</span>
                <span>{contato.email}</span>
                <span>{contato.telefone}</span>
              </li>
            ))}
          </SecaoAgendaContatosLista>
        </SecaoAgendaContatos>
      </SecaoAgenda>
      <SectionButton>
        <BotaoNav Children={'Home'}></BotaoNav>
      </SectionButton>
    </Bk_Cadastro>
  )
}
