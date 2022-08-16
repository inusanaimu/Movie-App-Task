import classes from './Li.module.css'

const Li = (props) => {
  return <li className={classes.Li}>{props.children}</li>
}

export default Li
