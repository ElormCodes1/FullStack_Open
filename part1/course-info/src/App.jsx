const Header = (props) => {
  console.log("header props", props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part1 = (props) => {
  console.log("part1 props", props)
  return (
    <p>
      {props.part1} {props.exercises1}
    </p>
  )
}

const Part2 = (props) => {
  console.log("part2 props", props)
  return (
    <p>
      {props.part2} {props.exercises2}
    </p>
  )
}

const Part3 = (props) => {
  console.log("part3 props", props)
  return(
    <p>
      {props.part3} {props.exercises3}
    </p>
  )
}

const Content = (props) => {
  console.log("Content props ", props)
  return (
    <div>
      <Part1 part1={props.fpart.name} exercises1={props.fpart.exercises}/>
      <Part2 part2={props.spart.name} exercises2={props.spart.exercises}/>
      <Part3 part3={props.tpart.name} exercises3={props.tpart.exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log("total props", props)
  return (
    <p>Number of exercises {props.fpart.exercises + props.spart.exercises + props.tpart.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content fpart={part1} spart={part2} tpart={part3} />
      <Total fpart={part1} spart={part2} tpart={part3} />
    </div>
  )
}

export default App