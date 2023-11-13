import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[550px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content p-20 bg-black opacity-80">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl text-white font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;