const { body } = document;


function changeBackground(number) {
    // Check if background already showing
    let previousbackground;
    if (body.className) {
        previousbackground = body.className;
    }
    
    // Reset CSS class for body
    body.className = '';
    switch(number) {
        case '1' : 
            return (previousbackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2' : 
            return (previousbackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3' : 
            return (previousbackground === 'background-3' ? false : body.classList.add('background-3'));
        default: 
            break;
        
    }
}