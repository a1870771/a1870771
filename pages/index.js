import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adelaide Encyclopaedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Encyclopaedia of Adelaide Bands, Solo Artists and Duos
        </h1>

        <p className={styles.description}>
          By Darcy, 2024 (Website by Jack)
        </p>
    
        <div className={styles.description}>
          <ul>
            <li>A</li>
            <li>Alexander Black</li>
            <li>B</li>
            <li>Babyteeth</li>
            <li>Big Sloe</li>
            <li>Birds Are Spies</li>
            <li>Blush Response</li>
            <li>Blue Lucy</li>
            <li>Busseys</li>
            <li>C</li>
            <li>Chelsea Manor</li>
            <li>Choosing Sides</li>
            <li>Clover</li>
            <li>Colter</li>
            <li>Confession Tapes</li>
            <li>Connections</li>
            <li>D</li>
            <li>Day For Caroline</li>
            <li>Dandy Buzzkills</li>
            <li>Dainty Morsels</li>
            <li>Destinezia</li>
            <li>E</li>
            <li>East Ave</li>
            <li>Energy Angel</li>
            <li>Exit Plan</li>
            <li>F</li>
            <li>Fair Call</li>
            <li>February Clouds</li>
            <li>Free Drinks</li>
            <li>Full Cream</li>
            <li>G</li>
            <li>George Alice</li>
            <li>H</li>
            <li>Homecourt</li>
            <li>Haze Daze</li>
            <li>I</li>
            <li>J</li>
            <li>Jongo Bones & the Barefoot Bandits</li>
            <li>K</li>
            <li>Kaleidoscopickumquats</li>
            <li>Keyan</li>
            <li>Knight Over Day</li>
            <li>L</li>
            <li>Lily Rose</li>
            <li>Live Slug Reaction</li>
            <li>Lola</li>
            <li>Looch</li>
            <li>Lumens</li>
            <li>M</li>
            <li>MACEY</li>
            <li>Masie</li>
            <li>Marlin Kites</li>
            <li>Matilda Pearl</li>
            <li>Molly Rocket</li>
            <li>Moshpit Girlfriend</li>
            <li>Mum Thinks Blue</li>
            <li>My Cherrie</li>
            <li>N</li>
            <li>Not For Humans</li>
            <li>O</li>
            <li>Oscar The Wild</li>
            <li>P</li>
            <li>Pelvis</li>
            <li>Pink Duke</li>
            <li>Placement</li>
            <li>Purée</li>
            <li>Q</li>
            <li>R</li>
            <li>Ricky Albeck</li>
            <li>S</li>
            <li>Samuelson</li>
            <li>saschasaidso</li>
            <li>Satin Sun</li>
            <li>Signals</li>
            <li>Somnium</li>
            <li>Stellar</li>
            <li>Stormy Lou</li>
            <li>St. Loki</li>
            <li>Sugartongue</li>
            <li>Sunsick Daisy</li>
            <li>Swapmeet</li>
            <li>T</li>
            <li>Taylaa</li>
            <li>Tapleys Hill</li>
            <li>Tell Mama</li>
            <li>The Danger Dolfins</li>
            <li>The Fuss</li>
            <li>The Genevieves</li>
            <li>The Hazys</li>
            <li>The Lizards</li>
            <li>The Max Headroom</li>
            <li>The Mondays</li>
            <li>The Munch</li>
            <li>The Sundials</li>
            <li>The Tullamarines</li>
            <li>The Vains</li>
            <li>The 745</li>
            <li>Toob Scoots</li>
            <li>Townhouse</li>
            <li>Towns</li>
            <li>Tonix</li>
            <li>TV Therapy</li>
            <li>U</li>
            <li>V</li>
            <li>Violet Harlott</li>
            <li>W </li>
            <li>Weekend Rage</li>
            <li>Whitebulb</li>
            <li>Witch Spit</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
