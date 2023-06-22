import { getPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"
import { dateconverter } from '@/lib/dateconverter'
import Link from 'next/link'

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
      postID: post.id
  }))
}




export default  async  function Blogpost({params}:{params:{postID:string}}) {




    const post = getSortedPostsData()

    const {postID } = params

    if(!(post.find(post => (post.id === postID)))){
      return notFound()
    }

    const {title,date,contentHtml} = await getPostData(postID)
    const newDate = dateconverter(date)
  return (
     <>
            <div className="mx-auto max-w-lg">
      <header className="text-right">
        <p className="text-gray-500">Date: {newDate}</p>
      </header>
      <h1 className="text-3xl font-bold my-4">{title}</h1>
      <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>

    </div>
    </>
  )
}
