import react from "react";
import './App.css';
import DigitalClock from './DigitalClock'






function Welcome(){
    const currtime = new Date();
    const time = currtime.toLocaleTimeString();
    const hour = currtime.getHours();
    let Greetmsg = "";
    const cssStyle={};
    if(hour>=1 && hour <12 )
    {
        Greetmsg = "Good Morning";
        cssStyle.color="#f39c12";
    }
    else if(hour>=12 && hour <17 )
     {
        Greetmsg = "Good Afternoon";
        cssStyle.color="rgb(12 64 98)";
    }
    else if(hour>=17 && hour <20 )
     {
        Greetmsg = "Good Evening"
        cssStyle.color="#3498db";
    }
    else{
         Greetmsg = "Good Night"
         cssStyle.color="#2c3e50";
    }

    //quote array
var quotes = ["Blank", "\"Dude, suckin' at something is the first step at being sorta good at something.\"-  Jake (Adventure Time)"
                , "\"Either I will find a way, or I will make one.\" - Philip Sidney"
                , "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"- Thomas A. Edison"
                , "\"You are never too old to set another goal or to dream a new dream.\"- C.S Lewis"
                , "\"If you can dream it, you can do it.\"- Walt Disney"
                , "\"Never give up, for that is just the place and time that the tide will turn.\"- Harriet Beecher Stowe"
                , "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"- Muhammad Ali"
                , "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"- Bruce Lee"];
  var randNum = Math.floor(Math.random() * 8) + 1;

    return(
        <div className='mainDiv'>
            
                <div className='card'>
                    
                    <h1>Hello Sir, <span style={cssStyle}>{Greetmsg}</span></h1>
                    <h1><DigitalClock/> </h1><hr/>
                    <p className="quote">{quotes[randNum]}</p>
                </div>
            
        </div>
    );
}

export default Welcome;