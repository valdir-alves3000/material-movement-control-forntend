import { AppCard } from "@components/AppCard";
import GroupsIcon from "@mui/icons-material/Groups";
import { Grid } from "@mui/material";
import { AdminBox } from "@styles/components/Home/HomeAdmin.style";

const HomeAdmin = () => {
  return (
    <Grid container marginTop={"20px"} spacing={2}>
      <AdminBox item xs={12}>
        <AppCard title="Users" icon={<GroupsIcon />} />
      </AdminBox>
      <AdminBox item xs={12} sm={6}>
        <AppCard title="Pontos de abastecimento" icon={<GroupsIcon />} />
      </AdminBox>
      <AdminBox item xs={12} sm={6}>
        <AppCard title="Pontos de armazenamento" icon={<GroupsIcon />} />
      </AdminBox>
      <AdminBox item xs={12}>
        <AppCard title="Produtos" icon={<GroupsIcon />} />
      </AdminBox>
    </Grid>
  );
};

export { HomeAdmin };
