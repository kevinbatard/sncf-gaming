import Header from './components/header/Header';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <iframe
                    src="https://player.twitch.tv/?channel=chowh1&parent=www.localhost:3000.fr"
                    allowFullScreen={true}
                    height="378"
                    width="620"
                ></iframe>
            </main>
        </>
    );
}
