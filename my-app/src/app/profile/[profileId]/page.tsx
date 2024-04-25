interface ProfileDetailsProps {
    params: {
        profileId: string;
    };
}

export default function ProfileDetailsPage({ params }: ProfileDetailsProps) {
    return <div>ProfileDetails {params.profileId}</div>;
}
