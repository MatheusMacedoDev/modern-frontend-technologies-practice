import { Metadata } from 'next';

interface ProfileDetailsProps {
    params: {
        profileId: string;
    };
}

export function generateMetadata({ params }: ProfileDetailsProps): Metadata {
    return {
        title: `Profile ${params.profileId}`
    };
}

export default function ProfileDetailsPage({ params }: ProfileDetailsProps) {
    return <div>ProfileDetails {params.profileId}</div>;
}
