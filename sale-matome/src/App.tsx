import './App.css'
import Header from './component/Header'
import BookList from './component/BookList'
import { Box } from '@material-ui/core'

const App: React.FC = () => {
  return (
    <Box className="App">
      <Header />
      <Box className="Body" mt="8rem" mx="auto">
        <BookList></BookList>
      </Box>
    </Box>
  )
}
export default App
