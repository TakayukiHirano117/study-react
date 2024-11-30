import Image from "next/image";
import styles from "@/styles/Home.module.css";

// classname, href, text
const ITEMS = [
  {
    id: 1,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    className: styles.primary,
    body: "Deploy now",
  },
  {
    id: 2,
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    className: styles.secondary,
    body: "Read our docs",
  },
];

export function Links() {
  return (
    <>
      <div className={styles.ctas}>
        {
          ITEMS.map((item) => (
            <a
              key={item.id}
              className={item.className}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              {item.body}
            </a>
          ))
        }
      </div>
    </>
  );
}
