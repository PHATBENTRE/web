import Admonition from "../../../Admonition";

export default function NoteLowercase({ name = "function" }) {
  return (
    <Admonition type="warning">
      <p>Esta {name} inicia com letra minúscula.</p>
    </Admonition>
  );
}
