import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="font-poppins sticky top-0 z-50 flex justify-between bg-white/10 px-5 py-3 backdrop-blur">
      <div className="w-1/6">
        <p className="cursor-default text-2xl font-bold">Vaj</p>
      </div>

      <div className="flex w-4/6 justify-center gap-5 text-lg font-bold">
        {['Home', 'About', 'Stacks'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative flex cursor-pointer items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex w-1/6 justify-end gap-2">
        <a
          href="https://www.instagram.com/ev_vaj?igsh=Mzc2cXVtaGRlbWg0"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-120 hover:bg-gray-400/50"
        >
          <Image src="/images/instagram.svg" width={30} height={30} alt="instagram logo" />
        </a>

        <a
          href="https://www.tiktok.com/@vsj_.0?_t=ZS-90j0DRc3932&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-120 hover:bg-gray-400/50"
        >
          <Image src="/images/tiktok.svg" width={30} height={30} alt="tiktok logo" />
        </a>
      </div>
    </nav>
  )
}
