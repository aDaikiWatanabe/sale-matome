import './App.css'
import Header from './component/Header'
import Book from './component/Book'
import { Box, Grid } from '@material-ui/core'

function App() {
  return (
    <Box className="App">
      <Header />
      <Box className="Body" mt="8rem" mx="auto">
        <Book
          title="バカとテストと召喚獣"
          author="高橋"
          price={200}
          purchaseLink="http://example.com"
          tag={['SF', 'ホラー']}
        />
      </Box>
    </Box>
  )
}
export default App
