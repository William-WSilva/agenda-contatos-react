import { btnLink as Link } from '../../components/Botao/BotaoStyle'
import {
  Bk_Home,
  Titulo,
  BannerHome,
  BannerLogo,
  BannerDivLogo,
  BannerLin,
  BannerDivDecoration
} from './HomeStyle'

export const Home = () => {
  return (
    <>
      <Bk_Home>
        <Titulo>
          <span>Agenda</span>
          <span>de</span>
          <span>Contatos</span>
        </Titulo>
        <section>
          <BannerHome>
            <h2>Contacts</h2>
            <BannerDivLogo>
              <BannerLogo></BannerLogo>
              <BannerLin>
                <div></div>
                <div></div>
                <div></div>
              </BannerLin>
            </BannerDivLogo>
            <BannerDivDecoration>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </BannerDivDecoration>
          </BannerHome>
          <div>
            <Link to="/cadastro">Acessar</Link>
          </div>
        </section>
      </Bk_Home>
    </>
  )
}
