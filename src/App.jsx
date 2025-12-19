import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useWeather } from "./hooks/useWeather";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import moment from "moment";

function App() {
  const { loading, data, error } = useWeather();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const today = moment().format("dddd, MMMM Do • h:mm a");
  if (loading) {
    return (
      <p className="text-center text-white text-2xl mt-20 animate-pulse">
        Loading weather...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-300 text-2xl mt-20">{error}</p>;
  }

  function handleLanguageChange() {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-900 via-cyan-900 to-indigo-900 flex items-center justify-center">
      <Container maxWidth="sm">
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="backdrop-blur-2xl bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 text-white"
        >
          <div className="text-center space-y-2">
            <Typography variant="h3" className="font-bold tracking-wide">
              {t(data?.name)}
            </Typography>
            <Typography variant="body1" className="opacity-80">
              {t(today)}
            </Typography>
          </div>

          <hr className="my-6 border-white/20" />

          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <Typography variant="h1" className="font-extrabold">
                {Math.round(data?.main?.temp)}°
                <span className="text-4xl align-top">C</span>
              </Typography>

              <Typography
                variant="h6"
                className="uppercase tracking-wide opacity-90"
              >
                {t(data?.weather?.[0]?.description)}
              </Typography>

              <div className="flex gap-3 text-sm opacity-80">
                <span>
                  {t("min")}: {Math.round(data?.main?.temp_min)}°
                </span>
                <span>
                  {t("max")}: {Math.round(data?.main?.temp_max)}°
                </span>
              </div>
            </div>

            <img
              className="w-36 h-36 drop-shadow-xl"
              src={`https://openweathermap.org/img/wn/${
                data?.weather?.[0]?.icon || "04n"
              }@4x.png`}
              alt="weather icon"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="outlined"
            color="info"
            className="text-white border-white/40 hover:border-white"
            onClick={handleLanguageChange}
          >
            {lang === "en" ? "AR" : "EN"}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
