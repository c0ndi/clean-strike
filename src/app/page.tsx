import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh bg-[#13120E]">
      <Image src="/logo.png" alt="logo" width={400} height={400} className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]" />
    </div>
  );
}
