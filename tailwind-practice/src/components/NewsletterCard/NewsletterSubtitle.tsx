type NewsletterSubtitleProps = {
    text: string;
}

export default function NewsletterSubtitle(props: NewsletterSubtitleProps) {
    return (
        <h3 className="text-lg">
            {props.text}
        </h3>
    )
}
