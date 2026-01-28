import { Link } from "react-router-dom";

export default function LinkItem({ className, children, to }) {
  return (
    <>
      <Link to={to} className={className}>
        {children}
      </Link>
    </>
  );
}
