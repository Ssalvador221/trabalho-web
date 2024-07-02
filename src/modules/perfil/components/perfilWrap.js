import PerfilForm from "./perfilForm"
import Menu from "@/components/Menu";

function PerfilWrap() {
    return(
        <>
        <div className="fixed">
          <Menu />
        </div>
        <div className="h-screen ml-24 h-full w-full ">
            <PerfilForm />
        </div>
      </>
      );
}

export default PerfilWrap;