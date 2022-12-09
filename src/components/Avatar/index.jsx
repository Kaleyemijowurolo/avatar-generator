import React, { useState } from 'react';
import './Avatar.css';
import Axios from 'axios';

const Avatar = () => {
const date = new Date()
	// Setting up the initial states using react hook 'useState'
	const [sprite, setSprite] = useState("bottts");
	const [seed, setSeed] = useState(1000);
	
	// Function to set the current sprite type
	function handleSprite(spritetype) {
		setSprite(spritetype);
		

	}
	
	// Function to generate random seeds for the API
	function handleGenerate() {
		let x = Math.floor(Math.random() * 1000);
		setSeed(x);
	}
	
	// Function to download image and save it in our computer
	function downloadImage() {
		Axios({
			method: "get",
			url: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg`,
			responseType: "arraybuffer"
		})
		.then((response) => {
			var link = document.createElement("a");
			link.href = window.URL.createObjectURL(
				new Blob([response.data],
				{ type: "application/octet-stream" })
			);
			link.download = `${seed}.svg`;
			document.body.appendChild(link);
			link.click();
			setTimeout(function () {
				window.URL.revokeObjectURL(link);
			}, 200);
		})
		.catch((error) => { });
	}

	return (
		<div className="container">
			<div className="nav">
				<p>Generate Avatar's Randomly</p>
			</div>
			<div className="home">
				<div className="btns">
					<button className={`active focus`} onClick={() => {
						handleSprite("avataaars") }}>Human</button>
					<button className={`active focus`} onClick={() => {
						handleSprite("human") }}>Pixel</button>
					<button className={`active focus`} onClick={() => {
						handleSprite("bottts") }}>Bots</button>
					<button className={`active focus`} onClick={() => {
						handleSprite("jdenticon") }}>Vector</button>
					<button className={`active focus`} onClick={() => {
						handleSprite("identicon") }}>Identi</button>
					<button className={`active focus`} onClick={() => {
						handleSprite("gridy") }}>Alien</button>
					<button className={`active focus`} onClick={() => {
						handleSprite("micah") }}>Avatars</button>
				</div>
				<div className="avatar">
					<img src=
{`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`} alt="Sprite" />
				</div>
				<div className="generate">
					<button id="gen" onClick={() => {
						handleGenerate() }}>Next</button>
					<button id="down" onClick={() => {
						downloadImage() }}>Download</button>
				</div>
			</div>
			<footer>&copy;{date.getFullYear()} Kayode Kolade C </footer>
		</div>
	)
}

export default Avatar;
