import React from "react";
import { dots } from "../images";
import BtnExtension from "./BtnExtension";

const Extensions = ({ image, browser, version }) => {

    return (
        <>
            <div className="bg-white shadow-2xl text-center p-8 rounded">
                <img src={image} alt="" className="block mx-auto mb-4" />
                <h3 className="text-xl mb-4">{browser}</h3>
                <p className="text-sm">{version}</p>
                <img src={dots} alt="" className="block mx-auto my-4" />
                <BtnExtension />
            </div>
        </>
    )
}

export default Extensions

