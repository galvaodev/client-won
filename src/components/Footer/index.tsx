import Logo from 'components/Logo'
import Link from 'next/link'
import Heading from 'components/Heading'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com.br/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.twitter.com.br/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.Youtube.com.br/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com.br/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/games">
          <a>Store</a>
        </Link>

        <Link href="/search">
          <a>Buscar</a>
        </Link>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>

      <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Content>
  </S.Wrapper>
)

export default Footer
