import styled from 'styled-components'
import bk_Cadastro from '../../images/bk_Cadastro.png'
import variaveis from '../../styles/variaveis'

export const Bk_Cadastro = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bk_Cadastro});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  color: ${variaveis.branco};
`
export const SectionButton = styled.div`
  width: 50%;
  text-align: end;
`

export const Titulo = styled.h2`
  font-size: 40px;
`
export const SecaoAgenda = styled.div`
  width: 50%;
  height: 60%;
  background-color: ${variaveis.pretoTemaClaro};
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const SecaoAgendaCabecalho = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 24px;
`

export const SecaoAgendaContatos = styled.div`
  width: 100%;
  height: 100%;
`

export const SecaoAgendaContatosLista = styled.ul`
  font-size: 18px;
  border: 1px solid ${variaveis.pretoTemaClaro};
  overflow-y: auto;

  li {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 40px;
    padding-top: 8px;
    border-top: 1px solid ${variaveis.cinza};

    &:hover {
      border: 2px solid ${variaveis.cinza};
      cursor: pointer;
    }
  }
`
