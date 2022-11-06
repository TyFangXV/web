import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import MenuScreen from '../components/menu/menuscreen';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);


  if(typeof global !== undefined)
  {
    return (
      <RecoilRoot>
        <div>
          <span>
            <FiMenu
              className={"menu_btn"}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </span>
          <span hidden={!menuOpen}>
            <MenuScreen menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          </span>
        </div>
        <div hidden={menuOpen}>
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    );
  }else{
    return <div>loading</div>
  }
}

export default MyApp;
