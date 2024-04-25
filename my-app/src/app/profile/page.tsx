import Link from 'next/link';

export const metadata = {
    title: 'Profile',
    description: 'Profile description'
};

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile</h1>
            <Link href="/">Go to home</Link>
        </div>
    );
}
