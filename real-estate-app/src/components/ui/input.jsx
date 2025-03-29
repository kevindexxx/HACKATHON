export function Input({ className, ...props }) {
    return (
      <input
        className={`px-3 py-2 border rounded bg-gray-700 text-white ${className}`}
        {...props}
      />
    );
  }
  