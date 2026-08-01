const totalExercises = (arrOfParts) => {
    return arrOfParts.reduce((acc, current) => acc + current.exercises, 0);
}

const Total = ({course}) => <p> Total of {totalExercises(course.parts)} Exercises!</p>


export default Total;