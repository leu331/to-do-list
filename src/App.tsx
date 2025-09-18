import './global.css'
import './app.css'
import { AppRoutes } from './routes/AppRoutes'
import { BrowserRouter } from 'react-router'
import TasksProvider from './Context/tasksContext'

function App() {

  return (
    <>
        <BrowserRouter>
          <TasksProvider>
            <AppRoutes/>
          </TasksProvider>      
        </BrowserRouter> 
    </>
  )
}

export default App