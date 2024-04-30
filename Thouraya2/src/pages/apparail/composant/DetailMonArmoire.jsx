import React from 'react'
import CribleJF100 from "../../../component/CribleJF100/CribleJF100";
import ETATSGENERAL from "../../../component/ETATSGENERAL/ETATSGENERAL";
import NavbarUser from "../../../component/NavbarUser/NavbarUser";

export default function DetailArmoire({ data }) {
    return (
        <>
            <NavbarUser />

            <div className="AllMyApp">
                <CribleJF100 title={"CRIBLE JF 100"} data={data} />
                <ETATSGENERAL title={"ETATS GENERAL"} data={data} />
                {/*<CribleJF100 title={"BROYEUR WB 100"} data={data} />*/}
            </div>

        </>
    )
}
