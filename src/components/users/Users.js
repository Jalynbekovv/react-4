import React from "react";
import classes from "./users.module.css";


class Users extends React.Component {


    render() {
        return(
            <div className={classes.first}>
                <h1>Users:</h1>
                <ul>
                    {
                       this.props.aboutUsers.map((users) => {
                           return(
                               <li className={classes.second}>
                                   <div className={classes.third}>
                                       Name:<li>{users.name}</li>
                                       Age:<li>{users.age}</li>
                                       Position:<li>{users.position}</li>
                                   </div>

                               </li>
                           )
                       })

                    }
                </ul>

            </div>
        )
    }
}

export default Users;