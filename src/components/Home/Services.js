import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const services = [
    {
        title: 'Fullstack development',
        description: 'End-to-end web apps: fast frontends, solid backends, clean databases, smooth deployments, and everything needed to ship a complete product.'
    },
    {
        title: 'Tech advisory',
        description: 'Guidance on turning ideas into real products: choosing the right approach, planning architecture, avoiding costly mistakes, and making smart technical decisions.'
    },
    {
        title: 'Mobile app development',
        description: 'High-quality iOS and Android apps with smooth UI, strong backend connections, reliable notifications, and full publishing support.'
    },
    {
        title: 'API & Backend architecture',
        description: 'Designing the core of your system: stable APIs, secure authentication, efficient databases, and fast performance under real-world load.'
    },
    {
        title: 'Custom automation & integrations',
        description: 'Automating workflows and connecting systems so your business moves faster: payments, CRMs, internal tools, and any integration you need.'
    }
];

const Services = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        skipSnaps: false,
        containScroll: 'trimSnaps'
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window === 'undefined') return;
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window?.addEventListener('resize', handleResize);
        return () => window?.removeEventListener('resize', handleResize);
    }, []);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    return (
        <section id="services-section">
            <div className="container">
                <div className="services-header" data-aos="fade-up">
                    <p className="section-eyebrow"><span>02.</span> How I Can Help</p>
                    <h2>Services tailored for complete builds</h2>
                    <p className="services-intro">From idea validation to launch and post-release support, I cover every step so you can stay focused on the business.</p>
                </div>

                <div className="services-carousel">
                    {!isMobile && (
                        <button
                            type="button"
                            className="services-nav prev"
                            onClick={scrollPrev}
                            aria-label="Previous services"
                            disabled={!canScrollPrev}
                        >
                            <FiChevronLeft />
                        </button>
                    )}

                    <div className="services-viewport" ref={emblaRef}>
                        <div className="services-track">
                            {services.map((service, index) => (
                                <article
                                    className="service-card"
                                    key={service.title}
                                    data-aos="fade-up"
                                    data-aos-delay={`${200 + index * 100}`}
                                    data-aos-anchor="#services-section"
                                >
                                    <div className="service-card-head">
                                        <span className="service-index">0{index + 1}</span>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p>{service.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {!isMobile && (
                        <button
                            type="button"
                            className="services-nav next"
                            onClick={scrollNext}
                            aria-label="Next services"
                            disabled={!canScrollNext}
                        >
                            <FiChevronRight />
                        </button>
                    )}
                </div>

                <div className="services-dots" data-aos="zoom-in" data-aos-delay="220">
                    {services.map((service, index) => (
                        <button
                            key={service.title}
                            type="button"
                            className={`services-dot ${selectedIndex === index ? 'active' : ''}`}
                            aria-label={`View ${service.title}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
