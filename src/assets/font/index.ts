import { Barlow_Condensed, Bebas_Neue, Lora } from "next/font/google";

export const barlow = Barlow_Condensed({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const lora = Lora({
  subsets: ["latin"],
});
