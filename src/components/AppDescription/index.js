export default function AppDescription() {
    const emojis = '💻'
    const description = `A simple gif searcher written on React ${emojis}`

    return (
        <div className="Sub-Title-Container">
            <h3>{description}</h3>
        </div>
    )
}
