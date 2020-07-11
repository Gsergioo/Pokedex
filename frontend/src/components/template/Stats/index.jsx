import React from "react";


import "./styles.css";

const Stats = ({
    stats
}) => {
    return (
        <div className="stats">
            <h3 className="stats-title">Stats</h3>
            <table className="stats-table" cellSpacing="10">
               {
                   stats &&
                    <tbody>
                        <tr>
                            <td>{stats[0].stat.name}</td>
                            <td>{stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <td>{stats[1].stat.name}</td>
                            <td>{stats[1].base_stat}</td>
                        </tr>
                        <tr>
                            <td>{stats[2].stat.name}</td>
                            <td>{stats[2].base_stat}</td>
                        </tr>
                        <tr>
                            <td>{stats[3].stat.name}</td>
                            <td>{stats[3].base_stat}</td>
                        </tr>
                        <tr>
                            <td>{stats[4].stat.name}</td>
                            <td>{stats[4].base_stat}</td>
                        </tr>
                        <tr>
                            <td>{stats[5].stat.name}</td>
                            <td>{stats[5].base_stat}</td>
                        </tr>
                    </tbody>
               }
            </table>
        </div>
    )
};

export default Stats;