import TaskCard from "../components/TaskCard";

export default function TasksContainer() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
              <TaskCard/> 
            </div>
        </>
    );
}