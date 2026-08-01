import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    return (
        <>
        <Header course = {course}/>
        <Content course={course}></Content>
        <Total course={course}/>
        </>
    )
}

export default Course;