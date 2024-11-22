import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Fairy from "@/components/Fairy";
import Sparkles from "@/components/Sparkles";
import AudioPlayer from "@/components/AudioPlayer";
import FlyingText from "@/components/FlyingText";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My mom's birthday" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/mom.jpeg"
            alt="Next.js logo"
            width={850}
            height={200}
            priority
          />
          <ol>
            <li>
            <FlyingText/>
             <Fairy/>
             
            </li>
            <li>
            <Sparkles/>

            </li>
            <br></br>
            <li>
            Є тут феєчка - бач вилітує

            </li>
            <li>Розпилює свій чарівницький пилок, що приносить щастя</li>
            <li> Здоровʼя та мир</li>
            <li>
            <Sparkles/>
            </li>
            <FlyingText/>
            <li className="new">
            
              І вітає тебе з днем народження!!!!
             
              <Image
                src="/hanjoon.png"
                width={150}
                height={200}
                className="pulsating-image"
              
              />
            </li>
            <li>
            <Sparkles/>
            </li>
            <br></br>
            <li>
              Отуто є помаранчева кнопочка внизу - тицьни, будь ласка 
            </li>

          </ol>

          <div className={styles.ctas}>
            <AudioPlayer/>
            
            <ol>
              <li>
              <FlyingText/>

              </li>
            </ol>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
