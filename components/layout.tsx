import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./layout.module.css";

export const siteTitle = "Learn Thai Online";
const name = siteTitle;

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content="https://www.learnthai.online/images/og-image.png"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
