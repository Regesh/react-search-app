import React from 'react';
import './Testers.css';
import Tester from "./tester/Tester";
import {useSelector, useDispatch} from "react-redux";
import {orderTesters} from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function Testers() {
    const classes = useStyles();
    const isLoading = useSelector(state => state.loading);
    const testers = useSelector(state => state.testers);
    const requestFailed = useSelector(state => state.failed);
    const disaptch = useDispatch();
    const [sortedField, setSortedField] = React.useState('firstName');
    const [sortedOrder, setSortedOrder] = React.useState('asc');
    const sortField = (field) => {
        setSortedField(field);
        const order = (sortedField === field) ? sortedOrder === 'asc' ? 'desc' : 'asc' : 'asc';
        setSortedOrder(order);
        disaptch(orderTesters({field: field, order: order}));
    };
    return (
        <>
            {(isLoading ?
                <div className={classes.root + ' loader'}>
                    <CircularProgress />
                </div>
                : '')}
            {(requestFailed ? <div className='error-message'>Temporary error occurred, please try again later</div> : '' )}


            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <div className='col-header-container'>
                                    {(sortedField === 'firstName') ?
                                        (sortedOrder === 'asc') ?
                                            <ArrowUpwardIcon></ArrowUpwardIcon>
                                            :
                                            <ArrowDownwardIcon></ArrowDownwardIcon>
                                        : <ArrowUpwardIcon className='inactive'></ArrowUpwardIcon>
                                    }
                                    <span>First Name</span>
                                </div>
                            </TableCell>
                            <TableCell className={'sortable'} onClick={() => sortField('lastName')}>
                                <div className='col-header-container'>
                                    {(sortedField === 'lastName') ?
                                        (sortedOrder === 'asc') ?
                                            <ArrowUpwardIcon></ArrowUpwardIcon>
                                            :
                                            <ArrowDownwardIcon></ArrowDownwardIcon>
                                        : <ArrowUpwardIcon className='inactive'></ArrowUpwardIcon>
                                    }
                                    <span>Last Name</span>
                                </div>
                            </TableCell>
                            <TableCell className={'sortable'} onClick={() => sortField('country')}>
                                <div className='col-header-container'>
                                    {(sortedField === 'country') ?
                                        (sortedOrder === 'asc') ?
                                            <ArrowUpwardIcon></ArrowUpwardIcon>
                                            :
                                            <ArrowDownwardIcon></ArrowDownwardIcon>
                                        : <ArrowUpwardIcon className='inactive'></ArrowUpwardIcon>
                                    }
                                    <span>Country</span>
                                </div>
                            </TableCell>
                            <TableCell>Bugs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {testers.map((row, index) => (
                            <Tester key={index} tester={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/*<table>*/}
                {/*<thead>*/}
                {/*<tr>*/}
                    {/*<th>*/}
                        {/*<button className={(sortedField === 'firstName' ? 'sorted' : '')} type="button">*/}
                            {/*First name*/}
                        {/*</button>*/}
                    {/*</th>*/}
                    {/*<th>*/}
                        {/*<button className={(sortedField === 'lastName' ? 'sorted' : '')} type="button" onClick={() => sortField('lastName')}>*/}
                            {/*Last Name*/}
                        {/*</button>*/}
                    {/*</th>*/}
                    {/*<th>*/}
                        {/*<button className={(sortedField === 'country' ? 'sorted' : '')} type="button" onClick={() => sortField('country')}>*/}
                            {/*Country*/}
                        {/*</button>*/}
                    {/*</th>*/}
                    {/*<th>*/}
                        {/*<button>*/}
                            {/*Bugs*/}
                        {/*</button>*/}
                    {/*</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}
                {/*{testers.map((tester, index) => <Tester key={index} tester={tester}/>)}*/}
                {/*</tbody>*/}
            {/*</table>*/}
        </>
    );
}

export default Testers;