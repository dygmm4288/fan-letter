import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <Link to='/detail?id=asdf'> to detail page</Link>
    </div>
  );
}
