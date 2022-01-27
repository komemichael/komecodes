import moment from 'moment';
export const debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
        let context = this,
            args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const throttle = (func, threshold, scope) => {
    threshold || (threshold = 250);
    let last, deferTimer;
    return function() {
        let context = scope || this;

        let now = +new Date(),
            args = arguments;
        if (last && now < last + threshold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                func.apply(context, args);
            }, threshold);
        } else {
            last = now;
            func.apply(context, args);
        }
    };
};

export const getCountdownTrigger = (number_of_seconds, tickCallBack, endCallBack) => {
    return new Promise(resolve => {
        var duration = moment.duration(number_of_seconds * 1000, 'milliseconds');
        var interval = 1000;

        let x = setInterval(function() {
            duration = moment.duration(duration - interval, 'milliseconds');
            if (duration.asSeconds() <= 0) {
                clearInterval(x);
                endCallBack();
                resolve();
            } else {
                tickCallBack(duration.seconds());
            }
        }, interval);
    });
}