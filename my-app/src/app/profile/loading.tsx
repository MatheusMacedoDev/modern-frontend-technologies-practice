'use client';

import { ThreeDots } from 'react-loader-spinner';

export default function loading() {
    return (
        <div className="w-full h-full flex justify-center align-center">
            <ThreeDots
                visible={true}
                height={80}
                width={80}
                color="#FFFFFF"
                radius={9}
                ariaLabel="three-dots-loading"
            />
        </div>
    );
}
