
import { Bagel_Fat_One} from 'next/font/google'


const inter =   Bagel_Fat_One({ weight: ['400'],subsets:['latin-ext'] })

export const metadata = {
  title: 'BatBlogs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <>
       <main className="px-4 md:px-6 prose prose-xl  prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
        </>

  )
}
