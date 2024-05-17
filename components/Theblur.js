import styled, { keyframes } from "styled-components";

// Définition de l'animation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component pour le gradient
const Gradient = styled.div`
  --size: 750px; // Taille par défaut
  --speed: 50s; // Durée de l'animation
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8); // Fonction d'accélération

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(222, 84, 60, 100%), hsl(164, 79, 71));
  animation: ${rotate} var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  @media (min-width: 720px) {
    --size: 500px; // Taille ajustée pour les écrans plus larges
  }
`;

// Composant React
const Theblur = () => (
  <div
    style={{
      backgroundColor: "#071c39",
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <Gradient />
  </div>
);

export default Theblur;
