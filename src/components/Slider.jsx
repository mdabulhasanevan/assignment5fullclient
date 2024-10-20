

const Slider = () => {
  return (
    <div className="hidden sm:block relative">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.lazcdn.com/us/domino/69745134-220a-46e9-91b4-48a6994bcd5f_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            className="w-full h-80" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.lazcdn.com/us/domino/f5d4f4fd-b047-473f-b64a-e60d853e5449_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            className="w-full h-80" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.lazcdn.com/us/domino/3f46cc2f-053e-417b-83c4-2d2086e0c890_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            className="w-full h-80"/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div className="hero absolute  ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
        
      </div>

     
    </div>

  );
};

export default Slider;