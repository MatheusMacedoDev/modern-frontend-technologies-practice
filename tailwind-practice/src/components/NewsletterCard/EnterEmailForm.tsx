export default function EnterEmailForm() {
    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Enter your e-mail address"
                />
                <button
                    className="bg-black text-white p-2 rounded-lg text-sm"
                    type="button"
                >Subscribe</button>
            </div>

            <div>
                <input type="checkbox" />
                <p>By checking this box, you agree to receive weekly newsletter.</p>
            </div>
        </form>
    )
}
