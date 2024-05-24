import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Empty = () => {
  return (
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
        <div className='card'>
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
              image="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1689180417/758664_FACK7_9768_001_084_0000_Light-medium-duffle-bag-with-web.jpg"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                Gucci duffle bag
              </Typography>
              <Typography className='type' paragraph>
                $960
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
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
              image="https://m.media-amazon.com/images/I/61Udy1KJfRL.jpg"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                RGB liquid CPU Cooler
              </Typography>
              <Typography className='type' paragraph>
                $1960
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
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
              image="https://www.ryans.com/storage/products/main/fantech-gp11-shooter-usb-wired-black-green-gaming-11611059571.webp"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                GP11 Shooter USB Gamepad
              </Typography>
              <Typography className='type' paragraph>
                $550
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
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
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuwvzk838Y2TF8_3sYJT_M8Jcl8lig9aP1Ul0YGyIRQ&s"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                Quilted Satin Jacket
              </Typography>
              <Typography className='type' paragraph>
                $750
              </Typography>
            </CardContent>
          </Card>
        </div>
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
      <div className='card'>
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
              image="https://olcha.uz/image/600x600/products/2022-11-16/noutbuk-asus-tuf-gaming-f17-fx707zc-hx035-i7-12700h-8gb512gb-rtx-3050-173-fhd-169137-0.jpeg"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                ASUS FHD Gaming Laptop
              </Typography>
              <Typography className='type' paragraph>
                $960
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
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
              image="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=8271001-847__1&recipeName=350"
              alt=""
            />
            <button className='card_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                IPS LCD Gaming Monitor
              </Typography>
              <Typography className='type' paragraph>
                $1160
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
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
              image="https://m.media-amazon.com/images/I/51lMWe-aUeL.jpg"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                HAVIT HV-G92 Gamepad
              </Typography>
              <Typography className='type' paragraph>
                $560
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='card'>
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
              image="https://img.myipadbox.com/sec/product_l/TBD0602123801A.jpg"
              alt=""
            />
            <button className='cart_btn'><span className='cart_icon'><AddShoppingCartIcon /></span>Add to Cart</button>
            <CardContent>
              <Typography paragraph>
                AK-900 Wired Keyboard
              </Typography>
              <Typography className='type' paragraph>
                $200
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Empty