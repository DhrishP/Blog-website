import {getPostsMeta,getPostByName} from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"
import { dateconverter } from '@/lib/dateconverter'
import Link from 'next/link'

export const revalidate = 86400;
export async function generateStaticParams() {
  const posts = await  getPostsMeta()

  if(!posts) return []

  return posts.map((post) => ({
      postID: post.id
  }))
}

export async function getMetadata({params}:{params:{postID:string}}){
 const {postID} = params
 const posts = await getPostByName(`${postID}.mdx`)
 if (!posts) {
  return {
    title:'post not found'
  }
 }
 return{
  title:posts.meta.title
 }

 
}


export default  async  function Blogpost({params}:{params:{postID:string}}) {

  const {postID } = params
    const post = await getPostByName(`${postID}.mdx`)

   if(!post){
    notFound()
   }
   const {meta,content} = post

   const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
))
 
    const newDate = dateconverter(meta.date)
  return (
     <>
     <div className=''>
                <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">
                {newDate}
            </p>
            <article>
                {content}
            </article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className="mb-10">
                <Link href="/">← Back to home</Link>
            </p>
            </div>
    </>
  )
}
