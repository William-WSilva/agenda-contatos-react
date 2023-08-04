import { BotaoNav } from '../../components/Botao/Botao'
import {
  Bk_Home,
  Titulo,
  BannerHome,
  BannerLogo,
  BannerDivLogo,
  BannerLin,
  BannerDivDecoration
} from './HomeStyle'

export const Home = () => (
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
          <BotaoNav Children={'Acessar'}></BotaoNav>
        </div>
      </section>
    </Bk_Home>
  </>
)
