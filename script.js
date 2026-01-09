function updateLogLoadAndSet(divId) {
    fetch('inputfile.txt').then(response => response.text()).then(text => updateLogSet(text, divId));
}

function updateLogSet(logData, divId) {
    let seperatedLogs = logData.split('\n');
    for (let x = 0; x < seperatedLogs.length; x++) {
        seperatedLogs[x] = seperatedLogs[x].split('$');
    }

    let logDivOpenerPart1 = '<div class="textLog';
    let logDivOpenerPart2 = '"><div class="updateLogDate">';
    let logDivMid = '</div><div class="updateLogUpdate">';
    let logDivCloser = '</div></div>';

    let updateLogDiv = '';

    for (let i in seperatedLogs) {
        updateLogDiv += logDivOpenerPart1

        if (i % 2 == 0) {
            updateLogDiv += 'Dark'
        } else {
            updateLogDiv += 'Light'
        }

        if ((seperatedLogs[i][0] == undefined) || (seperatedLogs[i][1] == undefined)) {
            updateLogDiv += logDivOpenerPart2 + 'ERROR' + logDivMid + 'ERROR: log entry is empty' + logDivCloser;

        } else {
            updateLogDiv += logDivOpenerPart2 + seperatedLogs[i][0] + logDivMid + seperatedLogs[i][1] + logDivCloser;
        }
    }

    document.getElementById(divId).innerHTML = updateLogDiv;
}

function footerBottomExtension() {
    let heightFooter = document.getElementsByTagName('footer')[0].offsetHeight;
    let heightBody = document.getElementsByTagName('body')[0].offsetHeight;
    let heightDevice = document.documentElement.clientHeight;

    console.log(heightFooter, heightBody, heightDevice);

    let heightBorder = heightDevice - heightBody;
    
    document.getElementsByTagName('footer')[0].style.borderBottomWidth = (heightBorder.toString() + 'px');
}