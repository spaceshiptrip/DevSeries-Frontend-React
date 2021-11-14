import React from "react";
import './PrettyPrint.css';


const PrettyPrintJson = ({data}) => {
    // (destructured) data could be a prop for example
    return (<div><pre><p className="prettyprint">{ JSON.stringify(data, null, 2) }</p></pre></div>);
}

export default PrettyPrintJson;