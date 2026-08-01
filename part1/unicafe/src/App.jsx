import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, statistic }) => <p>{text}: {statistic}</p>;


const App = () => {
    const [goodClick, setGood] = useState(0);
    const [neutralClick, setNeutral] = useState(0);
    const [badClick, setBad] = useState(0);

    if (goodClick + neutralClick + badClick === 0) {
        return (
            <>
                <Header text="F E E D - B A C K S" />
            <Button onClick={() => setGood(goodClick + 1)} text="Good" />
            <Button onClick={() => setNeutral(neutralClick + 1)} text="Neutral" />
            <Button onClick={() => setBad(badClick + 1)} text="Bad" />
            
            <Header text="Statistics" />
            
            <h1>NO FEEDBACK PROVIDED!</h1>
            </>
        )
    }

    return (
        <>
            <Header text="F E E D - B A C K S" />
            <Button onClick={() => setGood(goodClick + 1)} text="Good" />
            <Button onClick={() => setNeutral(neutralClick + 1)} text="Neutral" />
            <Button onClick={() => setBad(badClick + 1)} text="Bad" />
            
            <Header text="Statistics" />
            <Statistic text="Good" statistic={goodClick} />
            <Statistic text="Neutral" statistic={neutralClick} />
            <Statistic text="Bad" statistic={badClick} />
            <Statistic text="Total Feedback" statistic={goodClick + neutralClick + badClick}/> 
            <Statistic text="Average" statistic={ (goodClick - badClick) / (goodClick + neutralClick + badClick)} />
            <Statistic text ="Positive Percentage" statistic={ goodClick / (goodClick + neutralClick + badClick) * 100 + '%'}/>

        </>
    );
};

export default App;