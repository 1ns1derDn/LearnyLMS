import localFont from "next/font/local";

export const consolas = localFont({
  src: [
    {
      path: "../public/fonts/consolas.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/consolas.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helvetica_light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica_regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica_bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
