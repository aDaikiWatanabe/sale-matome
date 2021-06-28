import { Box, Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Book } from '../models/Book'

type Props = {
  book: Book
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {},
    cardActionArea: {
      padding: theme.spacing(2),
    },
    bookTitle: {
      height: '5rem',
    },
    bookAuthor: {},
    bookTag: {
      height: '3rem',
    },
    bookPrice: {
      backgroundColor: theme.palette.primary.light,
      width: '6em',
      color: theme.palette.primary.contrastText,
      fontSize: '1.3rem',
    },
  })
)

const BookCard: React.FC<Props> = props => {
  const { book } = props
  const classes = useStyles()
  const author = book.authors[0]
  const threshold = {
    title: 20,
    author: 20,
    tag: 4,
  }

  return (
    <Box mx="auto" bgcolor="background.paper">
      <Card className={classes.cardRoot}>
        <CardActionArea href={book.purchaseLink}>
          <CardContent>
            <Box className={classes.bookTitle}>
              <Typography gutterBottom variant="h5" component="h2">
                {book.title.length > threshold.title ? book.title.slice(0, threshold.title) + '...' : book.title}
              </Typography>
            </Box>
            <Box className={classes.bookAuthor}>
              <Typography variant="h6" component="h3">
                作者:
                {`${author.length > threshold.author ? author.slice(0, threshold.author) + '...' : author}${
                  book.authors.length > 1 ? ' 他' : ''
                }`}
              </Typography>
            </Box>
            <Box className={classes.bookTag}>
              {/* TODO: 各タグにそのタグのフィルタした結果の表示をリンクさせる。 */}
              タグ:
              {book.tag.length > threshold.tag
                ? book.tag.slice(0, threshold.tag).join(', ') + ' 他'
                : book.tag.join(', ')}
            </Box>
            <div style={{ flexGrow: 1 }}></div>
            <Box display="flex" flexDirection="row-reverse">
              <Box className={classes.bookPrice}>{book.price}円</Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}
export default BookCard
