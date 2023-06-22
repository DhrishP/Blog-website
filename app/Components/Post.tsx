import { getSortedPostsData } from "@/lib/posts"
import Listitems from "./Listitems"

export default function Post() {
    const posts = getSortedPostsData()


  return (
   <div>
    <ul className="space-y-2 mt-4">
        {posts.map((post)=>(
            <>
            <Listitems id={post.id} title={post.title} date={post.date} />
          </>
        ))}
    </ul>
   </div>
  )
}
