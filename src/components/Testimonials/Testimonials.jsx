import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({ data }) => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="testimonials-swiper pb-12"
            >
                {data.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Swiper Styles */}
            <style jsx>{`
                .testimonials-swiper {
                    padding-left: 10px;
                    padding-right: 10px;
                }

                :global(.testimonials-swiper .swiper-button-next),
                :global(.testimonials-swiper .swiper-button-prev) {
                    color: var(--primary-blue, #1e40af);
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                :global(.dark .testimonials-swiper .swiper-button-next),
                :global(.dark .testimonials-swiper .swiper-button-prev) {
                    background: #1f2937;
                    color: #60a5fa;
                }

                :global(.testimonials-swiper .swiper-button-next:after),
                :global(.testimonials-swiper .swiper-button-prev:after) {
                    font-size: 18px;
                    font-weight: bold;
                }

                :global(.testimonials-swiper .swiper-pagination-bullet) {
                    width: 10px;
                    height: 10px;
                    background: var(--primary-blue, #1e40af);
                    opacity: 0.3;
                }

                :global(.testimonials-swiper .swiper-pagination-bullet-active) {
                    opacity: 1;
                    background: var(--primary-blue, #1e40af);
                }

                :global(.dark .testimonials-swiper .swiper-pagination-bullet) {
                    background: #60a5fa;
                }
            `}</style>
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col transition-all hover:shadow-xl hover:scale-105 duration-300">
            {/* Quote Icon */}
            <div className="text-6xl text-primary-blue/20 dark:text-blue-500/20 leading-none mb-4">
                "
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow italic">
                {testimonial.quote}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                    <HiStar
                        key={index}
                        className="w-5 h-5 text-yellow-400 fill-current"
                    />
                ))}
            </div>

            {/* Student Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-blue/20 dark:border-blue-500/20"
                />
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary-blue dark:text-blue-400 font-medium">
                        {testimonial.program}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.batch}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
