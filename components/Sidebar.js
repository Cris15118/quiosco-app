import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
      <Image
        width={120}
        height={80}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
        className=" ml-16 mt-5"
      />

      <nav className="mt-5">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
