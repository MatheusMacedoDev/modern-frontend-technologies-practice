import NewsletterTitle from './NewsletterTitle.tsx';
import NewsletterSubtitle from './NewsletterSubtitle.tsx';
import EnterEmailForm from './EnterEmailForm.tsx';

export default function NewsletterCard() {
    return (
        <div className='bg-white rounded-md w-1/2 p-12 flex items-center flex-col'>
            <NewsletterTitle text="Level Up Your Skills" />
            <NewsletterSubtitle text="You can use as many (or as few) tools, libraries, and frameworks as you'd like." />

            <EnterEmailForm />
        </div>
    )
}
