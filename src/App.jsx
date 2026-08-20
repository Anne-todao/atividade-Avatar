import Avatar from './components/Avatar';

function App() {
    return (
        <div
            style={{
                padding: '20px',
            }}>
            <h2>Usuários</h2>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Avatar nome="Luka" foto={58} online={true} />
                <Avatar nome="Mary" foto={39} online={false} />
                <Avatar nome="joao" foto={50} online={true} />
                <Avatar nome="Paul" foto={15} online={false} />
            </div>
        </div>
    );
}

export default App;
