import classes from "./new-post.module.css"


function NewPost({onChangeAuthor,onChangeContent,onSubmit}) {

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <p>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" required onChange={onChangeAuthor}/>
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea type="text" id="content" rows="3" required onChange={onChangeContent}/>
            </p>
            <button type="submit">Add Post</button>
        </form>
    )
}

export default NewPost;