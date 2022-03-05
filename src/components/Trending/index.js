import { Link } from 'wouter'
import './styles.css'

export default function Trending({ trending }) {
    return (
        <Link to={`/search/${trending}`}>
            <h4 className="Trending">{trending}</h4>
        </Link>
    )
}
