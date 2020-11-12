const displayConsoleLogs = false;

//Check if object is empty
export const emptyObjectChecker = obj => {
    if(displayConsoleLogs) {
        console.log(' ')
        console.log('Console logs from utility emptyObjectChecker function.');
        console.log('Object.keys(obj).length === 0 ', Object.keys(obj).length === 0);
        console.log('obj.constructor === Object ', obj.constructor === Object);
    }

    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const PopupCenter = (url, title, w, h) => {
    // Fixes dual-screen position  Most browsers      Firefox
    /*
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screen.top;
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
    //usage
    //PopupCenter('http://localhost:8888/','xtf','900','500');
    */
}

export const getUrlHashParams = (url, ampersand = '&', equal = '=') => {
    let ampersandArr = [];
    let equalArr = [];
    for(let i=0; i< url.length; i++) {
        if (url[i] === ampersand){ ampersandArr.push(i) }
        if (url[i] === equal){ equalArr.push(i) }
    }
    const obj = {};
    let hashVariables = null;
    let hashVariablesVal = null;
    let x = null
    equalArr.forEach((element, index) => {
        x = index === 0 ? 1 : ampersandArr[index-1]+1;
        hashVariables = url.substring(x, element);
        hashVariablesVal = url.substring(element+1, ampersandArr[index]);
        obj[hashVariables] = hashVariablesVal;
    });
    return obj;
};

export const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};