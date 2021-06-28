import { Checkbox } from '@material-ui/core'
import { Box, InputBase, FormControl, FormControlLabel, MenuItem, Paper, Typography, Select } from '@material-ui/core'
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSearchFilter,
  setSiteFilter,
  setSortValue,
  setSortOrder,
  addTagFilter,
  removeTagFilter,
  setAuthorFilter,
} from '../actions/visibilityFilter'
import { siteFilterType, sortOrderType, sortValueType } from '../models/VisibilityFilter'
import { getBooks } from '../selectors/book'
import { getVisibilityFilter } from '../selectors/visibilityFilter'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
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
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
    },
    sort: {},
    sortValue: {},
    sortLabel: {},
  })
)

const FilterBox: React.FC = () => {
  const [tags, setTags] = useState(new Set<string>())
  const selectedVisibilityFilter = useSelector(getVisibilityFilter)
  const allBooks = useSelector(getBooks)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    const newTags = new Set<string>()
    allBooks.map(book => {
      book.tag.map(tag => {
        newTags.add(tag)
      })
    })
    setTags(newTags)
  }, [allBooks])

  const handleSearchInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSearchFilter(event.target.value as string))
  }
  const handleAuthorSearchInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setAuthorFilter(event.target.value as string))
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
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(addTagFilter(event.target.name))
    } else {
      dispatch(removeTagFilter(event.target.name))
    }
  }

  return (
    <Paper>
      <Typography variant="h5">絞り込み</Typography>
      タイトル：
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
      作者名：
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
          value={selectedVisibilityFilter.searchAuthorFilter}
          onChange={handleAuthorSearchInputChange}
        />
      </Box>
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
        <Box>
          タグ：
          {Array.from(tags.values()).map(tag => {
            return (
              <FormControlLabel
                control={<Checkbox name={tag} onChange={handleCheckboxChange} />}
                label={tag}
                key={tag}
              />
            )
          })}
        </Box>
      </Box>
    </Paper>
  )
}

export default FilterBox
