function TabBar() {
  return (
    <>
    <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-300 flex justify-around items-center bg-white text-[12px] text-gray-400 font-semibold tracking-wider p-3 shadow-md">
      <button className="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 hover:text-blue-700 active:scale-95 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="currentColor">
            <path d="M160-120v-480l320-240 320 240v480H520v-240h-80v240H160Z"/>
        </svg> HOME</button>
      <button className="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 hover:text-blue-700 active:scale-95 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="currentColor">
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-68-284 212-68-68-212-212 68 68 212Z"/>
        </svg>EXPLORE</button>
      <button className="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 hover:text-blue-700 active:scale-95 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="currentColor">
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>        </svg>WISHLIST</button>
      <button className="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 hover:text-blue-700 active:scale-95 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="currentColor">
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-80q0-34 17.5-62.5T224-426q62-31 126.5-45.5T480-486q66 0 130.5 14.5T736-426q29 14 46.5 42.5T800-320v80H160Z"/>            </svg>PROFILE</button>
    </nav>
    </>
  );
}

export default TabBar;