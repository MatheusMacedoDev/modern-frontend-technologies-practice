type SomeComponentProps = {
    name?: string;
};

const SomeComponent = ({ name = 'Anonymous' }: SomeComponentProps) => {
    return (
        <div>
            <h1 className="font-extrabold text-2xl">Hello my {name}</h1>
        </div>
    );
};

export default SomeComponent;
