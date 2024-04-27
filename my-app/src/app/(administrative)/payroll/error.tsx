'use client';

interface Props {
    error: Error;
    reset: () => void;
}

export default function ErrorBoundary({ error, reset }: Props) {
    return (
        <div>
            <h1>Something went wrong!</h1>
            <p>Error name: {error.name}</p>
            <p>Error message: {error.message}</p>
            <button type="button" onClick={reset}>
                Try again
            </button>
        </div>
    );
}
