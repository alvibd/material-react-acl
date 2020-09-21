import React, { useEffect, useState } from 'react'

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    contentList: {
        margin: theme.spacing(0),
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        minWidth: 230,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}))

export default function Home() {
    const classes = useStyles();

    const initialState = {
        item: 0,
        data: [],
        pagination: [],
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        
    }, [state.data])

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography paragraph>
                        Welcome to Kolorob Dashboard
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid container spacing={2} className={classes.contentList}>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3} justify="space-evenly">
                            <Grid item xs={12} md={4}>
                                <ButtonBase className={classes.image}>
                                <img 
                                className={classes.img} 
                                alt="complex" 
                                src="data:image/jpeg;base64,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"
                                />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} md={8} container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3} justify="space-evenly">
                            <Grid item xs={12} md={4}>
                                <ButtonBase className={classes.image}>
                                <img 
                                className={classes.img} 
                                alt="complex" 
                                src="data:image/jpeg;base64,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"
                                />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} md={8} container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3} justify="space-evenly">
                            <Grid item xs={12} md={4}>
                                <ButtonBase className={classes.image}>
                                <img 
                                className={classes.img} 
                                alt="complex" 
                                src="data:image/jpeg;base64,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"
                                />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} md={8} container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}