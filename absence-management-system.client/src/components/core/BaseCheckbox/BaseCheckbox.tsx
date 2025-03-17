import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './BaseCheckbox.scss';
import { useState } from "react";


function BaseCheckbox () {
    const [isTicked, setIsTicked] = useState(false);

return (<span className={`checkbox  ${isTicked ? 'ticked' : ''}`}  onClick={() => setIsTicked(!isTicked)}>
        <FontAwesomeIcon icon={faCheck} />
    </span>);
}

export default BaseCheckbox;