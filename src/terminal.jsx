import React, { useState, useRef, useEffect } from 'react';
import Hero from './Hero.jsx';

function Terminal() {

    const Help = [
        "about-me    (stalking?)",
        "projects    (what i do/did/am doing)",
        "social      (i dont know what else to add)",
        "resume      (hire me now!)",
        "clear       (clears the terminal)",
        "You have to type 'cd' and then the name of the section you want to go to"
    ];

    const aboutMe = [
        "---------------------------------------------------------------------------------------------------------",
        "Hi, I am Kishgi! - a Software Engineering undergraduate from Sri Lanka.",
        "I am currently looking for an opportunity to work as an intern. I made",
        "this terminal portfolio using React btw I got this idea from Forrest Knight (a YouTuber).",
        "I dont have any more things to say because i have to finish my coding, Thank You.",
        "---------------------------------------------------------------------------------------------------------",
    ];

    const projects = [
        "A JavaPuzzleGame",
        "JS certification projects by freeCodeCamp",
        "Currently working on a Student Management System",
        "----------------------------------------------------------",
        "You can check the source codes on my GitHub :)"
    ];

    const social = [
        "GITHUB: https://github.com/kishginthjaffna",
        "LinkedIn: https://www.linkedin.com/in/kishgi/",
    ];

    const resume = [
        "Full Name: Kishgintharaam Sathananthan ",
        "Age: 22",
        "Address: Jaffna, SriLanka",
        "Phone: +94 77 147 4777",
        "Email: kishgi1234@gmail.com",
        "Education: BComp. Software Engineering @ University of Sri Jayewardenepura (R)",
        "Languages - FrameWorks - Tools : html, css, js, php, React, MongoDB, Laravel, java, bootstrap"
    ];


    const [commandHistory, setCommandHistory] = useState([]);
    const [inputValue, setInputValue] = useState([""]);
    const endOfList = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

    useEffect(() => {
        endOfList.current?.scrollIntoView({ behavior: 'smooth' });
    }, [commandHistory]);

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            let output = '';
            let input = inputValue.trim().toLowerCase();
            
            switch (input) {
                case 'help':
                    output = <ul>{Help.map((item, index) => <li className="help" key={index}>{item}</li>)}</ul>;
                    break;

                case 'cd about-me':
                    output = <ul>{aboutMe.map((item, index) => <li className="about-me" key={index}>{item}</li>)}</ul>;
                    break;

                case 'cd projects':
                    output = <ul>{projects.map((item, index) => <li className="projects" key={index}>{item}</li>)}</ul>;
                    break;

                case 'cd social':
                    output = <ul>{social.map((item, index) => <li className="social" key={index}>{item}</li>)}</ul>;
                    break;

                case 'cd resume':
                    output = <ul>{resume.map((item, index) => <li className="resume" key={index}>{item}</li>)}</ul>;
                    break;

                case 'clear':
                    output = '';
                    setCommandHistory([]);
                    break;

                default:
                    output = `Bruh! Are you dumb? Unknown command: ${inputValue}`;
            }



            setCommandHistory(prevHistory => [
                ...prevHistory,
                { command: inputValue, output: output }
            ]);
            setInputValue(''); 
        }
    }

    const cmdText = "visitor@mycomputer:~$" ;

    

    return (
        <>
            <Hero />
            <div className="cmd-input-text">
                <div className="terminal-output">
                    {commandHistory.map((entry, index) => (
                        <div key={index}>
                            <div>{cmdText} {entry.command}</div>
                            <p>{entry.output}</p>
                        </div>
                    ))}
                    <div ref={endOfList}></div>
                </div>

                 {cmdText}            <input type="text" 
                                             value={inputValue} 
                                             onChange={e => setInputValue(e.target.value)} 
                                             className="cmd-input" 
                                             onKeyDown={handleKeyDown} 
                                             ref={inputRef}/>
            </div>
        </>
    );
}

export default Terminal;
