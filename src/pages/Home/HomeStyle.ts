import styled from 'styled-components'
import bk_Home_Image from '../../images/bk_Home.png'
import HomeBannerLogo from '../../images/Home_Logo.png'
import variaveis from '../../styles/variaveis'

export const Bk_Home = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${bk_Home_Image});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  section > div {
    text-align: end;
    margin-top: 20px;
  }
`
export const Titulo = styled.section`
  color: ${variaveis.branco};
  font-size: 80px;
  width: 580px;
  height: 240px;
  margin-right: 140px;

  span {
    display: block;
    font-weight: bold;

    &:nth-child(2) {
      text-align: center;
    }
    &:nth-child(3) {
      text-align: end;
    }
  }
`

export const BannerHome = styled.section`
  width: 540px;
  height: 680px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  opacity: 0.7;
  border-radius: 16px;
  box-shadow: 10px 10px 40px 3px ${variaveis.cinza};
  color: ${variaveis.branco};
  background: linear-gradient(
    180deg,
    ${variaveis.pretoTemaEscuro},
    ${variaveis.pretoTemaClaro}
  );
`

export const BannerDivLogo = styled.section`
  display: flex;
  width: 100%;
`

export const BannerLin = styled.div`
  width: 50%;

  div {
    border-bottom: 5px solid ${variaveis.branco};
    height: 30px;
    margin-top: 16px;

    &:hover {
      align-self: flex-end;
      border-bottom: 10px dashed ${variaveis.branco};
    }
  }

  :nth-child(2) {
    width: 75%;
  }
  :nth-child(3) {
    width: 50%;
  }
`

export const BannerLogo = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: ${variaveis.branco};
  background-image: url(${HomeBannerLogo});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 40px;
`

export const BannerDivDecoration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    border-bottom: 5px dashed ${variaveis.branco};
    height: 30px;
    width: 70%;
    margin-top: 16px;

    &:hover {
      align-self: flex-end;
      border-bottom: 10px dashed ${variaveis.branco};
    }
  }
`
