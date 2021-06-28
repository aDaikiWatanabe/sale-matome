import { Box, InputBase, AppBar, Toolbar } from '@material-ui/core'
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchFilter } from '../actions/visibilityFilter'
import { getVisibilityFilter } from '../selectors/visibilityFilter'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })
)

const Header: React.FC = () => {
  const selectedVisibilityFilter = useSelector(getVisibilityFilter)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSearchInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSearchFilter(event.target.value as string))
  }
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Box m={3} fontSize="2.5rem" fontWeight="bold" textAlign="center">
            セール情報まとめ
          </Box>
          <div style={{ flexGrow: 1 }}></div>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="絞り込み ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={selectedVisibilityFilter.searchFilter}
              onChange={handleSearchInputChange}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
