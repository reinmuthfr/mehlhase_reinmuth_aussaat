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
        <a>Roll your own</a>
      </Link>
    </nav>
  );
}
