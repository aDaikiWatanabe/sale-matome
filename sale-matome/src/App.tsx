import './App.css'
import Header from './component/Header'
import BookList from './component/BookList'
import SearchBar from './component/SearchBar'
import FilterBox from './component/FilterBox'
import { Box, Paper } from '@material-ui/core'
import BackToTopButton from './component/BackToTopButton'

//TODO: styleで指定する
const App: React.FC = () => {
  return (
    <Box className="App">
      <Header />
      <div id="back-to-top-anchor" />
      <Box className="Body" mt="6rem" mx="auto" p="2rem">
        <FilterBox />
        {/* <SearchBar /> */}
        <Paper style={{ padding: '1rem' }}>
          <BookList />
        </Paper>
      </Box>
      <BackToTopButton />
    </Box>
  )
}
export default App
