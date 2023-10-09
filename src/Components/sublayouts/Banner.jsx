const Banner = () => {
    return (
        <div className="hero min-h-[700px]" style={{ backgroundImage: 'url(https://i.ibb.co/GnLZyDF/banner.jpg' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div data-aos="fade-down" className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">We Create Original Event Experience</h1>
                    <p className="mb-5">Welcome to the ultimate destination for organizing and managing tech and gaming events! Our platform simplifies event management, making it a breeze for tech and gaming enthusiasts, event planners, and organizers alike. From LAN parties to tech meetups, we have got you covered.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;