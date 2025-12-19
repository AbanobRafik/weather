import axios from "axios";
import { useEffect, useReducer } from "react";

const API_KEY = "5f4d6ae55530ee30c2ad7749f110ca72";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

function weatherReducer(state, action) {
  const { type, payload } = action;
  if (type === "LOADING") {
    return { data: null, error: null, loading: true };
  }
  if (type === "SUCCESS") {
    return { data: payload, error: null, loading: false };
  }
  if (type === "ERROR") {
    return { data: null, error: payload, loading: false };
  }
  return state;
}

export function useWeather() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  useEffect(() => {
    const loadWeather = async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=29.088413&lon=31.119085&appid=${API_KEY}&units=metric`
        );
        dispatch({ type: "SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };
    loadWeather();
  }, []);

  return { ...state };
}
