import React, { Fragment } from "react";

const Header = () => {

    return (
        <Fragment>
            <div className="border-b p-2 text-center">
                <h1 className="text-2xl" style={{ color: "#0089ff" }}>Today's NASA image</h1>
            </div>
        </Fragment>
    )

}

export default Header