import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatesNews = () => {
    return (
        <div className="flex items-center gap-2 bg-gray-100 p-2">
           <p className=" bg-[#D72050] py-1 px-2 text-white "> Latest</p>
           <Marquee  pauseOnHover={true} speed={100} className="space-x-10 ">
            <Link to="/news">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... 

            </Link>
            <Link to="/news">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... 

            </Link>
            <Link to="/news">
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... 

            </Link>
           </Marquee>
        </div>
    );
};

export default LatesNews;