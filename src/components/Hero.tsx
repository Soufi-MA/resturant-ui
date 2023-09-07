import playIcon from "../assets/Play.svg";
import heroImage from "../assets/Hero.svg";
import food1 from "../assets/Food1.svg";
import food2 from "../assets/Food2.svg";
import stars1 from "../assets/Stars1.svg";
import stars2 from "../assets/Stars2.svg";
import comment from "../assets/Comment.svg";

const Hero = () => {
  return (
    <div className="flex px-2 py-4">
      <div className="flex flex-col flex-1 pt-32 h-[1000px] gap-8">
        <h1 className="font-inter font-[800px] text-[62px]">
          Dive into Delights
          <br /> Of Delectable{" "}
          <span className="text-primary font-[700px]">Food</span>
        </h1>
        <h2 className="font-inter font-[500px] text-[26px] text-[#4A4A4A]">
          Where Each Plate Weaves a Story of Culinary
          <br /> Mastery and Passionate Craftsmanship
        </h2>
        <div className="flex gap-16">
          <div className="flex items-center justify-center rounded-[40px] w-[229px] h-[80px] bg-primary">
            <p className="font-inter font-[600px] text-white text-[26px]">
              Order Now
            </p>
          </div>
          <div className="flex gap-12 items-center justify-center rounded-[40px] h-[80px]">
            <p className="font-inter font-[600px] text-[26px] text-[#4D4D4D]">
              Watch Video
            </p>
            <div className="flex items-center justify-center rounded-full w-20 h-20 shadow-lg">
              <img src={playIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <div className="absolute top-36 right-0 w-[660px] h-[623px] bg-primary rounded-[500px]" />
        <img className="absolute" src={heroImage} alt="" />
        <img className="absolute top-36 right-[450px]" src={comment} alt="" />
        <div className="flex gap-16 absolute bottom-40 right-0">
          <div className="flex gap-4 justify-start pl-4 items-center bg-white w-[349px] h-[132px] rounded-[25px] shadow-2xl border">
            <img
              className="w-[98px] h-[98px] rounded-[15px]"
              src={food1}
              alt=""
            />
            <div className="flex flex-col justify-between h-[98px] ">
              <p className="font-inter font-[600px] text-[22px] text-[#2C2C2C]">
                Spicy noodles
              </p>
              <img src={stars1} alt="" />
              <p className="font-inter font-[600px] text-[24px] text-[#515151]">
                <span className="text-[18px] text-[#FF7979]">$</span>18.00
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-start pl-4 items-center bg-white w-[349px] h-[132px] rounded-[25px] shadow-2xl border">
            <img
              className="w-[98px] h-[98px] rounded-[15px]"
              src={food2}
              alt=""
            />
            <div className="flex flex-col justify-between h-[98px] ">
              <p className="font-inter font-[600px] text-[22px] text-[#2C2C2C]">
                Vegetarian Salad
              </p>
              <img src={stars2} alt="" />
              <p className="font-inter font-[600px] text-[24px] text-[#515151]">
                <span className="text-[18px] text-[#FF7979]">$</span>18.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
