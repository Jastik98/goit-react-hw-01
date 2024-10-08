import clsx from "clsx";
import css from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
            <>
            <ul className={css.friendsList}>
                <li className={css.friendsListItem}>
            <img src={avatar} alt={name} width="48px" />
            <p className={css.friendsName}>{name}</p>
                    <p className={clsx(css.friendsStatus, {
                        [css.statusIsOnline]: isOnline === true,
                        [css.statusIsOfline]: isOnline === false,
                    })}>{isOnline === true ? "Online" : "Ofline"}</p>
                    </li>
                </ul>
        </>
    );
}

export default FriendListItem