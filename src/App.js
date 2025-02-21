import { useEffect, useState } from "react";
import data from "./data";
import "./style.css";

export default function App({i18n})
{
	const [selectedWord,setSelectedWord]=useState(data[0]);
	const [showTranslation,setShowTranslation]=useState(false);
	const pickRandomWord=()=>
	{
		const index=Math.floor(Math.random() * data.length);
		setSelectedWord(data[index]);
	};
	const showOnClick=()=>
	{
		setShowTranslation(true);
	};
	const nextOneOnClick=()=>
	{
		setShowTranslation(false);
		pickRandomWord();
	};
	useEffect(pickRandomWord,[]);
	return (
		<div className="App">
				<h3>{selectedWord.word}</h3>
				{!showTranslation&&
					<div class="d-grid gap-2">
						<button onClick={showOnClick} className="btn btn-primary">{i18n.showTranslation}</button>
					</div>
				}
				{showTranslation&&
					<>
						<div class="d-grid gap-2">
							<button className="btn btn-success" onClick={nextOneOnClick}>{i18n.nextOne}</button>
						</div>
						<h3>{selectedWord.translation}</h3>
					</>
				}
		</div>
	);
}