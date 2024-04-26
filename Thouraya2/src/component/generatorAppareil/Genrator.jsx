import React from 'react'
import GeneratorMain from './GeneratorMain'
import NavbarUser from "../NavbarUser/NavbarUser";

export default function Genrator({data}) {
    return (
        <div>

            <NavbarUser />
            <GeneratorMain data={data}/>
        </div>
    )
}
