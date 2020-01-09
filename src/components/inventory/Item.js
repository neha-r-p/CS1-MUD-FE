import React from 'react'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  itemBox: {
    display: 'flex',
    width: '46px',
    height: '46px',
    backgroundColor: '#382727',
    margin: '3px',
    border: '1px solid #92734F'
  }
})

export default function Item(props) {
  const classes = useStyles()

  return (

    <div className={classes.itemBox}>{props.item.item_name}</div> 

  )
}
