import React from 'react';
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow";

class Tester extends React.Component {
    render() {
        const tester = this.props.tester;
        return (
            <TableRow>
                <TableCell>{tester.firstName}</TableCell>
                <TableCell>{tester.lastName}</TableCell>
                <TableCell>{tester.country}</TableCell>
                <TableCell>{(tester.bugs) ? tester.bugs.map(bug => bug.title).join(', ') : ''}</TableCell>
            </TableRow>
        );
    }
}

export default Tester;