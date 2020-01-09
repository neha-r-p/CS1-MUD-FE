import React from 'react'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
import apple from '../../assets/apple.png'
import orange from '../../assets/orange.png'
import banana from '../../assets/banana.png'

const useStyles = makeStyles({
  itemBox: {
    display: 'flex',
    width: '46px',
    height: '46px',
    backgroundColor: '#ffe1b2',
    margin: '3px',
    border: '1px solid #92734F'
  }
})

export default function Item({ item }) {
  const classes = useStyles()
  const { item_name } = item
  function chooseImg() {
    switch (item_name) {
      case 'apple':
        return apple
      case 'banana':
        return banana
      case 'orange':
        return orange
    }
  }
  return (
    <div className={classes.itemBox}>
      <img
        src={chooseImg()}
        alt={item_name}
        style={{ width: '90%', height: '90%', margin: '1px auto' }}
      />
    </div>
  )
}
