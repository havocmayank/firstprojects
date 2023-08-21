import React from 'react';
import renderer from 'react-test-renderer';
import {render,screen,fireEvent} from '@testing-library/react-native'
import App from './App';

  it('getting first input', async () => {
    const expectedsectionTitle ="Todays's Tasks"
    render (<App />)   
    expect(await screen.findByText(expectedsectionTitle)).toBeTruthy(); 
    expect(screen.toJSON()).toMatchSnapshot()  
  } );

    


