import { Routes, Route } from 'react-router-dom'
import AutorList from './Views/AutorList'
import AutorNew from './Views/AutorNew'
import AutorEdit from './Views/AutorEdit'

function App() {

  return (
    <div className='p-4 flex flex-col '>
      <h1 className='text-2xl'>Favorite authors</h1>
      <Routes>
        <Route path='/' element={<AutorList />}></Route>
        <Route path='/new' element={<AutorNew />}></Route>
        <Route path='/:id/edit' element={<AutorEdit />} ></Route>
      </Routes>
    </div>
  )
}

export default App
