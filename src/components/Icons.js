/**
 * Created by clstrfvck on 03/05/2017.
 */
import SvgIcon from 'material-ui/SvgIcon';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from 'react';

const defaultStyle = {
    padding: 0,
    margin: "-2px 0 -5px 0",
    cursor: "pointer"
};

const caretStyle = {
    padding: 0,
    margin: "0px 0px -10px 20px",
    cursor: "pointer"
};


const caretViewBox = "0 0 24 26";

export const CaretDown = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {caretStyle} viewBox = {caretViewBox}>
            <path d="M1.5,0C1.883,0,2.267,0.147,2.56,0.44l9.939,9.939l9.94-9.939c0.586-0.586,1.535-0.586,2.121,0
        c0.586,0.585,0.586,1.536,0,2.121l-11,11c-0.586,0.586-1.536,0.586-2.122,0l-11-11c-0.586-0.585-0.586-1.536,0-2.121
        C0.732,0.147,1.116,0,1.5,0z" />
        </SvgIcon>
    </MuiThemeProvider>
);

export const CaretUp = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {caretStyle} viewBox = {caretViewBox}>
            <path d="M23.5,14c-0.384,0-0.768-0.146-1.061-0.439L12.5,3.621l-9.939,9.939c-0.586,0.586-1.535,0.586-2.121,0
        c-0.586-0.585-0.586-1.536,0-2.121l11-11c0.586-0.586,1.535-0.586,2.121,0l11,11c0.586,0.585,0.586,1.536,0,2.121
        C24.268,13.854,23.884,14,23.5,14z" />
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

export const RightArrow = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {defaultStyle} viewBox='0 0 20 20'>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
    </MuiThemeProvider>
);

export const LeftArrow = (props) => (
    <MuiThemeProvider>
        <SvgIcon {...props} style = {defaultStyle} viewBox='0 0 20 20'>
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
    </MuiThemeProvider>
);
