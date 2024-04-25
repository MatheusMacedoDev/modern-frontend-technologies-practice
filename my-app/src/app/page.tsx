'use client';
import Link from 'next/link';
import SomeComponent from '../components/SomeComponent';

export default function Home() {
    return (
        <div>
            <h1 className="font-bold">Hello, world j</h1>
            <p>kmmHello11</p>
            <Link href="/profile">Go to profile</Link>
            <SomeComponent name="Matheus" />
        </div>
    );
}
