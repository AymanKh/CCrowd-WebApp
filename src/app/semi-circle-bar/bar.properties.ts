export class BarProperties {
    properties: any;

    constructor() {
        this.properties = {
            strokeWidth: 6,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400 * 2,
            svgStyle: null,
            text: {
                value: '',
                alignToBottom: false
                // ,style: {
                //     'font-size': '10px'
                // }
            },
            from: { color: '#7CFC00' },
            to: { color: '#ED6A5A' },
            // Set default step function for all animate calls
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
                var value = Math.round(bar.value() * 10);
                if (value === 0) {
                    bar.setText('');
                } else {
                    bar.setText(value);
                }

                bar.text.style.color = state.color;
            }
        }
    }
    
    
}