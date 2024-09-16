
function Hero() {
    const ASCII = `
    _  ___     _                _             _____           _    __      _ _       
    | |/ (_)   | |         (_) | )           |  __ \\         | |  / _|    | (_)      
    | ' / _ ___| |__   __ _ _  / ___         | |__) |__  _ __| |_| |_ ___ | |_  ___  
    |  < | / __| '_ \\ / _\`|  |  / __|        |  ___/ _ \\| '__| __|  _/ _ \\| | |/ _ \\ 
    | . \\| \\__ \\ | | | (_| | |  \\__ \\        | |  | (_) | |  | |_| || (_) | | | (_) |
    |_|\_\_|___/_| |_|\__,  |_| | ___/ /        |_|   \\___/|_|   \\__|_| \\___/|_|_|\\___/ 
                       __/ |                                                   © 2024 
                      |___/                                                         
                                                       
`;

    return (
        <>  <p>
            Made on Microsoft Windows [Version 10.0.22631.4169] <br/>
            (c) Microsoft Corporation. All rights reserved. <br/>
            </p>
            <div className="hero-section">
                <pre className="ascii-art">{ASCII}</pre>
                <p className="hero-text">
                    Welcome to my terminal <br />
                    To check the list of available commands, type 'Help'. <br />
                </p>
            </div>
        </>
    );
}

export default Hero;
