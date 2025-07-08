import Image from 'next/image';

interface Props {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
}

export default function TopJobsSection({
  title,
  paragraph1,
  paragraph2,
  imageUrl,
}: Props) {
  return (
    <section className="bg-[#c2b0de] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4 text-[purple]">{title}</h2>
          <p className="mb-4 text-1xl leading-relaxed text-[purple]">
            {paragraph1}
          </p>
          <p className="text-sm leading-relaxed">{paragraph2}</p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image  src={imageUrl} alt="Top Jobs" width={100} height={100} className="w-full" />
        </div>
      </div>
    </section>
  );
}
