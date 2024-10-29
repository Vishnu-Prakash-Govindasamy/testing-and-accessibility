import FocusTrapModal from "./modal/FocusTrapModal";
import { useState } from "react";

function Hero({ scrollToSection }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-48">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand Code
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Get a readable explanation of any code snippet from any Github
            Repository in seconds.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={scrollToSection}
            >
              View Popular Repos
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={handleOpen}
            >
              Focus Trap Modal
            </button>
            <FocusTrapModal open={open} onClose={handleClose} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
