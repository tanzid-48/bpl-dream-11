import React from 'react';
import bgimage from "../../../assets/bg-shadow.png";
import bannerImage from "../../../assets/banner-main.png"

const Banner = () => {
    return (
        <div
            className="hero min-h-[60vh] w-10/12 mx-auto rounded-2xl"
            style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            <div className="hero-overlay bg-black/70 rounded-2xl"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md flex flex-col items-center gap-4">
                    <img
                        src={bannerImage}
                        alt="bannerImage"
                        className="w-40 object-contain"
                    />

                    <p className="text-xl font-bold">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </p>

                    <p className="text-sm opacity-80">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button className="btn btn-warning mt-2 rounded-xl text-black font-semibold">
                        Claim Free Credit
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Banner;