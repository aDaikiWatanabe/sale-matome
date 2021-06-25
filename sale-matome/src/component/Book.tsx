import { Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript'

export type BookType = {
  title: string
  author: string
  price: number
  purchaseLink: string
  tag: string[]
}

type Props = {
  book: BookType
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      marginBottom: theme.spacing(2),
    },
  })
)

const Book: React.FC<Props> = props => {
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
              作者:{book.author}
              <br />
              価格:{book.price}
              <br />
              {/* TODO: 各タグにそのタグのフィルタした結果の表示をリンクさせる。 */}
              ジャンル:{book.tag.join(', ')}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={book.purchaseLink}>
            作品詳細
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
export default Book
