import { key } from "localforage";
import { AiFillStar } from "react-icons/ai";
import { FaBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";

const NewsCard = (props ={}) => {
    const {news}= props || {}
    const {title ,total_view  ,image_url,author, thumbnail_url, details, rating }=news
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
                    {/* author */}
           <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full mr-3" src={author.img} alt={author.name} />
           
           <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
           </div>
           <div className=" flex ml-auto gap-2">
           <FaBookmark className="text-gray-600"></FaBookmark>
            <FaShareAlt className="text-gray-600"></FaShareAlt>
           
           </div>
           </div>
           {/* title */}
           <h2 className="text-xl font-semibold mb-2">{title}</h2>
           <img className="w-full h-72 object-cover rounded-lg mb-4" src= {image_url} alt="" />
               
               {/* details */}
               <p className="text-gray-700 text-sm mb-4">{details.slice(0,150)}...{""}
                <span className="text-primary">Read More</span>
               </p>
               {/* rating and views */}
               <div className="flex items-center justify-between text-gray-600">
                {/* rating */}
                <div className="flex items-center">
                    {[...Array(5)].map((_,i)=>(
                        <AiFillStar
                        key={i} className={`text-yellow-500 ${
                            i< Math.round(rating.number)?"":"opacity-50"
                        }`}
                        > </AiFillStar>
                    ))}
                    <span className="ml-2 font-semibold">{rating.number}</span>

                </div>
                {/* views */}
                <div className="flex items-center">
                    <FaRegEye className="mr-1"></FaRegEye>
                    <span>{total_view}</span>

                </div>
                   
               </div>
            
        </div>
    );
};

export default NewsCard;