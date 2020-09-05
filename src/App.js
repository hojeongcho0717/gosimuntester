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
                2019 누리과정 총론
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TestRow realTime={realtime} fileIndex={0} title={'성격'} color={'#0AC073'}/>
            <TableRow>
              <TableCell align="center" colSpan={3} style={{color: '#5F9EA0', fontSize: '18px'}}>
                구성 방향
              </TableCell>
            </TableRow>
            <TestRow realTime={realtime} fileIndex={1} title={'추구하는 인간상'} color={'#0AC073'}/>
            <TestRow realTime={realtime} fileIndex={2} title={'목적'} color={'#0AC073'} />
            <TestRow realTime={realtime} fileIndex={3} title={'목표'} color={'#0AC073'} />
            <TestRow realTime={realtime} fileIndex={4} title={'구성의 중점'} color={'#0AC073'} />
            <TableRow>
              <TableCell align="center" colSpan={3} style={{color: '#5F9EA0', fontSize: '18px'}}>
                운영
              </TableCell>
            </TableRow>
            <TestRow realTime={realtime} fileIndex={5} title={'편성·운영'} color={'#0AC073'}/>
            <TestRow realTime={realtime} fileIndex={6} title={'교수·학습'} color={'#0AC073'} />
            <TestRow realTime={realtime} fileIndex={7} title={'평가'} color={'#0AC073'} />
          </TableBody>
        </Table>
        <Table className={classes.table} style={{backgroundColor: 'rgba(250,250,210, 0.5)'}} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title} align="center" colSpan={3}>
                신체운동·건강
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TestRow realTime={realtime} fileIndex={8} title={'신체운동·건강'} color={'#0AC073'}/>
            
            <TestRow realTime={realtime} fileIndex={9} title={'신체활동 즐기기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={10} title={'건강하게 생활하기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={11} title={'안전하게 생활하기'} color={'#0AC073'} hide />
          </TableBody>
        </Table>
        <Table className={classes.table} style={{backgroundColor: 'rgba(255,127,80, 0.1)'}} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title} align="center" colSpan={3}>
                의사소통
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TestRow realTime={realtime} fileIndex={12} title={'의사소통'} color={'#0AC073'}/>
            <TestRow realTime={realtime} fileIndex={13} title={'듣기와 말하기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={14} title={'읽기와 쓰기에 관심 가지기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={15} title={'책과 이야기 즐기기'} color={'#0AC073'} hide />
          </TableBody>
        </Table>
        <Table className={classes.table} style={{backgroundColor: 'rgba(255,20,147, 0.05)'}} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title} align="center" colSpan={3}>
                사회관계
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TestRow realTime={realtime} fileIndex={16} title={'사회관계'} color={'#0AC073'}/>
            <TestRow realTime={realtime} fileIndex={17} title={'나를 알고 존중하기'} color={'#0AC073'}hide />
            <TestRow realTime={realtime} fileIndex={18} title={'더불어 생활하기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={19} title={'사회에 관심 가지기'} color={'#0AC073'} hide />
          </TableBody>
        </Table>
        <Table className={classes.table} style={{backgroundColor: 'rgba(123,104,238, 0.1)'}} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title} align="center" colSpan={3}>
                예술경험
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TestRow realTime={realtime} fileIndex={20} title={'예술경험'} color={'#0AC073'}/>
            <TestRow realTime={realtime} fileIndex={21} title={'아름다움 찾아보기'} color={'#0AC073'}hide />
            <TestRow realTime={realtime} fileIndex={22} title={'창의적으로 표현하기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={23} title={'예술 감상하기'} color={'#0AC073'} hide />
          </TableBody>
        </Table>
        <Table className={classes.table} style={{backgroundColor: 'rgba(4,224,167, 0.1)'}} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title} align="center" colSpan={3}>
               자연탐구
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TestRow realTime={realtime} fileIndex={24} title={'자연탐구'} color={'#0AC073'}/>
            <TestRow realTime={realtime} fileIndex={25} title={'탐구과정 즐기기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={26} title={'생활 속에서 탐구하기'} color={'#0AC073'} hide />
            <TestRow realTime={realtime} fileIndex={27} title={'자연과 더불어 살기'} color={'#0AC073'} hide />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
