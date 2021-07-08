import styles from "./Footer.module.css";

const email = `hello@learnthai.online`;
const subject = `Hey learnthai.com👋`;
const body = `Just wanted to say hi from learnthai.com`;
const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex justify-between px-10 underline text-blue-700 hover:text-purple-700">
        <a href="#">about 🙋</a>
        <a href={emailLink}>say hi 👋</a>
        <a href="https://github.com/cheyer/learn-thai-online" target="_blank">
          github 🐙
        </a>
        {/* <a href="#">privacy 🕵️</a>
        <a href="#">legal 👩‍⚖️</a>
        <a href="#">stats 📊</a> */}
      </div>
      <div className="flex justify-center py-4 text-sm">
        <p>made with ❤️ in hamburg</p>
      </div>
    </footer>
  );
}
