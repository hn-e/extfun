import { Link } from "react-router-dom";
import AnimatedTitle from "./AnimatedTitle";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-[#151515] py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/neon3.png" />
          <ImageClipBox src="/img/neon6.png" />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="/img/neon1.png" clipClass="hidden sm:block" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Extroverts
          </p>

          <AnimatedTitle
            title="We are already partying."
            className=" !md:text-[6.2rem] w-full  !text-5xl !font-black !leading-[.9]"
          />

          <Link
            to="/contact"
            className="group relative z-10 mt-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
          >
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                contact us
              </div>
              <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                contact us
              </div>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
