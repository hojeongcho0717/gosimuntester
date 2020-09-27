import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
								생활안전교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={0} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={1} title={'내용'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(250,250,210, 0.5)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
								교통안전교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={2} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={3} title={'내용'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(255,127,80, 0.1)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
								폭력예방 및 신변보호교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={4} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={5} title={'내용'} color={'#0AC073'} />
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(255,20,147, 0.05)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
								약물 및 사이버 중독 예방 교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={6} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={7} title={'내용'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(123,104,238, 0.1)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
								재난안전교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={8} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={9} title={'내용'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(4,224,167, 0.1)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
								직업안전교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={10} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={11} title={'내용'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(250,250,210, 0.5)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
							 응급처치교육
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={12} title={'주기'} color={'#0AC073'}/>
						<TestRow realTime={realtime} fileIndex={13} title={'내용'} color={'#0AC073'}/>
					</TableBody>
				</Table>
				<Table className={classes.table} style={{backgroundColor: 'rgba(175,238,238, 0.2)'}} aria-label="spanning table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.title} align="center" colSpan={3}>
							 교육방법
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TestRow realTime={realtime} fileIndex={14} title={'방법'} color={'#0AC073'}/>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default App;
