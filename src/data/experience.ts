import React from "react";
import ntnu from '../assets/ntnu.png';
import VektorLogo from "../assets/vektor-logo-circle.svg";
import NordicLogo from "../assets/nordicSemiconductor.png";
import Hybrida from "../assets/hybrida.png";

export const data = {
  experience: [
  {
    title: "Informatikk",
    date: "2021 - 2024",
    description: `<span class="mute">Jeg har en</span> bachelorgrad i Informatikk fra NTNU i Trondheim<span class="mute">, her har jeg fått muligheten til å fordype meg i programvareutvikling, algoritmer, datastrukturer, databaser og KI.</span>`,
    icon: React.createElement("img", { src: ntnu, style: { width: "80%", height: "80%" }}),
    link: "https://www.ntnu.no/studier/bit"
  },
  {
    title: "Utvikler hos Vektorprogrammet",
    date: "2023 - DD",
    description: '<span class="mute">Jeg har engasjert meg i studentvervet Vektorprogrammet som utvikler. Her har jeg fått muligheten til å</span> bidra med utviklingen av den nye nettsiden for vervet. <span class="mute"> Dette har vært et utrolig sosialt verv, som har gitt meg verdifull erfaring med samarbeid i team og utvikling.</span>',
    icon: React.createElement("img", { src: VektorLogo, style: { width: "80%", height: "80%" }}),
    link: "https://vektorprogrammet.no/team/Trondheim/IT"
  },
  {
    title: "IT-Nestleder til Vektorprogrammet",
    date: "2024-2024",
    description: '<span class="mute">Videre fikk jeg rollen som nestleder i Vektorprogrammets IT-team. Her hadde jeg ansvar for å </span>lede møter, delegere oppgaver og sørge for at alle i teamet følte seg sett med oversikt over sine arbeidsoppgaver<span class="mute">. Dette ga meg verdifull erfaring med ledelse, kommunikasjon og teamarbeid.</span>',
    icon: React.createElement("img", { src: VektorLogo, style: { width: "80%", height: "80%" }}),
    link: "https://vektorprogrammet.no/team/Trondheim/IT"
  },
  {
    title: "Bacheloroppgave med Nordic Semiconductor",
    date: "Vår 2024",
    description: '<span class="mute">Jeg skrev bacheloroppgave  med</span> Nordic Semiconductor. <span class="mute">Sammen med to andre studenter utviklet vi firmware for en Thingy:91-enhet. Hvor vi benyttet oss av samples og SDK-er som var basert på </span> C og Zephyr OS<span class="mute">. Gjennom dette prosjektet fikk jeg både erfare hvordan det er å jobbe tett med en reell kunde, og fikk prøve meg på firmware-utvikling.</span>',
    icon: React.createElement("img", { src: NordicLogo, style: { width: "80%", height: "80%" }}),
    link: "https://www.nordicsemi.com/About-us"
  },
  {
    title: "IT-Leder til Vektorprogrammet",
    date: "2024 - 2025",
    description: '<span class="mute">I slutten av mai 2024 ble jeg valgt til rollen som IT-leder for Vektorprogrammet. Som leder hadde jeg ansvaret for </span>drift av den aktive nettsiden, utvikling av den nye nettsiden samt fungere som kontaktperson for de andre teamene<span class="mute"> i Trondheim, Ås og Bergen.',
    icon: React.createElement("img", { src: VektorLogo, style: { width: "80%", height: "80%" }}),
    link: "https://vektorprogrammet.no/team/Trondheim/IT"
  },
  {
    title: "Ingeniørvitenskap og IKT",
    date: "2024 - 2025",
    description: '<span class="mute">Etter å ha fullført Bachelorgraden begynte jeg på </span>sivilingeniørstudiet, Ingeniørvitenskap og IKT ved NTNU Trondheim. <span class="mute">Jeg valgte denne graden for å forbedre forståelsen innen generelle ingeniørfag, samtidig som jeg ønsket å beholde fokus på IT.',
    icon: React.createElement("img", { src: ntnu, style: { width: "80%", height: "80%" }}),
    link: "https://www.ntnu.no/studier/mting"
  },
  {
    title: "Turringen",
    date: "2024 - 2025",
    description: `<span class="mute">Det var viktig for meg å integrere meg tidlig i studiemiljøet til I og IKT, derfor engasjerte jeg meg i Tur-komiteen. </span>Turringen er en av linjeforeningen Hybrida's mange komiteer, og går ut på å arrangere aktive og sosiale arrangementer for studentene.`,
    icon: React.createElement("img", { src: Hybrida, style: { width: "80%", height: "80%" }}),
    link: "https://hybrida.no/komite#innhold"
  },
  {
    title: "Datateknologi",
    date: "2025 - 2027",
    description: '<span class="mute">Etter ett år på Ingeniørvitenskap og IKT ble jeg sikker på at jeg ønsket å jobbe innen data. Derfor bestemte jeg meg for å</span> fullføre sivilingeniørgraden i Datateknologi.',
    icon: React.createElement("img", { src: ntnu, style: { width: "80%", height: "80%" }}),
    link: "https://www.ntnu.no/studier/mtdt"
  },
]};