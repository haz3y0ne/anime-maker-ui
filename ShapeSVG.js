React = import('react');
import rect from 'https://assets.codepen.io/8589710/ShapeSVG.js';





class rect extends React.Component {
    render() {
        return (
            <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="30" height="30" stroke="black" fill="#FFFFFF" stroke-width="5" />
            </svg>
        )
    }
}

class rRect extends React.Component {
    render() {
        return (
            <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="#FFFFFF" stroke-width="5" />
            </svg>
        )
    }
};

class circle extends React.Component {
    render() {
        return (
            <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="75" r="20" stroke="red" fill="#FFFFFF" stroke-width="5" />
            </svg>
        )
    }
};

class ellipse extends React.Component {
    render() {
        return (
            <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="#FFFFFF" stroke-width="5" />
            </svg>
        )
    }
};

class polyline extends React.Component {
    render() {
        return (
            <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5" />
                <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                    stroke="orange" fill="#FFFFFF" stroke-width="5" />
            </svg>
        )
    }
};

class polygon extends React.Component {
    render() {
        return (
            <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                    stroke="green" fill="#FFFFFF" stroke-width="5" />
                <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5" />
            </svg>
        )
    }
};

export class Rect {render()};
export class rRect {};
export class circle {};
export class ellipse {};
export class polyline {};
export class polygon {};