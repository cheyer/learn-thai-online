import styles from "./Footer.module.css";

const email = `hello@learnthai.online`;
const subject = `Hey learnthai.comð`;
const body = `Just wanted to say hi from learnthai.com`;
const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex justify-between px-10 underline text-blue-700 hover:text-purple-700">
        <a href="#">about ð</a>
        <a href={emailLink}>say hi ð</a>
        <a href="https://github.com/cheyer/learn-thai-online" target="_blank">
          github ð
        </a>
        {/* <a href="#">privacy ðµï¸</a>
        <a href="#">legal ð©ââï¸</a>*/}
        <a href="https://plausible.io/learnthai.online">stats ð</a>
      </div>
      <div className="flex justify-center py-4 text-sm">
        <p>made with â¤ï¸ in hamburg</p>
      </div>
    </footer>
  );
}
