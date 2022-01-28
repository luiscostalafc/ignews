import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Learn</strong>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Learn</strong>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Learn</strong>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
