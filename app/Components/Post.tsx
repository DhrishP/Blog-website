import { getPostsMeta } from "@/lib/posts"
import Listitems from "./Listitems"

export default async function Post() {
    const posts =await  getPostsMeta()
    if (!posts) {
      return <p>not post available</p>
    }

  return (
   <div>
    <ul className="space-y-2 mt-4">
        {posts.map((post)=>(
            <>
            <Listitems key={post.id} post={post}  />
          </>
        ))}
    </ul>
   </div>
  )
}
