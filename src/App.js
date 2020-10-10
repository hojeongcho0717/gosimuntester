import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { TestRow } from './Row/TestRow';
import { Switch, AppBar } from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		minWidth: 700,
		marginTop: '40px'
	},
	subtitle: {
		color: '#0AC073',
		fontSize: '28px'
	},
	title: {
		fontSize: '36px'
	}
});
function App() {
	const classes = useStyles();
	const [realtime, setRealtime] = useState(true);

	const handleChange = useCallback((ev) => {
		setRealtime(ev.target.checked);
	}, []);

	return (
		<>
			<AppBar>
				<div style={{textAlign:'right'}}>
					실시간 채점
					<Switch onChange={handleChange} checked={realtime} />
				</div>
			</AppBar>
			<TableContainer component={Paper}>
				<Table className={classes.table} style={{backgroundColor: 'rgba(175,238,238, 0.2)'}} aria-label="spanning table">
					<TableBody>
						<TestRow realTime={realtime} fileIndex={15} title={'성'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={0} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={1} title={'내용'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={2} title={'방법'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(250,250,210, 0.5)'}} aria-label="spanning table">
					<TableBody>
						<TestRow realTime={realtime} fileIndex={16} title={'실'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={3} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={4} title={'내용'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={5} title={'방법'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(255,127,80, 0.1)'}} aria-label="spanning table">
					<TableBody>
						<TestRow realTime={realtime} fileIndex={17} title={'감'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={6} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={7} title={'내용'} color={'#0AC073'} />
						<TestRow realTime={realtime} fileIndex={8} title={'방법'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(255,20,147, 0.05)'}} aria-label="spanning table">
					<TableBody>
						<TestRow realTime={realtime} fileIndex={18} title={'재'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={9} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={10} title={'내용'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={11} title={'방법'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(123,104,238, 0.1)'}} aria-label="spanning table">
					<TableBody>
						<TestRow realTime={realtime} fileIndex={19} title={'교'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={12} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={13} title={'내용'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={14} title={'방법'} color={'#0AC073'}/>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default App;
