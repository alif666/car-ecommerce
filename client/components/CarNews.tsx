export default function CarNews(){
    return(
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-2">
                    Latest Car News
                </h1>
            </div>

            {/* Car News */}
            <div className="grid grid-flow-col grid-col-4 gap-12 content-center">
                
                <div className="text-gray-600 text-center indent-4">
                    <img className="mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                    <p>The news about this car</p>
                </div>
                <div className="text-gray-600 text-center indent-4">
                    <img className="mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                    <p>The news about this car</p>
                </div>
                <div className="text-gray-600 text-center indent-4">
                    <img className="mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                    <p>The news about this car</p>
                </div>
                <div className="text-gray-600 text-center indent-4">
                    <img className="mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                    <p>The news about this car</p>
                </div>
                
            </div>
            <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mb-4 lg:mb-0 lg:mr-8" href="#0">Read More...</a>
                
        </div>
    );
}