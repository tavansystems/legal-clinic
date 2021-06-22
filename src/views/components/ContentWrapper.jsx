import { useState, useEffect, useContext } from "react"
import { ReactTinyLink } from "react-tiny-link"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Grow from "@material-ui/core/Grow"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import PublicIcon from "@material-ui/icons/Public"

import SideBarLinks from "./SideBarLinks"
import ContentCard from "./ContentCard"
import LangContext from "../../utils/LangContext"

import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: "none",
    },
    sidebar: {
        width: "100%",
        padding: theme.spacing(1),
    },
    column: {
        padding: theme.spacing(1),
    },
    paper: {
        margin: theme.spacing(0, 0, 5, 0),
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
    },
    sourceTitle: {
        padding: theme.spacing(5),
        color: "black",
    },
}))

function ContentWrapper({ sideBarList, main, sources }) {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    const { literals } = useContext(LangContext)

    useEffect(() => {
        setChecked(true)
    }, [setChecked])

    if (!main) {
        return <></>
    }

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container>
                <Grid item md={9} className={classes.column}>
                    <ContentCard content={main} />
                    <Grow in={checked} timeout={1000}>
                        <Paper elevation={1} className={classes.paper}>
                            <Typography
                                variant="h5"
                                color="textSecondary"
                                className={classes.sourceTitle}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                <PublicIcon style={{ marginRight: "10px" }} />

                                <span>{literals.sources}</span>
                            </Typography>
                            {sources &&
                                sources.map((source) => (
                                    <ReactTinyLink
                                        key={source}
                                        cardSize="small"
                                        showGraphic={true}
                                        maxLine={3}
                                        minLine={1}
                                        width={1}
                                        url={source}
                                        proxyUrl="https://cors.bridged.cc"
                                    />
                                ))}
                        </Paper>
                    </Grow>
                </Grid>
                <Grid item md={3} className={classes.sidebar}>
                    <SideBarLinks links={sideBarList} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContentWrapper
