import Image from "next/image";

type BannerProps = {
  heading: string;
  paragraph?: string;
};

export default function Banner({ heading, paragraph }: BannerProps) {
  return (
    <section className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-sm">
      {/* Background Image */}
      <Image
        src="/logo.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            {heading}
          </h1>

          {paragraph && (
            <p className="mt-4 text-sm sm:text-base text-gray-200">
              {paragraph}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
