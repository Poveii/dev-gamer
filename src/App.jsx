import "./styles.css"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import Header from "./components/Header"
import Section from "./components/Section"
import ListItem from "./components/ListItem"

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Warzone",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
    imageAlt: "Poster do jogo Call of Duty: Warzone",
    imageTitle: "Call of Duty: Warzone (2020)",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
    alt: "Poster do jogo Minecraft",
    title: "Minecraft (2011)",
  },
  {
    url: "https://www.twitch.tv/directory/game/The%20Sims%204",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/369252_IGDB-285x380.jpg",
    imageAlt: "Poster do jogo The Sims 4",
    imageTitle: "The Sims 4 (2014)",
  },
  {
    url: "https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Modern%20Warfare%20II",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-285x380.jpg",
    imageAlt: "Poster do jogo Call of Duty Modern Warfare II",
    imageTitle: "Call of Duty Modern Warfare II (2022)",
  },
  {
    url: "https://www.twitch.tv/directory/game/Subway%20Surfers",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/368954_IGDB-144x192.jpg",
    imageAlt: "Poster do jogo Subway Surfers",
    imageTitle: "Subway Surfers (2012)",
  },
]

const channelListData = [
  {
    url: "https://www.twitch.tv/jakeliny",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/caaa9067-d25b-4efb-b7c7-93badfd041a9-profile_image-150x150.png",
    imageAlt: "Foto de perfil do canal Jakeliny",
    imageTitle: "Jakeliny Gracielly",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    imageAlt: "Foto de perfil do canal Alanzoka",
    imageTitle: "Alanzoka",
  },

  {
    url: "https://www.twitch.tv/hayashii",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/d67c0674-ba7c-49b4-949e-787da0542b9f-profile_image-150x150.png",
    imageAlt: "Foto de perfil do canal Hayashii",
    imageTitle: "Hayashii",
  },

  {
    url: "https://www.twitch.tv/mentedevento",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0b6d7fc7-51d6-42fc-9ab7-24eabf680842-profile_image-150x150.png",
    imageAlt: "Foto de perfil do canal MenteDeVento",
    imageTitle: "MenteDeVento",
  },
]

const socialListData = [
  {
    url: "https://www.twitch.tv/",
    imageUrl: "./assets/twitch-logo.svg",
    imageAlt: "Ícone da Twitch de cor roxa",
  },

  {
    url: "https://twitter.com/",
    imageUrl: "./assets/twitter-logo.svg",
    alt: "Ícone do Twitter de cor azul",
  },

  {
    url: "https://www.instagram.com/poveiii",
    imageUrl: "./assets/instagram-logo.svg",
    alt: "Ícone do Instagram de cor lilás",
  },

  {
    url: "https://www.youtube.com/",
    imageUrl: "./assets/youtube-logo.svg",
    alt: "Ícone do Youtube de cor vermelha",
  },

  {
    url: "https://www.linkedin.com/in/poveii/",
    imageUrl: "./assets/linkedin-logo.svg",
    alt: "Ícone do LinkedIn de cor vermelha",
  },
]

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          id="my-games"
        >
          <Swiper
            slidesPerView={5}
            loop={true}
            wrapperTag="ul"
            onAfterInit={(Swiper) => {
              Swiper.wrapperEl.classList.add("games-list")
            }}
          >
            {gamesListData.map((item) => (
              <SwiperSlide tag="li">
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  imageTitle={item.imageTitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        >
          <ul className="channels-list">
            {channelListData.map((item) => (
              <li>
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  imageTitle={item.imageTitle}
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Minhas Redes" subtitle="Se conecte comigo agora mesmo!">
          <ul className="social-list">
            {socialListData.map((item) => (
              <li>
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  imageTitle={item.imageTitle}
                />
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  )
}
