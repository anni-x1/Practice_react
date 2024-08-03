import React from "react";

export default class Lists extends React.Component {
    render() {
        const names = ['Anni', 'Aurora', 'Taylor'];
        return (
            <>
                <h2>this is lists component</h2>
                <ul>
                    {
                        names.map((name,index)=>{
                            return (
                                <li key={index}>{name}</li>
                            )
                        })
                    }
                </ul>

            </>
        )
    }
}