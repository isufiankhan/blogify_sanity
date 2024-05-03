import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      {/* <Image
        src={"/Banner.jpg"}
        alt="banner image"
        width={1550}
        height={300}
        className="w-full max-h-screen object-contain"
      /> */}
      <div className="bg-dark-yellow h-[350px] md:h-[400px] xl:h-[500px] w-full border-b border-black" />
      <div className="absolute top-0 h-full text-black flex flex-col items-start gap-3 justify-center mx-2 sm:mx-10 md:mx-28">
        <h2 className="text-[50px] md:text-[75px] lg:text-[100px] font-serif inline-block">Stay Inquisitive.</h2>
        <p className="text-xl md:text-2xl text-textgray">
        Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <div className="pt-3">
          <Link href={"/studio"}>
          <button className="text-white px-12 py-2 bg-darkgray rounded-full text-2xl">
            Start writing
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;