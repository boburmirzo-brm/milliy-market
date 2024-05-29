import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { PRODUCTS } from '../../static';

const Empty = () => {
  return (
    <>
      {/* <div className='empty'>
        <div className='container'>
          <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127818.jpg" alt="" />
        </div>
      </div> */}
      <div className='wishlist'>
        <div className='wishlist_txt'>
          <div className='strong_txt'>
            <strong>Wishlist (4)</strong>
          </div>
          <div className='button_wishlist'>
            <button>Move All To Bag</button>
          </div>
        </div>
        <div className='cards'>
          {
            PRODUCTS.map(product =>
              <div className='card' key={"unknown"}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <DeleteOutlineIcon />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={product.urls[0]}
                    alt=""
                  />
                  <button className='card_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
                  <CardContent>
                    <Typography paragraph>
                      {product.title}
                    </Typography>
                    <Typography className='type' paragraph>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          }
        </div>
        <div className='wishlist_txt'>
          <div className='strong_txt'>
            <strong>Just For You</strong>
          </div>
          <div className='button_wishlist'>
            <button>See All</button>
          </div>
        </div>
        <div className='cards_2'>
          {
            PRODUCTS.map(product =>
              <div className='card' key={"unknown"}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <RemoveRedEyeIcon />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={product.urls[0]}
                    alt=""
                  />
                  <button className='card_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
                  <CardContent>
                    <Typography paragraph>
                      {product.title}
                    </Typography>
                    <Typography className='type' paragraph>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Empty