//@flow
import React from 'react';
import type { TodoSearchFormProps } from '../../definition/TodoTypeDefinition';
const TodoSearchForm = ({ placeholderText, onItemSearch }: TodoSearchFormProps) => {
	let titleField: any = null;
	let isOnComposition: boolean = false;
	//confirm Chrome using
	const isChrome = !!window.chrome && !!window.chrome.webstore
	
	const handleComposition = (e: keyboardEvent) => {
		if (e.type === 'compositionend') {
			isOnComposition = false;//stop Typing.
			if (e.target instanceof HTMLInputElement && !isOnComposition && isChrome) {
				onItemSearch(titleField.value)//handleItemSearch @App
			}
		} else {
			isOnComposition = true;//Typing.
		}
	}
	return (
		<div>
			<input
				className="form-control"
				type="text"
				ref={el => { titleField = el }}//anchor DOM object
				placeholder={placeholderText}
				onCompositionStart={handleComposition}
				onCompositionUpdate={handleComposition}
				onCompositionEnd={handleComposition}
				onChange={(e: keyboardEvent) => {
					//only when onComposition === false, will do onChange
					if(e.target instanceof HTMLInputElement && !isOnComposition){
						onItemSearch(titleField.value)
					}
				}}
			/>
		</div>
	)
}
export default TodoSearchForm;