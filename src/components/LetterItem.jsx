export default function LetterItem({ handleNavigate, id = 123 }) {
  return <li onClick={handleNavigate(id)}>Letter Item</li>;
}
