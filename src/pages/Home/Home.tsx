import { Link } from "react-router"

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur le créateur de memes de &copy;hampix</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus blanditiis totam quasi consequatur sit quis eligendi porro, minima quaerat atque qui facilis natus vel facere expedita optio, explicabo et.</p>
      <p>Veuillez sélectionner une action :</p>
      <ul>
        <li><Link to="/thumbnail">Thumbail</Link></li>
        <li><Link to="/editor">Nouveau meme</Link></li>
        <li><Link to="/editor/3">modif du 3</Link></li>
      </ul>
    </div>
  )
}

export default Home