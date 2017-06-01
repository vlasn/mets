/**
 * Created by clstrfvck on 03/05/2017.
 */
import SvgIcon from 'material-ui/SvgIcon';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from 'react';

const defaultStyle = {
    padding: 0,
    margin: "-2px 0 -5px 0"
};

export const CaretDown = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {defaultStyle}>
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
        </SvgIcon>
    </MuiThemeProvider>
);

export const CaretUp = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {defaultStyle}>
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </SvgIcon>
    </MuiThemeProvider>
);

export const Download = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {defaultStyle}>
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </SvgIcon>
    </MuiThemeProvider>
);

export const Close = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {defaultStyle}>
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
        </SvgIcon>
    </MuiThemeProvider>
);


