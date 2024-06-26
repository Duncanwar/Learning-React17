import { FC, useEffect, memo } from "react";

interface Props {
  id: number;
  task: string;
  handleDelete: any;
}

const Task: FC<Props> = ({ id, task, handleDelete }) => {
  useEffect(() => {});
  return (
    <li>
      {task} <button onClick={() => handleDelete(id)}>x</button>
    </li>
  );
};

export default memo(Task);
