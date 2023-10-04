import "./Rodape.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import "./Rodape.scss";


export default function Rodape() {
  return (
    <footer className="footer">
      <div>
        <ul className="list-items">
          <li className="item">
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li className="item">
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </li>
          <li className="item">
            <a href="https://www.reddit.com">
              <FontAwesomeIcon icon={faReddit} /> Reddit
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
