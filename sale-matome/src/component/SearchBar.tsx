import { Box, InputBase, AppBar, Toolbar, FormControl, MenuItem, Typography, Select } from '@material-ui/core'
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchFilter, setSiteFilter, setSortValue, setSortOrder } from '../actions/visibilityFilter'
import { siteFilterType, sortOrderType, sortValueType } from '../models/VisibilityFilter'
import { getVisibilityFilter } from '../selectors/visibilityFilter'

// TODO: styleのファイルを別にする
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
    select: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(3),
    },
    selectTitle: {},
    selectLabel: {
      color: 'inherit',
      width: '100%',
      marginLeft: theme.spacing(1),
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    sort: {},
    sortValue: {},
    sortLabel: {},
  })
)

const SearchBar: React.FC = () => {
  const selectedVisibilityFilter = useSelector(getVisibilityFilter)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSearchInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSearchFilter(event.target.value as string))
  }
  const handleFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSiteFilter(event.target.value as siteFilterType))
  }
  const handleSortValueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSortValue(event.target.value as sortValueType))
  }
  const handleSortOrderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSortOrder(event.target.value as sortOrderType))
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <Box className={classes.select}>
          <Typography className={classes.selectTitle}>表示サイト:</Typography>
          <FormControl component="fieldset">
            <Select
              disableUnderline
              className={classes.selectLabel}
              id="site-filter-select"
              value={selectedVisibilityFilter.siteFilter}
              onChange={handleFilterChange}
            >
              <MenuItem value="all">全て</MenuItem>
              <MenuItem value="kindle">Kindle</MenuItem>
              <MenuItem value="dmm">DMMブックス</MenuItem>
              <MenuItem value="rakuten">楽天Kobo</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.select}>
          <Typography className={classes.selectTitle}>ソート:</Typography>
          <FormControl component="fieldset">
            <Select
              disableUnderline
              className={classes.selectLabel}
              id="sort-value-select"
              value={selectedVisibilityFilter.sortValue}
              onChange={handleSortValueChange}
            >
              <MenuItem value="default">デフォルト</MenuItem>
              <MenuItem value="price">価格</MenuItem>
              <MenuItem value="title">タイトル</MenuItem>
              <MenuItem value="author">作者</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset">
            <Select
              disableUnderline
              className={classes.selectLabel}
              id="sort-value-select"
              value={selectedVisibilityFilter.sortOrder}
              onChange={handleSortOrderChange}
            >
              <MenuItem value={-1}>降順</MenuItem>
              <MenuItem value={1}>昇順</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default SearchBar
