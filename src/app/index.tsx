import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import LocalizedStrings from '#src/components/language/localization';
import './styles.scss';
import { Link, Route, Routes } from 'react-router-dom';

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  return (
    <div className="">
      <div >
      <div>
        <hr />
        <nav>
          <ul>
            <div className=''>

              <li>
                {/* <Link to="/">{LocalizedStrings._home}</Link> */}
                <Link to="/">home</Link>
              </li>
              &nbsp;||&nbsp;
              <li>
                {/* <Link to="/about">{LocalizedStrings._about}</Link> */}
                <Link to="/about">about</Link>
              </li>
              &nbsp;||&nbsp;
              <li>
              </li>
            </div>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path={ "/" } element={ <>main page</> } />
          <Route path={ "/about" } element={ <>AboutPage</> } />

          {/* Перенаправление на главную страницу, если вызванной не существует */}
          <Route path='*' element={ <>main page</> }/>
        </Routes>
      </div>
      </div>
    </div>
  );
};
    
export default React.memo(Application);