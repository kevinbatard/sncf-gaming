import type { Metadata } from "next";
import Header from "../components/header/Header";

export const metadata: Metadata = {
  title: "Streamers",
  description: "Voici les streamers qui constituent l'équipe de la chaine",
};

export default function Streamers() {
  return (
    <>
      <Header />
      <h1>Les streamers de l'équipe : </h1>
    </>
  );
}
