import { ControlBox } from './main';
const box = new ControlBox({
});

box.addRangeBox({
    label: 'range box',
    onChange: (value) => {
        console.log('range box', value);
    },
    turnBtn: 0.1,
});

box.addColorBox({
    label: 'color box',
    onChange: (v) => {
        console.log(v);
    },
    range: 1,
})
