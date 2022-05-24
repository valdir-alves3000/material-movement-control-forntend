import { styled } from "@mui/material";

const AppCardContainer = styled("div")(({ theme }) => ({
  width: "270px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "0" + theme.spacing(4),
  margin: "5px",
  background: theme.palette.primary.light,
  opacity: "0.8",

  "&:hover": {
    opacity: "0.9",
  },

  "& > div":{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'150px',
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.primary,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius:theme.spacing(1),
    cursor: "pointer"
  },

  "& > div:hover":{
    background: theme.palette.primary.dark,
    color: theme.palette.warning.main,
  },

  "& > svg": {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(12),
    position: "absolute",
    top: theme.spacing(-2),
    background: theme.palette.primary.light,
    
    borderRadius:"50%",
    right: theme.spacing(-2),
    padding: theme.spacing(2),
    
  border: `5px solid ${theme.palette.primary.dark}`,
  boxShadow: `2px 2px 2px rgba(0,0,0,1)`
  },


  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
  },
}));

export { AppCardContainer };
