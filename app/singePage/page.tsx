import Link from "next/link";
import Page1 from "./page1/page";
import Page2 from "./page2/page";

export default function App() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <nav>
        <Link href="/singlePage/page1">
           page1
        </Link>
        <Link href="/singlePage/page2">
            page2
        </Link>
      </nav>
      <main>
        <section id="page1">
            <Page1 />
        </section>
        <section id="page2">
            <Page2 />
        </section>
      </main>
    </div>
  );
}