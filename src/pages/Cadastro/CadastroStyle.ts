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
  width: 70%;
  display: flex;
  justify-content: end;

  @media (max-width: 960px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${variaveis.amareloTema};

  @media (max-width: 768px) {
    margin-top: 12px;
    margin-left: 8px;
    font-size: 24px;
    align-self: self-start;
  }
`
export const SecaoAgenda = styled.div`
  width: 70%;
  height: 70%;
  background-color: ${variaveis.pretoTemaClaro};
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  input {
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 4px;
    padding-left: 4px;
  }

  @media (max-width: 960px) {
    width: 90%;
    height: 80%;
  }
`
export const SecaoAgendaCabecalho = styled.div`
  display: grid;
  grid-template-columns: 40px 220px 220px 220px 2fr;
  position: relative;

  font-size: 22px;
  font-weight: bold;

  & > input {
    width: 200px;
    margin-bottom: 4px;

    @media (max-width: 960px) {
      width: 30px;
    }
  }

  label {
    font-size: 18px;
    display: block;
    position: absolute;
    top: -22px;
    right: 80px;
    color: ${variaveis.amareloTema};
  }

  @media (max-width: 960px) {
    display: none;
  }
`

export const BtnContato = styled.button`
  height: 30px;
  width: 80px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${variaveis.branco};
  box-shadow: 0px 0px 2px 0px ${variaveis.amareloTema};
  background: linear-gradient(
    180deg,
    ${variaveis.pretoTemaEscuro},
    ${variaveis.pretoTemaClaro}
  );

  &:hover {
    color: ${variaveis.amareloTema};
    background: linear-gradient(
      180deg,
      ${variaveis.pretoTemaClaro},
      ${variaveis.pretoTemaEscuro}
    );
  }
`

export const SecaoAgendaInput = styled.div`
  display: grid;
  grid-template-columns: 40px 220px 220px 220px 90px 90px;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;

  input {
    width: 180px;

    @media (max-width: 960px) {
      margin-bottom: 12px;
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    padding-bottom: 30px;

    :nth-child(6) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
    }
    :nth-child(5) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 45%;
    }
  }
`

export const SecaoAgendaContatos = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const SecaoAgendaContatosLista = styled.ol`
  font-size: 18px;
  border: 1px solid ${variaveis.pretoTemaClaro};

  li {
    display: grid;
    grid-template-columns: 40px 220px 220px 220px 90px 90px;
    height: 40px;
    border-bottom: 1px solid ${variaveis.cinza};
    align-items: center;
    position: relative;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
      justify-self: center;
      &:hover {
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px ${variaveis.amareloTema};
      }
      @media (max-width: 960px) {
        width: 32px;
        height: 32px;
      }
    }

    &:hover {
      font-weight: bold;
      font-size: 20px;
      border-bottom: 1px solid ${variaveis.branco};
      cursor: default;
    }
    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      line-height: 30px;
      height: 180px;
      padding: 8px;
      font-size: 18px;
      padding-bottom: 30px;

      :nth-child(5) {
        position: absolute;
        bottom: 0;
        left: 30%;
        margin-bottom: 8px;
      }
      :nth-child(6) {
        position: absolute;
        bottom: 0;
        left: 60%;
        margin-bottom: 8px;
      }
    }
  }

  .active {
    color: ${variaveis.amareloTema};
    font-weight: bold;
    font-size: 20px;
    border-bottom: 1px solid ${variaveis.amareloTema};
  }
`
