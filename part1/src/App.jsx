const Header = (props) => {
  return (
    <>
      <h1> {props.course} </h1>
    </>
  )
}

const Content = props => {
  return (
    <>
      <p>
        {props.partName}: {props.numOfExcercise}
      </p>
    </>
  )
}

const Total = props => {
  const arrOfExcercises = Object.values(props)
  return (
    <>
      <p> Total Number of excercises including all Parts: {arrOfExcercises.reduce((acc, current) => acc + current, 0)}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content partName = {part1} numOfExcercise = {exercises1}/>
      <Content partName = {part2} numOfExcercise = {exercises2}/>
      <Content partName = {part3} numOfExcercise = {exercises3}/>
      <Total excerciseOfP1 = {exercises1} excerciseOfP2 = {exercises2} excerciseOfP3 ={exercises3}/>
    </div>
  )
}

export default App