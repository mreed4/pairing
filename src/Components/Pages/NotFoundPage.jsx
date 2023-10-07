import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-page">
      <h2>404 Not Found</h2>
    </div>
  );
}
