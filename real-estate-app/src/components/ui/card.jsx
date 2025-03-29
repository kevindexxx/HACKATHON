export function Card({ children }) {
    return <div className="border p-4 rounded-lg bg-gray-800">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  