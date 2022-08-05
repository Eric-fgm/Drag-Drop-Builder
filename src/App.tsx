import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend'
import store from '@/store/store'
import Sidebar from '@/features/Sidebar/Sidebar'
import Presentation from '@/features/Presentation/Presentation'
import '@/assets/styles/main.scss'

export interface IAppProps {}

const App: React.FC<IAppProps> = () => (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <Provider store={store}>
        <>
          <Sidebar />
          <Presentation />
        </>
      </Provider>
    </DndProvider>
  )

export default App
