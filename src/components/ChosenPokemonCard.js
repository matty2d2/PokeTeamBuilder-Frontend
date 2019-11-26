import React from 'react'
import { Card } from 'semantic-ui-react'
import '../Types.css'

const ChosenPokemonCard = ({id, front_sprite, name, types, removeFromTeam}) => {

    const useImage = (image) => {
        if (image) return image
    
        return require(`../img/Missingno2.png`)
    }

    const showPokeName = (name) => name.charAt(0).toUpperCase() + name.slice(1)

    const handleDoubleClick = () => {
        if (!name) return

        removeFromTeam()
    }

    const showTypes = (array) => {
        return array.map(type => <div key={type.id} className={'small-type-icon' + ' ' + type.name}>{type.name}</div>)
    }

    return (
        <Card  
        className='chosen-poke' 
        color='red'
        onDoubleClick={handleDoubleClick}
        >
            <div>
                <img className='selected-poke-img'src={useImage(front_sprite)} alt="oh no!"/>
            </div>
            <div>{(name)? showPokeName(name): '?'}</div>
            <span>{(types)? showTypes(types): ''}</span>
      </Card>
        
    )
}

export default ChosenPokemonCard