
export default function Comment({name, comment}) {
    return (
        <div className="w-full rounded-lg my-4 shadow-md p-4">
            <h4 className="text-blue-500 font-semibold">{name}</h4>
            <p className="text-sm mt-4">{comment}</p>
        </div>
    )
}