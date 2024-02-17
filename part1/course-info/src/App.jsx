const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part1 = (props) => {
  console.log(props)
  return (
    <p>
      {props.part1} {props.exercises1}
    </p>
  )
}

const Part2 = (props) => {
  console.log(props)
  return (
    <p>
      {props.part2} {props.exercises2}
    </p>
  )
}

const Part3 = (props) => {
  console.log(props)
  return(
    <p>
      {props.part3} {props.exercises3}
    </p>
  )
}

const Content = () => {
  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1}/>
      <Part2 part1={part2} exercises1={exercises2}/>
      <Part3 part3={part3} exercises3={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App