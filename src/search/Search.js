import React from 'react';
import './Search.css';
import {fetchTesters, fetchTestersSuccess, fetchTestersFailure} from '../actions';
import {useDispatch} from "react-redux";
import axios  from 'axios';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card/Card";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Search() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const API_URL = 'https://test-api.techsee.me/api/ex/';
    const dispatch = useDispatch();
    const [testerName, setTesterName] = React.useState('');
    const [validName, setValidName] = React.useState(false);

    const onSearchChange = (e) => {
        const currentName = e.target.value;
        setTesterName(currentName);
        setValidName(currentName.length >=2 && currentName.length <= 12);
    };
    const loadTesters = () => {
        dispatch(fetchTesters());
        axios.get(`https://cors-anywhere.herokuapp.com/${API_URL}${testerName}`)
            .then(res => {
            if (res && res.statusText === 'OK') {
                dispatch(fetchTestersSuccess(res.data));
            }
        }).catch(error => {
            dispatch(fetchTestersFailure())
        });
    }
    return (
        <div className='search-container'>
            <Card className={classes.root}>
                <CardContent>
                        <div className='input-container'>
                            Tester Name:
                            {(!validName) ?
                                <TextField
                                    error
                                    id="filled-error"
                                    placeholder='Enter a tester name'
                                    variant="filled"
                                    onChange={onSearchChange}
                                /> :
                                <TextField
                                    onChange={onSearchChange}
                                    placeholder='Enter a tester name'
                                    variant="filled"
                                />
                            }
                        </div>
                </CardContent>
                <CardActions>
                    <Button disabled={!validName} onClick={() => loadTesters()} variant="contained" color="primary">Fetch</Button>
                </CardActions>
            </Card>
        </div>
        // <div className='search-container'>
        //     <div className='search-input'>
        //         <label>Tester Name: </label>
        //         <input className={(!validName) ? 'invalid' : ''} type='text' placeholder='Enter the tester name' onChange={onSearchChange} />
        //     </div>
        //     <button disabled={!validName} onClick={() => loadTesters()}>Fetch</button>
        // </div>
    );
}

export default Search;