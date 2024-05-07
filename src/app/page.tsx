import Header from "./components/header/Header";
import TwitchPlayer from "./components/Twitch";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <TwitchPlayer channel="alderiate" />
            </main>
        </>
    );
}
