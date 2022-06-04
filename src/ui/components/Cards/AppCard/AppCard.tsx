import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IAppCard } from "data/types/IApp";
import { useRouter } from "next/router";
import { AppCardContainer } from "./AppCard.style";

const AppCard = ({
  title,
  icon,
  hrefCreate,
  hrefDelete,
  hrefList,
  hrefUpdate,
}: IAppCard) => {
  const router = useRouter();

  return (
    <AppCardContainer>
      <>
        {icon}
        <PageTitle title={title} />
        <div onClick={() => router.push(hrefCreate)}>
          <AddCircleOutlineIcon />
          Cadastrar
        </div>
        <div onClick={() => router.push(hrefUpdate)}>
          <EditIcon />
          Atualizar
        </div>
        <div onClick={() => router.push(hrefList)}>
          <ListAltIcon />
          Listar
        </div>
        <div onClick={() => router.push(hrefDelete)}>
          <RemoveCircleOutlineIcon />
          Deletar
        </div>
      </>
    </AppCardContainer>
  );
};

export { AppCard };
