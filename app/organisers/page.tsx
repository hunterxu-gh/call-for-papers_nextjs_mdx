import { CustomMDX } from 'app/components/mdx';
import { getBlogPosts } from 'app/utils/mdxParser';
import { notFound } from 'next/navigation';
import path from 'path';

export const metadata = {
  title: 'Organisers',
  description: 'Organisers page.',
}
const datapath = path.join(process.cwd(),'app','organisers','organisers')
export default function Page() {
  let post = getBlogPosts(datapath).find((post) => post.slug === 'organisers')

  if (!post) {
      notFound()
  }
  
  return (
      <section>
      <article className="prose">
          <CustomMDX source={post.content} />
      </article>
      </section>
  )
}
