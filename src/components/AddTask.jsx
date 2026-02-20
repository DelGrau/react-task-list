import { useState } from "react";
import CardDisplay from "./CardDisplay";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <CardDisplay>
      <Input
        type="text"
        placeholder="Digite a sua tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da sua tarefa"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <button
        onClick={() => {
          if (!title || title.trim() == "") {
            alert("O título é obrigatório");
            return;
          }

          if (!description || description.trim() == "") {
            alert("A descrição é obrigatória");
            return;
          }

          {
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="bg-blue-500 text-white font-medium rounded-md p-2 shadow-lg w-full"
      >
        Adicionar
      </button>
    </CardDisplay>
  );
}

export default AddTask;
