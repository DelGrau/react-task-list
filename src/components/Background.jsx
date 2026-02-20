function Background({ children }) {
  return (
    <div className="w-screen h-screen bg-slate-50 flex justify-center p-6">
      {children}
      <p className="text-slate-400 opacity-60 font-medium absolute bottom-1 right-2 text-xs">
        <a href="https://www.github.com/DelGrau">
          Criado com React (e carinho) por DelGrau
        </a>
      </p>
    </div>
  );
}

export default Background;
