import { useEffect, useState } from "react";
import data from "./data";
import "./style.css";

export default function App({i18n})
{
	const languages=Object.keys(data);
	const [selectedWord,setSelectedWord]=useState();
	const [selectedLanguage,setSelectedLanguage]=useState();
	const [showTranslation,setShowTranslation]=useState(false);
	const [askTranslation,setAskTranslation]=useState(false);
	const pickRandomWord=()=>
	{
		if(selectedLanguage!=null)
		{
			const selectedLanguageData=data[selectedLanguage];
			const index=Math.floor(Math.random() * selectedLanguageData.length);
			const random=Math.floor(Math.random() * 2);
			setAskTranslation(random==0);
			setSelectedWord(selectedLanguageData[index]);
		}
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
	const onLanguageSelected=e=>
	{
		setShowTranslation(false);
		setSelectedLanguage(e.target.value);
	};
	useEffect(pickRandomWord,[selectedLanguage]);
	return (
		<div className="App">
			<select class="form-select" onChange={onLanguageSelected}>
				<option value="" hidden selected>{i18n.selectALanguage}</option>
				{
					languages.map((each,i)=><option key={i} value={each}>{each}</option>)
				}
			</select>
			{
				selectedWord&&
				<>
					<h3>{askTranslation?selectedWord.translation:selectedWord.word}</h3>
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
							<h3>{askTranslation?selectedWord.word:selectedWord.translation}</h3>
						</>
					}
				</>
			}
		</div>
	);
}