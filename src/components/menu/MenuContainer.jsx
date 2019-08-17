import { connect } from "react-redux";
import { getMenuLinks } from "../../store/menu/reducer";

import Menu from "./Menu";

const mapStateToProps = state => (
    {
        links: getMenuLinks(state)
    }
)

export default connect(mapStateToProps)(Menu);