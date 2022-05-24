import { AppCard } from "@components/Cards/AppCard/AppCard";
import { AdminBox } from "@components/Home/HomeAdmin/HomeAdmin.style";
import CategoryIcon from "@mui/icons-material/Category";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

const HomeAdmin = () => {
  const router = useRouter();

  return (
    <Grid container marginTop={"20px"} spacing={3} justifyContent="center">
      <AdminBox item lg={3} md={6}>
        <AppCard
          title="Users"
          icon={<PeopleAltIcon />}
          hrefCreate="/users/create_user"
          hrefList="/users/list_all_user"
          hrefDelete="/users/delete_user"
          hrefUpdate="/users/update_user"
        />
      </AdminBox>
      <AdminBox item lg={3} md={6}>
        <AppCard
          title="Pontos de abastecimento"
          icon={<CompareArrowsOutlinedIcon />}
          hrefCreate="/supply_points/create_user"
          hrefDelete="/supply_points/create_user"
          hrefList="/supply_points/create_user"
          hrefUpdate="/supply_points/create_user"
        />
      </AdminBox>
      <AdminBox item lg={3} md={6}>
        <AppCard
          title="Pontos de armazenamento"
          icon={<GpsFixedIcon />}
          hrefCreate="/storage/create_user"
          hrefDelete="/storage/create_user"
          hrefList="/storage/create_user"
          hrefUpdate="/storage/create_user"
        />
      </AdminBox>
      <AdminBox item lg={3} md={6}>
        <AppCard
          title="Produtos"
          icon={<CategoryIcon />}
          hrefCreate="/products/create_user"
          hrefDelete="/products/delete_product"
          hrefList="/products/list_all_product"
          hrefUpdate="/products/update_product"
        />
      </AdminBox>
    </Grid>
  );
};

export { HomeAdmin };
