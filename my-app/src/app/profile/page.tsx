import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Profile',
    description: 'Profile description'
};

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile</h1>
            <Link href="/">Go to home</Link>
            <Image
                src="https://fakeimg.pl/600x400"
                alt="Image"
                width={100}
                height={100}
            />
        </div>
    );
}
