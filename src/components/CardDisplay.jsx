function CardDisplay({ children }) {
  return (
    <div className="rounded-md space-y-4 p-6 bg-white shadow-lg flex flex-col">
      {children}
    </div>
  );
}

export default CardDisplay;
