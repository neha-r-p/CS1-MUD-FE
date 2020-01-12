import React from 'react'
import spiders from '../../assets/spiders.png'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },
    img: {
        width: '60%'
    }
})

function Home() {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <img src={spiders} className={classes.img}/>
        </div>
    )
}

export default Home