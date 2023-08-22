import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Cabecalho from '@/components/Cabecalho';
import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Content from '@/components/Content';

export default function Home() {
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/Alxdelira')
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);
  return (
    <>
      <Head>
        <title>Curriculo Alexandre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Cabecalho />
      <Container>
        <Text>
          Olá, Sou o {user.name}
        </Text>
        <Content />
      </Container >
    </>
  )
}
