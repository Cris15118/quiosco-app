import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

function Categoria({ categoria }) {
  const { handleCategoria, categoriaActual } = useQuiosco();

  const { nombre, icono, id } = categoria;
  return (
    <div
      className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} 
    flex items-center gap-4 w-full border p-3 hover:bg-amber-400 ml-3`}
    >
      <Image
        className=" ml-5 mt-5"
        width={50}
        height={50}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer "
        onClick={() => handleCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
}

export default Categoria;
