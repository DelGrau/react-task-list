import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CardDisplay from "./CardDisplay";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <CardDisplay>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-blue-200 text-left py-2 px-4 text-blue-800 font-medium rounded-md w-full shadow-md ${
                task.completed && "line-through"
              }`}
            >
              {task.title}
            </button>
            <Button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-blue-200 text-blue-800 rounded-md p-2 shadow-md"
            >
              <ChevronRightIcon />
            </Button>
            <Button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-blue-200 text-blue-800 rounded-md p-2 shadow-md"
            >
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </CardDisplay>
  );
}

export default Tasks;
