import React from 'react'

const Country = (props) => {
    // console.log(props);
    const { name, flag, population, region } = props.country
    const styleDiv = {
        border:"1px solid gray"
    }
    return (
        <div style={styleDiv}>
            <h3>this is {name}</h3>
            <img style={{ height: '50px' }} src={flag} alt="country flag" />
            <p>population: {population}</p>
            <p>region: {region}</p>
            <button>Add Country</button>
        </div>
    )
}

export default Country
