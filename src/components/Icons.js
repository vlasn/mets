/**
 * Created by clstrfvck on 03/05/2017.
 */
import SvgIcon from 'material-ui/SvgIcon';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from 'react';

export const CaretDown = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props}>
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
        </SvgIcon>
    </MuiThemeProvider>
);

export const CaretUp = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props}>
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </SvgIcon>
    </MuiThemeProvider>
);
