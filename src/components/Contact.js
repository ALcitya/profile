import Aziz from "../img/profile/aziz.png";
import Amix from "../img/profile/amix.png";
import Ines from "../img/profile/ines.png";
import Diki from "../img/profile/diki.png";
import Ichwan from "../img/profile/ichwan.png";
import Jihan from "../img/profile/jihan.PNG";
const Contact = ({ Card }) => {
  return (
    <>
      <section className="flex justify-evenly flex-wrap">
        <Card
          img={Aziz}
          name={"Muhammad Fauzi Nur Aziz"}
          jobdesk={"Mahasiswa | Web Dev"}
          errorImage={"Aziz"}
        />
        <Card
          img={Ichwan}
          name={"Moch. Ichwan Alif Kurniawan"}
          jobdesk={"Mahasiswa | Kang Ngocok"}
          errorImage={"Ichwan"}
        />
        <Card
          img={Jihan}
          name={"Jihan Khansa Nadhila"}
          jobdesk={"Mahasiswa | Cengengesan"}
          errorImage={"Jihan"}
        />
        <Card
          img={Ines}
          name={"Ines Rahayu Tyas"}
          jobdesk={"Mahasiswa | Nangisan"}
          errorImage={"Ines"}
        />
        <Card
          img={Amix}
          name={"Muhamad Gus Amix Kusuma"}
          jobdesk={"Mahasiswa | Banci Alon - Alon"}
          errorImage={"Amix"}
        />
        <Card
          img={Diki}
          name={"Alfian Anwar Shodiqi"}
          jobdesk={"Mahasiswa | Sewaan Tante"}
          errorImage={"Diki"}
        />
      </section>
    </>
  );
};
export default Contact;
