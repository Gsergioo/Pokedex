import React from "react";


import "./styles.css";

const Stats = ({
    stats
}) => {

    const statWidth = 120;

    return (
        <div className="stats">
            <h3 className="stats-title">Stats</h3>
            <table className="stats-table" cellSpacing="10">
               {
                   stats &&
                    <tbody>
                        <tr>
                            <td>{stats[0].stat.name}</td>
                            <td>
                                <div className="stats-values">
                                    <div className="stat-percentage" 
                                        style={{width: `${(stats[0].base_stat/180) * statWidth}px`}} >
                                        {stats[0].base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{stats[1].stat.name}</td>
                            <td>
                                <div className="stats-values">
                                    <div className="stat-percentage" 
                                        style={{width: `${(stats[1].base_stat/180) * statWidth}px`}} >
                                        {stats[1].base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{stats[2].stat.name}</td>
                            <td>
                                <div className="stats-values">
                                    <div className="stat-percentage" 
                                        style={{width: `${(stats[2].base_stat/180) * statWidth}px`}} >
                                        {stats[2].base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{stats[3].stat.name}</td>
                            <td>
                                <div className="stats-values">
                                    <div className="stat-percentage" 
                                        style={{width: `${(stats[3].base_stat/180) * statWidth}px`}} >
                                        {stats[3].base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{stats[4].stat.name}</td>
                            <td>
                                <div className="stats-values">
                                    <div className="stat-percentage" 
                                        style={{width: `${(stats[4].base_stat/180) * statWidth}px`}} >
                                        {stats[4].base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>{stats[5].stat.name}</td>
                            <td>
                                <div className="stats-values">
                                    <div className="stat-percentage" 
                                        style={{width: `${(stats[5].base_stat/180) * statWidth}px`}} >
                                        {stats[5].base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
               }
            </table>
        </div>
    )
};

export default Stats;