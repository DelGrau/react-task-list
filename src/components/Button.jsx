function Button({ children, onClick }) {
  return (
    <button
      className="bg-blue-200 text-blue-800 rounded-md p-2 shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
