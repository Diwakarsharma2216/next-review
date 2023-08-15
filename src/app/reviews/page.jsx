import Link from "next/link"
import Heading from "../component/Heading"
import { getReviews } from "../../../lib/reviews"




const Reviwspage = async() => {
const reviews=await getReviews()

  return (
    <div>
        <Heading> Review </Heading>
      
        <ul className="flex flex-row flex-wrap gap-3">
         { reviews.length>0 && reviews.map((el)=><li className="border w-80  bg-white hover:shadow-xl">
          <Link href={`/reviews/${el.slug}`}>
       <img src={el.image} alt="" width={"340"} height={"180"} className="rounded-t mb-2" />
       <h2 className="py-1 text-center font-orbitron">{el.title}</h2>
    
       </Link>
          </li>)}
    
        </ul>
      
    </div>
  )
}

export default Reviwspage