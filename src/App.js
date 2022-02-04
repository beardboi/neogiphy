import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/GetGifs';

function App() {
    const [gifs, setGifs] = useState([]);

    const headerTitle = 'GIFS SEARCHER </>';
    const description = 'A gif searcher...';

    useEffect(() => {
        console.log('Use Effect');
    });

    return (
        <>
            <div className="App-Header-Container">
                <div className="App-Header">
                    <h1>{headerTitle}</h1>
                </div>
                <div className="Sub-Title-Container">
                    <h4>{description}</h4>
                </div>
                {getGifs('pandas', 10)}
                <div className="Input-Container">
                    <input
                        type="text"
                        placeholder="Write a keyword..."
                        className="Search-Input"
                    />
                    <button className="Search-Button">Search</button>
                </div>
            </div>

            <div className="App-Content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu nulla erat. Nulla ac imperdiet orci, in porta
                lectus. Cras placerat mi nunc. Quisque ultrices magna at pretium
                ultricies. Aliquam dignissim odio eu ligula consequat semper.
                Sed vitae odio id metus condimentum rutrum. Mauris convallis
                nunc sit amet ipsum posuere posuere. Mauris elementum suscipit
                elementum. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Curabitur et
                interdum neque. Morbi convallis vel nisi vel congue. Quisque vel
                faucibus ipsum, ut accumsan erat. Integer mattis eleifend
                convallis. Sed eu porttitor mauris. Vivamus sit amet vestibulum
                justo, id dignissim lacus. Aliquam metus velit, lobortis ac
                lectus ac, bibendum luctus tortor. Duis rutrum et erat id
                posuere. Sed quis ante et felis pretium dapibus ac vel purus.
                Quisque enim orci, aliquet nec ultricies sit amet, suscipit
                malesuada magna. Phasellus vitae consequat sem, sed vehicula
                risus. Praesent tellus est, pharetra id elementum eu, ultrices
                sit amet elit. Praesent tincidunt lacus in ipsum scelerisque
                pulvinar scelerisque vel lorem. Sed pharetra porta enim,
                tincidunt tempor elit laoreet ac. Etiam non nunc varius, feugiat
                augue eget, auctor leo. Nunc pellentesque ipsum in molestie
                eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi semper cursus ipsum, vel sollicitudin urna
                vestibulum id. Integer malesuada non lacus at egestas. Mauris at
                suscipit ipsum, eu varius felis. Mauris vitae finibus neque.
                Praesent nec rutrum sem, vel sodales nisl. Aliquam tortor nulla,
                feugiat scelerisque ultrices in, faucibus nec quam. Vivamus at
                fringilla metus. Phasellus tristique ullamcorper nunc. Phasellus
                pretium nibh a finibus cursus. Nulla faucibus sit amet ex et
                euismod. Ut lacus arcu, lacinia nec nisl ut, scelerisque
                pharetra justo. Praesent cursus justo nisl, non lacinia massa
                tempus lobortis. Morbi a sodales magna. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Aliquam in nibh felis. Donec et arcu vitae purus
                convallis suscipit vel nec urna. Phasellus et dui maximus,
                vestibulum dolor sit amet, laoreet sapien. Maecenas id tempus
                nisl. Fusce ut sagittis diam. Nullam id odio a est luctus porta
                sit amet a justo. Curabitur aliquam mollis mi, accumsan
                scelerisque augue posuere non. Ut volutpat, odio in laoreet
                egestas, urna mi rutrum libero, quis vehicula justo metus at
                felis. Nunc dignissim tincidunt mollis. Ut quis aliquet eros, in
                congue quam. Duis id suscipit dolor, et condimentum neque. Duis
                nec nibh consequat, accumsan felis eu, tempor dui. Praesent sit
                amet dui et velit tincidunt laoreet. Integer molestie et diam
                eget fringilla. Aliquam ligula velit, suscipit sit amet
                sollicitudin in, pulvinar vel risus. Donec lacinia, enim
                bibendum pharetra mattis, mi magna auctor justo, a dignissim ex
                magna ut ipsum. Fusce sagittis lacus at lorem dictum, sit amet
                vestibulum ex ornare. Aenean dignissim, sem non pretium rhoncus,
                tellus leo vehicula ante, nec tincidunt nibh leo eget quam.
                Pellentesque congue convallis ex, non interdum lacus varius ut.
                Phasellus semper pulvinar placerat. Phasellus sodales metus id
                suscipit ultrices. Maecenas suscipit sagittis efficitur. Vivamus
                malesuada nulla nulla, nec feugiat arcu vulputate eget.
            </div>
        </>
    );
}

export default App;
