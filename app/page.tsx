"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-7 flex-1'>
<div>
<Image className='w-[11rem]' width={120} height={120} src="/logo.png" alt=""/>
</div>
<h2 className="text-white text-4xl font-bold">Welcome to Scratik</h2>
<h2 className="text-[#BE7E00] text-xl font-bold">Se connecter en tant que:</h2>
<div className="flex flex-row gap-5">
<div>
  <Link href={"/login"}>
  <button   className='bg-[#BE7E00] px-6 py-3'>Administrateur</button>
  </Link>

</div>
<div>
<Link href={"/login/supervisor"}>
<button   className='bg-[#00000002] text-[#BE7E00] border border-[#BE7E00] px-6 py-3'>Superviseur</button>
</Link>

</div>
</div>
  </section>
  );
}
