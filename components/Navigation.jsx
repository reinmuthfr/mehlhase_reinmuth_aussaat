import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      Navigation
      <br></br>
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/contact">
        <a>Kontakt</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
