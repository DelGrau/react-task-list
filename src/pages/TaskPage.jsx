import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Background from "../components/Background";
import Title from "../components/Title";
import CardDisplay from "../components/CardDisplay";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <Background>
      <div className="w-[500px] space-y-4 ">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-800 p-2 absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <CardDisplay>
          <h2 className="text-xl text-blue-800 font-bold">{title}</h2>
          <p className="text-blue-800 font-medium">{description}</p>
        </CardDisplay>
      </div>
    </Background>
  );
}

export default TaskPage;
