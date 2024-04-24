import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1 className="font-bold">Hello, world</h1>
            <Link href="/profile">Go to profile</Link>
        </div>
    );
}
