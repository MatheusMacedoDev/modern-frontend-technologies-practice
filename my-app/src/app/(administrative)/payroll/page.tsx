'use client';

import { useEffect } from 'react';

export default function PayrollPage() {
    useEffect(() => {
        const number: number = Math.round(Math.random() * 100 - 1 + 1);

        if (number <= 50) {
            throw new Error();
        }
    }, []);

    return <div>PayrollPage</div>;
}
