let mark = prompt('Enter a grade')

function studentGrade(mark){
    if(mark>= 79 && mark <= 100){
        return 'A'
    }
    else if(mark>= 60 && mark <= 79){
        return 'B'
    }
    else if(mark>= 59 && mark <= 49){
        return 'C'
    }
    else if(mark>= 40 && mark <= 49){
        return 'D'
    }
    else if(mark <= 40){
        return 'E'
    }
}