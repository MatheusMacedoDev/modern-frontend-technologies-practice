import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    analytics: ReactNode;
    teams: ReactNode;
}

export default function Layout({ children, analytics, teams }: Props) {
    return (
        <div>
            {children}
            {analytics}
            {teams}
        </div>
    );
}
