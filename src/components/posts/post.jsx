
import classes from "./post-list.module.css"







export default function Post({author,content}) {
   
    return (
        <li className={classes.post}>
           <p>{author}</p>
           <p>{content}</p>
        </li>
    )
}