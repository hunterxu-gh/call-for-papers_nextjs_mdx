import { CustomMDX } from 'app/components/mdx';
import { getBlogPosts } from 'app/utils/mdxParser';
import { notFound } from 'next/navigation';
import path from 'path';

const datapath = path.join(process.cwd(), 'app')
export default function Page() {
    console.log(getBlogPosts(datapath)[0].slug)
    let post = getBlogPosts(datapath).find((post) => post.slug === 'page')

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
