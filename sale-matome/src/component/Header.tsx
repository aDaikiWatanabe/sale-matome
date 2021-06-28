import { Box, AppBar } from '@material-ui/core'

const Header: React.FC = () => {
  return (
    <header>
      <AppBar>
        <Box m={3} fontSize="2.5rem" fontWeight="bold" textAlign="center">
          セール情報まとめ
        </Box>
      </AppBar>
    </header>
  )
}

export default Header
