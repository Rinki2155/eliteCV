// components/JobFunnelSection.tsx
import Link from 'next/link';
import Image from 'next/image';


interface Props {
  title: string;
  paragraph1: string;
  paragraph2: string;
  buttonText: string;
  imageUrl: string;
  link: string;
}

export default function JobFunnelSection({
  title,
  paragraph1,
  paragraph2,
  buttonText,
  imageUrl,
  link,
}: Props) {
  return (
    <section className="bg-[#c2b0de] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <Image  src={imageUrl} alt="Job Funnel" width={100} height={100} className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4 text-[purple]">{title}</h2>
          <p className="mb-4 text-sm leading-relaxed">{paragraph1}</p>
          <p className="mb-6 text-sm leading-relaxed">{paragraph2}</p>
          <Link href={link}>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md text-white text-lg">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
