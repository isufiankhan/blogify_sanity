import Link from "next/link";
import { Post } from "../../types"
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

interface Props {
    posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
    return (
        <div className="bg-gray-100 py-20 px-10 flex flex-col gap-10 max-w screen-xl">
            {posts.map((post) => (
                <Link href={{
                    pathname: `/post/${post?.slug?.current}`,
                    query: { slug: post?.slug?.current },
                }} key={post?._id}>
                    <div className="flex flex-col md:flex-row  gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
                        {/* Left Side */}
                        <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-lg relative">
                            <Image
                                src={urlForImage(post?.mainImage).url()}
                                width={500}
                                height={500}
                                alt="blog post image"
                                className="w-full max-h-[500px] object-cover bg-white group-hover:scale-105 duration-500 rounded-bl-md"
                            />
                            {/* <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" /> */}
                            {/* <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
                                <p className="text-lg font-semibold">Click to Read</p>
                            </div> */}
                        </div>
                        {/* Right Side */}
                        <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4 -mt-10 md:mt-10">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    {post?.categories.map((item) => (
                                        <p key={item?._id} className="text-xs uppercase text-gray-500 pr-3 font-semibold">{item?.title}</p>
                                    ))}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 hover:text-dark-yellow duration-100 cursor-pointer">{post?.title}</h2>
                                <p className="text-gray-500">{post?.description}</p>
                            </div>
                            <div className="flex items-center justify-between pt-10">
                                <p className="text-sm font-semibold text-gray-500">
                                    {new Date(post?._createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={urlForImage(post?.author?.image).url()}
                                        width={200}
                                        height={200}
                                        alt="author image"
                                        className="rounded-full object-cover w-10 h-10"
                                    />
                                    <p className="text-sm font-medium text-gray-900">{post?.author?.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogContent