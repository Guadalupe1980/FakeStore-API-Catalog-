import useCategories from "../hooks/useCategories"

function CategoryCircle() {
    const {categories, loading, error} = useCategories();

    if(loading) return <p className="flex items-center justify-center text-xl font-bold text-blue-700 mt-5">Cargando categorias...</p>

  return (
    <>
        {console.log(categories)}
        <div className="bg-slate-100 p-4 mt-6 mb-15">
        <h1 className="text-xl font-bold mb-4">Shop by Category</h1>
        
        <div className="flex gap-6 overflow-auto pb-3 scrollbar-none w-full">
        {loading ?             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-loader-icon lucide-loader animate-spin block col-span-2 my-10 mx-auto"
            >
              <path d="M12 2v4" />
              <path d="m16.2 7.8 2.9-2.9" />
              <path d="M18 12h4" />
              <path d="m16.2 16.2 2.9 2.9" />
              <path d="M12 18v4" />
              <path d="m4.9 19.1 2.9-2.9" />
              <path d="M2 12h4" />
              <path d="m4.9 4.9 2.9 2.9" />
            </svg> :categories.map((category, index) => (
            <section key={index} className="flex flex-col gap-2 items-center shrink-0">
                <div className="flex justify-center items-center bg-white rounded-full w-20 h-20 shadow shrink-0">
                {category  === "women's clothing" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 4a3.5 3.5 0 0 0-3.5 3.5h2A1.5 1.5 0 0 1 12 6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 9c-.55 0-1 .45-1 1v1.75L2.4 18.2A1 1 0 0 0 3 20h18a1 1 0 0 0 .6-1.8L13 11.75v-.9a3.5 3.5 0 0 0 2.5-3.35A3.5 3.5 0 0 0 12 4m0 9.5l6 4.5H6Z" />
                    </svg>

                ): category === "men's clothing" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="3rem" fill="black">
                        <path d="M430.5-680.5Q410-701 410-730t20.5-49.5Q451-800 480-800t49.5 20.5Q550-759 550-730t-20.5 49.5Q509-660 480-660t-49.5-20.5ZM400-160v-200h-40v-180q0-33 23.5-56.5T440-620h80q33 0 56.5 23.5T600-540v180h-40v200H400Z"/>
                    </svg>

                ): category === "electronics" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="darck">
                        <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm313.5-246.5Q661-394 700-394t66.5 27.5Q794-339 794-300t-27.5 66.5Q739-206 700-206t-66.5-27.5Q606-261 606-300t27.5-66.5ZM840-640q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-183 57q-17 17-17 43t17 43q17 17 43 17t43-17q17-17 17-43t-17-43q-17-17-43-17t-43 17Zm142.5 382.5Q840-241 840-300t-40.5-99.5Q759-440 700-440t-99.5 40.5Q560-359 560-300t40.5 99.5Q641-160 700-160t99.5-40.5Z"/>
                    </svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
                        <path d="M0 0h15v15H0z" fill="none" />
                        <path fill="currentColor" d="m15 5.5l-3.5-4h-8L0 5.5L7.5 14zm-4.25 0l.75-3l2.5 3zm-.25.75h2.75L8.5 12zM10 5.5L8 2.25h2.75zm-4.5.75h4l-2 6.25zm.25-.75l1.75-3l1.75 3zM5 5.5l-.75-3.25H7zM6.5 12l-5-5.75h3zm-3-9.5l.75 3H1z" />
                    </svg>                
                )}
                </div>

                <span className="font-semibold text-[12px]">
                    {category === "women's clothing" ? "Women"
                    :category ===  "men's clothing" ? "Men"
                    :category === "electronics" ? "Electronics"
                    :"Jewelery" }
                      
                </span>
            </section>
        ))}
        </div>
    </div>
    </>
  )
}

export default CategoryCircle;