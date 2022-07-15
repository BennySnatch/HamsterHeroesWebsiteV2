import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamster Heroes of Draebanor | Punch you in the tits</title>
        <meta
          name="description"
          content="Hamster Heroes of Draebanor | Punch you in the tits"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
