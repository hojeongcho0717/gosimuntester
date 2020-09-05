import React, { useState, useCallback, useEffect, useRef} from 'react';
import { TableRow, TableCell, Button, TextField, Typography, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const files = new Array(28);

for (let i = 0; i < files.length; i++) {
	files[i] = (require(`../assets/${i+1}.txt`));
}

function useDebounce(value, delay) {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler);
			};
		},
		[value, delay] // Only re-call effect if value or delay changes
	);

	return debouncedValue;
}

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const useStyles = makeStyles({
		table: {
			minWidth: 700,
		},
		subtitle: {
			color: '#0AC073',
			fontSize: '28px'
		},
		pass: {
			color: 'green',
			marginLeft: '40px'
		},
		fail: {
			color: 'red',
			marginLeft: '40px'
		}
	});
 

export const TestRow = ({title, color, realTime, fileIndex, ...props}) => {
		const classes = useStyles();
		const [notValid, setNotValid] = useState(false);
		const [textValue, setTextValue] = useState('');
		const [paper, setPaper] = useState('');
		const [original, setOriginal] = useState('');
		const inputRef = useRef();
		const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
		const debounceSet = useDebounce(textValue, 500);
		const [marked, setMarked] = useState('not_yet');
		const preRealTime = usePrevious(realTime);
		const checkValidation = useCallback(() => {
			const result = textValue.replace(/(\n|\r\n)/g, '**');
			if (paper.indexOf(result) === -1 && textValue) {
				setNotValid(true);
			} else {
				setNotValid(false);
			}
		}, [paper, textValue])

		useEffect(() => {
			if (preRealTime && !realTime) {
				setMarked('not_yet');
				setNotValid(false);
			} else if (!preRealTime && realTime){
				checkValidation();
			}
		}, [checkValidation, preRealTime, realTime]);

		useEffect(() => {
			if (debounceSet) {
				checkValidation();
			}
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [debounceSet])

			
		useEffect(() => {
			var rawFile = new XMLHttpRequest();
			rawFile.open("GET", files[fileIndex], false);
			rawFile.onreadystatechange = () => {
				if (rawFile.readyState === 4) {
					if (rawFile.status === 200 || rawFile.status === 0) {
						const allText = rawFile.responseText;
						setOriginal(allText.replace(/(\n|\r\n)/g, '<br>'));
						setPaper(allText.replace(/(\n|\r\n)/g, '**'));
					}
				}
			};
			rawFile.send(null);
		}, [fileIndex]);

		const handleChange = useCallback((ev) => {
			if (realTime) {
				setTextValue(ev.target.value);
				if (ev.target.value === '') {
					setNotValid(false);
				}
			} else {
				setMarked('not_yet');
			}
		}, [realTime]);

		const markHandler = useCallback(() => {
			if (!realTime) {
				const wholeText = inputRef.current.children[1].children[0].value.replace(/(\n|\r\n)/g, '**');
				if (wholeText !== paper) {
					setMarked('fail');
				} else {
					setMarked('pass');
				}
			}
		}, [paper, realTime]);

		const getMarkedText = useCallback(() => {
			if (marked === 'not_yet') {
				return '';
			} else if (marked === 'pass') {
				return '정답';
			} else {
				return '오답';
			}
		}, [marked]);
		
		const showAnswer = useCallback((ev) => {
			if (showCorrectAnswer === false) {
				setShowCorrectAnswer(true);
			} else {
				setShowCorrectAnswer(false);
			}
		}, [showCorrectAnswer]);

		const closeDialog = useCallback(() => {
			setShowCorrectAnswer(false);
		}, []);

		return (
			<>
				<TableRow>
					<TableCell align="left" style={{color: color, fontSize: '24px', width: '400px'}} size={'small'}>{title}</TableCell>
					<TableCell size={'medium'}>
						<TextField
								error={notValid}
								onChange={handleChange}
								fullWidth
								label={'내용'}
								multiline
								placeholder={'여기에 내용을 입력하세요.'}
								variant="outlined"
								ref={inputRef}
								{...props}
						/>
					</TableCell>
					<TableCell style={{width: '20%'}}>
						<Button variant="contained" color={"primary"} disabled={realTime} onClick={markHandler}>채점</Button>
						<Button variant="contained" color={"secondary"} onClick={showAnswer} style={{marginLeft: '20px'}}>정답보기</Button>
						{!realTime && <span className={marked === 'pass' ? classes.pass : classes.fail}>{getMarkedText()}</span>}
					</TableCell>
				</TableRow>
				<Dialog onClose={closeDialog} aria-labelledby="customized-dialog-title" open={showCorrectAnswer} maxWidth={'lg'}>
					<Typography gutterBottom>
						<div dangerouslySetInnerHTML={{__html: original}} /> 
          </Typography>
				</Dialog>
			</>
		);
}

