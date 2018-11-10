import react, { Component } from 'react'

export default class Utility extends Component {
    _WaktuSekarang = () => {
        let time = new Date().toLocaleTimeString();
        return time;
    };
}