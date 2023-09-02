import { Listing } from "@/components/Listing";
import { Title } from "@/components/Title";
import {TopBar} from "@/components/TopBar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', padding: '6rem', height: '100vh', gap:'1rem'}}>
      <TopBar />
      <Title />
      <Listing />
    </Box>
  );
}
