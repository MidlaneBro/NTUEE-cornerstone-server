import React from "react";
import { Table } from "reactstrap";
const colors = [
    "gold",
    "silver",
    "red",
    "green",
    "lightseagreen",
    "dodgerblue",
    "darkblue",
    "darkmagenta",
    "indigo",
    "white",
    "black",
];
function sort_rank(team1, team2) {
    if(team2.point - team1.point !=0){
        return team2.point - team1.point;
    }
    else {
        return team2.last_eaten - team1.last_eaten;
    }
}
export default (props) => {
    //console.log(props)
    const { history } = props;
    let ranklist = [];
    for (let team in history) {
        ranklist.push({
            name: team,
            point: history[team].point,
            last_eaten: history[team].last_eaten_time,
            time: history[team].time,
        });
    }
    ranklist.sort(sort_rank);
    ranklist = ranklist.map((team, key) => (
        <tr key={key}>
            <td>
                <div
                    style={{
                        fontSize: "20px",
                        color: "white",
                        lineHeight: "60px",
                        width: "60px",
                        height: "60px",
                        background: colors[key % 10],
                        borderRadius: "50%",
                        textAlign: "center",
                        verticalAlign: "middle",
                    }}
                >
                    {key+1}
                </div>
            </td>
            <td className="rank" style={{ verticalAlign: "middle"}}>
                {team.name}
            </td>
            <td className="rank" style={{ verticalAlign: "middle"}}>
                {team.point}
            </td>
            <td className="rank" style={{ verticalAlign: "middle"}}>
                {team.last_eaten}
            </td>
        </tr>
    ));
    return (
        <Table>
            <thead>
                <tr>
                    <th className="rank">排名</th>
                    <th className="rank">隊名</th>
                    <th className="rank">得分</th>
                    <th className="rank">最終得分時間(秒)</th>
                </tr>
            </thead>
            <tbody>{ranklist}</tbody>
        </Table>
    );
};