import './App.css'
import Header from './component/Header'
import BookList from './component/BookList'
import SearchBar from './component/SearchBar'
import { Box } from '@material-ui/core'

const App: React.FC = () => {
  return (
    <Box className="App">
      <Header />
      <Box className="Body" mt="8rem" mx="auto">
        <SearchBar />
        <BookList />
      </Box>
    </Box>
  )
}
export default App
