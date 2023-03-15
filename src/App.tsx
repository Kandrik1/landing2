import React from 'react';
import './App.sass';
export default function App() {
  return (
    <div className='base'>
        <div className='base1'>
        <div className='paletteColor'>
            <div className='darkBlue'></div>
            <div className='white'></div>
            <div className='darkGreen'></div>
        </div>
        <div className='block'>
            <div className='block1'>
                <h1 className='logoName'>Bioface</h1>
                <div className='navigation'>
                    <p className='navigationText'>Reviews</p>
                    <p className='navigationText'>Best Seller</p>
                    <p className='navigationText'>Contac Us </p>
                </div>
                <div className='block3'>
                    <div className='SingUp'>
                        <p className='text1'>Sing Up</p>
                    </div>
                    <div className='LogIn'>
                        <p className='text2'>Log In</p>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
            <div className='barrier'>
                <div className='content'>
                    <h1 className='heading'>Custom skincare that works.</h1>
                    <p className='text'>We do body care to feel good daily care</p>
                    <div className='button'><p className='buttonText'>Shop now</p></div>
                </div>
            </div>
            <div><img src='/gallery/picture.svg' alt=''/></div>
        </div>
        </div>
        </div>
    </div>
  );
}