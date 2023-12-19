import {Link} from "react-router-dom";
import './styles.css'
export const Header = ({name, link}) => {
  return(
      <div className={'header'}>
          <Link to={`/${link}`} className={'header_link'}>{name}</Link>
          <div className={'header_name'}>
             Идущий к реке
          </div>
      </div>
  )
}