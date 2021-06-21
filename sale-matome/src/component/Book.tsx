import { Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core'

type Props = {
  title: string
  author: string
  price: number
  purchaseLink: string
  tag: string[]
}

const Book: React.FC<Props> = props => {
  const { title, author, price, purchaseLink, tag } = props

  return (
    <Box mx="auto" bgcolor="background.paper">
      <Card>
        <CardActionArea href={purchaseLink}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              作者:{author}
              <br />
              価格:{price}
              <br />
              {/* TODO: 各タグにそのタグのフィルタした結果の表示をリンクさせる。 */}
              ジャンル:{tag.join(', ')}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={purchaseLink}>
            作品詳細
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
export default Book
