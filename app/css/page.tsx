'use client'

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full m-auto mt-4 gap-4">
            <h1 className="font-bold text-4xl">testing colors</h1>

            <div className="w-56 h-56 bg-gradient-to-r from-slate-50 via-slate-400 to-slate-900">
                <div className="w-56 h-56 bg-gradient-to-r from-[#]"> </div>
            </div>
        </div>
    )
}
export default Page