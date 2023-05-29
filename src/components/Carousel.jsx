import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card2 from "./Card2";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 300;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 300;
  };

  return (
    <div className=" px-8 max-w-7xl  mx-auto ">
      <div className="text-center py-4  text-xl font-bold">Carousel</div>
      <div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute top-[120px] left-0 bg-slate-400 z-10 p-2 m-2 rounded-full"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-[5px] top-[120px] z-10 p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="carousel p-8 flex items-center justify-between overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
          <Card />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
