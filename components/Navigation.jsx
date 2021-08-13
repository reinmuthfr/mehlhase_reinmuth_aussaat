import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/diy">
        <a>DIY-Kalender</a>
      </Link>
    </nav>
  );
}
