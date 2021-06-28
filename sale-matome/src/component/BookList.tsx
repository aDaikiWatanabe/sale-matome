import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksByVisibilityFilter } from '../selectors/book'
import Book from './Book'
import { setBooks } from '../actions/book'
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    item: {
      height: 'auto',
      width: '50%',
      // marginBottom: theme.spacing(2),
    },
    control: {
      padding: theme.spacing(2),
    },
  })
)

const BookList: React.FC = () => {
  const filteredBooks = useSelector(getBooksByVisibilityFilter)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/book`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(response => dispatch(setBooks(response.data.map((x: any) => x.data))))
      .catch(error => console.log(error))
  }, [])

  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      {filteredBooks.map(book => (
        // TODO: keyの追加。データに入ってるユニークな値を使いたい。今はダミーからのレスポンスにそれが入ってない。
        <Grid xs={12} sm={6} md={4} lg={3} item key={`book-list-item-${book.id}`} className={classes.item}>
          <Book book={book} />
        </Grid>
      ))}
    </Grid>
  )
}

export default BookList
