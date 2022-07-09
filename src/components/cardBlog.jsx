import { Link } from "react-router-dom";


export default function CardBlog(props) {
    const UrlFiles = import.meta.env.VITE_URL_FILES
    console.log(props.dataBlog);
    const { _id, title, content, thumbnail } = props.dataBlog
    const textToArray = content.split(' ')
    const cropContent = textToArray.slice(0, 12).concat(' ...');
    const shortContent = cropContent.join(' ')
    console.log(shortContent);

    return (
        <div className="flex h-30 my-8 shadow-md rounded-lg overflow-hidden">
            <img className="w-48 h-full" src={`${UrlFiles}/${thumbnail[0].hash}${thumbnail[0].ext}`} alt="image blog" />
            <div className="ml-2">
                <h3 className="text-gray-800 text-xl font-bold">{title}</h3>
                <div className="text-sm text-gray-600">{shortContent}</div>
                <Link to={`/${_id}`}>
                 <button className="px-3 mt-5 text-sm py-1 text-white rounded-md bg-blue-500">Read</button>
                </Link>
            </div>
        </div>
    )
}