import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CloudIcon from "@mui/icons-material/Cloud";

function App() {
  return (
    <>
      <Container
        maxWidth="sm"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full">
          {/* glass card */}
          <div className="text-cyan-50 backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20">
            <div className="space-y-6">
              {/* city + time */}
              <div className="flex justify-between items-center">
                <Typography variant="h2">Egypt</Typography>
                <Typography variant="h5">Sat 15-04-2025</Typography>
              </div>

              <hr className="border-white/20" />

              {/* temp + weather + icon */}
              <div className="flex justify-between items-center">
                {/* left side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Typography variant="h1">18°</Typography>
                  </div>

                  <Typography variant="h6">Cloudy</Typography>

                  <div className="flex gap-1.5">
                    <Typography variant="body1">Min: 15°</Typography>
                    <Typography variant="body1">|</Typography>
                    <Typography variant="body1">Max: 20°</Typography>
                  </div>
                </div>

                <CloudIcon style={{ fontSize: "200px" }} />
              </div>
            </div>
          </div>

          {/* language button */}
          <div className="mt-4 text-center">
            <Button variant="text" color="info" style={{ color: "white" }}>
              AR
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
