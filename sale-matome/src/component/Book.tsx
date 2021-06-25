import { Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Book } from '../models/Book'
// export type BookType = {
//   title: string
//   authors: string[]
//   price: number
//   purchaseLink: string
//   tag: string[]
// }

type Props = {
  // book: BookType
  book: Book
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {},
  })
)

const BookCard: React.FC<Props> = props => {
  const { book } = props
  const classes = useStyles()

  return (
    <Box mx="auto" bgcolor="background.paper">
      <Card className={classes.cardRoot}>
        <CardActionArea href={book.purchaseLink}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              作者:{`${book.authors[0]}${book.authors.length > 1 ? ' 他' : ''}`}
              <br />
              価格:{book.price}円
              <br />
              {/* TODO: 各タグにそのタグのフィルタした結果の表示をリンクさせる。 */}
              ジャンル:{book.tag.join(', ')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}
export default BookCard
