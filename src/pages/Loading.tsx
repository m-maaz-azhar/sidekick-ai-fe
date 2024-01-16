export default function Loading() {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen p-8 text-white">
            <div className="container mx-auto flex justify-center items-center h-screen">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </div>
    )
}
