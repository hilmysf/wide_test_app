
import { useState } from "react";
import "../css/Home.css";
import Increment from "../components/Increment";
import Decrement from "../components/Decrement";
import Counter from "../components/Counter";
import Navigation from "../components/Navigation";


const Home = () => {
    const [number, setNumber] = useState(0)


    function onDecrease(event) {
        event.preventDefault();
        if (number > 0) {
            setNumber(number - 1);
        }

    }

    function onIncrease(event) {
        event.preventDefault();
        setNumber(number + 1);
    }


    return <>
        <Navigation />
        <div className="container">
            <div className="text">Counter App</div>
            <div className="row">
                <Decrement onDecrease={onDecrease} />
                <Counter number={number} />
                <Increment onIncrease={onIncrease} />
            </div>
        </div>
    </>
}
export default Home;