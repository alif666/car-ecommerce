


export default function CustomerReview(){

return(
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-2">
                    THIS IS HOW IT SHOULD FEEL
                </h1>

                {/* Customer Review Content */}
        
                    
                <div className="flex flex-row space-x-4 justify-normal">
                    <div className="basis-1/4 md:basis-1/3 pt-4 border-2 border-gray-200">
                        <img className="rounded-full mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                                <blockquote className="text-xl font-medium mb-2 pt-4">
                                    “ I love this product and would recommend it to anyone. Could not be easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                                <div className="text-gray-600">
                                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                                </div>
                    </div>
                    <div className="basis-1/4 md:basis-1/3 pt-4 border-2 border-gray-200">
                        <img className="rounded-full mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                                <blockquote className="text-xl font-medium mb-2 pt-4">
                                    “ I love this product and would recommend it to anyone. Could not be easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                                <div className="text-gray-600">
                                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                                </div>
                    </div>
                    <div className="basis-1/4 md:basis-1/3 pt-4 border-2 border-gray-200 ">
                        <img className="rounded-full mx-auto" src="./images/testimonial.jpg" alt="Testimonial" />
                                <blockquote className="text-xl font-medium mb-2 pt-4">
                                    “ I love this product and would recommend it to anyone. Could not be easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                                <div className="text-gray-600">
                                    <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                                </div>
                    </div>
                </div>

            </div>


    </div>
    );
}