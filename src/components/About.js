import Hero from "../img/asdasdasd.png";
const About = () => {
  return (
    <>
      <section className="flex flex-row justify-center items-center p-2">
        <div>
          <img className="rounded-lg" src={Hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center p-2 text-white">
          <h1>About Us</h1>
          <p className="text-justify p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
            aliquam! Nobis ipsam dicta vitae eos reiciendis, facere quo maxime
            animi veniam sapiente itaque voluptatibus perferendis impedit
            accusamus, tempore, cupiditate illo.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
