import type { Metadata } from "next";
import Header from "../components/header/Header";

export const metadata: Metadata = {
  title: "Programmation",
  description:
    "Retrouve la programmation de ta chaine Twitch pour la semaine à venir !",
};

export default function Programmation() {
  return (
    <>
      <Header />
      <h1>La prog : </h1>
    </>
  );
}
