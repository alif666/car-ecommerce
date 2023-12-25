export default function CarHero(){

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">   
        {/* Top Banner Content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="relative w-full h-0 pb-72">
            <img src="./images/car-top-banner-bg.jpg" alt="car-banner-top-bg" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/4 lg:top-1/3 lg:left-1/3 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mb-4 lg:mb-0 lg:mr-8" href="#0">Buy Car</a>
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Sell Car</a>
            </div>            
            </div>
        </div>
        </div>


    );
}