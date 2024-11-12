import TasksContainer from "./containers/TasksContainer"
import TopBar from "./components/TopBar"
function App() {


  return (
    <>
      <div className="min-h-screen bg-gray-400 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <TopBar/>
          <TasksContainer/>
      </div>


    </>
  )
}

export default App
