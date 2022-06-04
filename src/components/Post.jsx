export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <div>{props.content}</div>
        </div>
    )
}