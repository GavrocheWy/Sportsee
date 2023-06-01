// Dependencies
import React from 'react'
// Components
import VerticalNav from '../components/Navigation/VerticalNav'
import ProfilSelection from '../components/Profil/ProfilSelection'

/** Display a profil page where user can select his profil
 * @return {JSX}
 */

const ProfilPage = () => {
    return (
        <div className='page-wrapper'>
            <VerticalNav/>
            <ProfilSelection />
        </div>
    )
}

export default ProfilPage