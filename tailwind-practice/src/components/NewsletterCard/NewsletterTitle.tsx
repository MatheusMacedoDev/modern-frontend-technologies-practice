type NewsletterTitleProps = {
    text: string;
}

export default function NewsletterTitle(props: NewsletterTitleProps) {
    return (
        <h2 className="font-serif text-xl font-semibold">
            {props.text}
        </h2>
    )
}
