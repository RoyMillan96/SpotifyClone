import { useState } from "react";
import { useHistory } from "react-router-dom";
import { WEB_APP } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fondo from '../../assets/img/images.jpg'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme=>({
    root : { 
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    },
    container: {
        opacity: '0.8',
        height: '60%',
        marginTop: theme.spacing(15),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%',
        }
    },
    div: { 
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main
    },
    form: {
        with: '100%',
        marginTop: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main
    }
}));

const LoginForm = () => {
    const classes = useStyles()
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const auth = useAuth();
    let history = useHistory();
    
    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline/>
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component='h1' variant='h5'>LOGIN</Typography>
                    <form className={classes.form}
                        onSubmit={(event) => {
                            event.preventDefault();
                            auth.signin({
                                email: emailValue,
                                password: passwordValue,
                                callback: () => history.push(WEB_APP),
                            });
                        }}
                    >
                        <TextField 
                            fullWidth={true}
                            type="email"
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='UserName'
                            name='username'
                            value={emailValue}
                            onChange={(event) => setEmailValue(event.target.value)}
                        />
                        <TextField 
                            fullWidth={true}
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Password'
                            name='password'
                            value={passwordValue}
                            onChange={(event) => setPasswordValue(event.target.value)}
                        />
                        <Button
                            fullWidth={true}
                            variant='contained'
                            className={classes.button}
                            type="submit"
                        >
                            Login with Spotify
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default LoginForm;