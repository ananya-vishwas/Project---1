let round = 1;
let comp;
let user;

function trigAnim() {
    document.getElementById('compImg').classList.add('triggerAnimation');
    document.getElementById('userImg').classList.add('triggerAnimation');
}
function clearAnim() {
    document.getElementById('compImg').classList.remove('triggerAnimation');
    document.getElementById('userImg').classList.remove('triggerAnimation');
}
function randomVal(){
    comp =  Math.floor(Math.random()*3);
    return comp;
}

function clearInput() {
    document.getElementById('userImg').setAttribute('src', "./images/rightrock.png");
    document.getElementById('compImg').setAttribute('src', "./images/leftrock.png");
}   

function title(choice){
    if(choice == 1) {
        document.getElementById('status').innerHTML = "User Won!";
    }
    else if (choice == 2){
        document.getElementById('status').innerHTML = "Computer Won!";
        
    }
    else if (choice == 3){
        document.getElementById('status').innerHTML = "It's a Draw!";
        
    }
    else if (choice == 4){
        document.getElementById('status').innerHTML = "Lets Play!";

    }
}


function playOn(user,comp) {

    if(round > 0) {
        if (comp == 0) {
            if (user == 0 ) {

            }
            else if (user == 1 ) {
                document.getElementById('userImg').setAttribute('src', "./images/rightpaper.png")
            }
            else if (user == 2 ) {
                document.getElementById('userImg').setAttribute('src', "./images/rightscissor.png")
            }
            
        }
        else if (comp == 1) {
            document.getElementById('compImg').setAttribute('src', "./images/leftpaper.png")

            if (user == 0 ) {

            }
            else if (user == 1 ) {
                document.getElementById('userImg').setAttribute('src', "./images/rightpaper.png")
            }
            else if (user == 2 ) {
                document.getElementById('userImg').setAttribute('src', "./images/rightscissor.png")
            }
        }
        else if (comp == 2) {
            document.getElementById('compImg').setAttribute('src', "./images/leftscissor.png");

            if (user == 0 ) {

            }
            else if (user == 1 ) {
                document.getElementById('userImg').setAttribute('src', "./images/rightpaper.png")
            }
            else if (user == 2 ) {
                document.getElementById('userImg').setAttribute('src', "./images/rightscissor.png")
            }
        }
    }
}

function selRock() {
    trigAnim();
    let user = 0;
    let comp = randomVal();
    
    
    setTimeout(() => {
        playOn(user,comp)
        clearAnim();
    }, 1500);

    setTimeout(() => { 
        clearInput();
        title(4);
    } , 2500 )
}


function selPaper() {
    let user = 1;
    let comp = randomVal();
    trigAnim();

    setTimeout(() => {
        playOn(user,comp)
        clearAnim();
    }, 1500);

    setTimeout(() => { 
        clearInput();
        title(4);
    } , 2500 )
}
function selScissors() {
    let user = 2;
    let comp = randomVal();
    trigAnim();

    setTimeout(() => {
        playOn(user,comp)
        clearAnim();
    }, 1500);

    setTimeout(() => { 
        clearInput();
        title(4);
    } , 2500 )
}